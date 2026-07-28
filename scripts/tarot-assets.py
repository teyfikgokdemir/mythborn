#!/usr/bin/env python3
"""Create reproducible Mythborn Tarot masters, production derivatives and QA sheets."""

from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parents[1]
MASTER_ROOT = ROOT / "docs" / "assets" / "tarot-masters"
PUBLIC_ROOT = ROOT / "public" / "images" / "tarot"
MASTER_SIZE = (1600, 2800)
GRID_SIZE = (480, 840)
DETAIL_SIZE = (960, 1680)


def normalized(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    rgb = image.convert("RGB")
    return ImageOps.fit(rgb, size, method=Image.Resampling.LANCZOS, centering=(0.5, 0.5))


def save_derivatives(source: Path, asset: str) -> None:
    with Image.open(source) as original:
        master = normalized(original, MASTER_SIZE)

    master_dir = MASTER_ROOT / asset
    public_dir = PUBLIC_ROOT / asset
    master_dir.mkdir(parents=True, exist_ok=True)
    public_dir.mkdir(parents=True, exist_ok=True)
    master.save(master_dir / "master.webp", "WEBP", quality=95, method=6)

    grid = master.resize(GRID_SIZE, Image.Resampling.LANCZOS)
    grid_large = master.resize(DETAIL_SIZE, Image.Resampling.LANCZOS)
    detail = master.resize(DETAIL_SIZE, Image.Resampling.LANCZOS)
    detail_mobile = detail.resize(GRID_SIZE, Image.Resampling.LANCZOS)
    grid.save(public_dir / "grid-480.webp", "WEBP", quality=78, method=6)
    grid.save(public_dir / "grid-480.avif", "AVIF", quality=52, speed=6)
    grid_large.save(public_dir / "grid-960.webp", "WEBP", quality=76, method=6)
    grid_large.save(public_dir / "grid-960.avif", "AVIF", quality=50, speed=6)
    detail_mobile.save(public_dir / "detail-480.webp", "WEBP", quality=84, method=6)
    detail_mobile.save(public_dir / "detail-480.avif", "AVIF", quality=60, speed=6)
    detail.save(public_dir / "detail-960.webp", "WEBP", quality=84, method=6)
    detail.save(public_dir / "detail-960.avif", "AVIF", quality=60, speed=6)


def review_sheet(group: str, output: Path) -> None:
    files = sorted((MASTER_ROOT / group).rglob("master.webp"))
    if not files:
        raise SystemExit(f"No masters found under {MASTER_ROOT / group}")
    thumb_w, thumb_h, label_h, columns = 240, 420, 34, 7
    rows = (len(files) + columns - 1) // columns
    sheet = Image.new("RGB", (columns * thumb_w, rows * (thumb_h + label_h)), "#080712")
    draw = ImageDraw.Draw(sheet)
    font = ImageFont.load_default(size=18)
    for index, file in enumerate(files):
        x = (index % columns) * thumb_w
        y = (index // columns) * (thumb_h + label_h)
        with Image.open(file) as image:
            sheet.paste(normalized(image, (thumb_w, thumb_h)), (x, y))
        label = file.parent.relative_to(MASTER_ROOT).as_posix()
        draw.rectangle((x, y + thumb_h, x + thumb_w, y + thumb_h + label_h), fill="#100d1d")
        draw.text((x + 8, y + thumb_h + 7), label, fill="#e8c883", font=font)
    output.parent.mkdir(parents=True, exist_ok=True)
    sheet.save(output, quality=90, optimize=True)


def difference_hash(file: Path) -> str:
    with Image.open(file) as image:
        sample = ImageOps.grayscale(image).resize((17, 16), Image.Resampling.LANCZOS)
    pixels = list(sample.getdata())
    bits = []
    for row in range(16):
        start = row * 17
        bits.extend(pixels[start + column] > pixels[start + column + 1] for column in range(16))
    value = sum(int(bit) << (len(bits) - index - 1) for index, bit in enumerate(bits))
    return f"{value:064x}"


def build_registry(output: Path) -> None:
    entries = []
    for master in sorted(MASTER_ROOT.rglob("master.webp")):
        asset = master.parent.relative_to(MASTER_ROOT).as_posix()
        with Image.open(master) as image:
            width, height = image.size
        derivatives = {}
        for file in sorted((PUBLIC_ROOT / asset).glob("*.*")):
            with Image.open(file) as image:
                derivative_size = list(image.size)
            derivatives[file.name] = {
                "bytes": file.stat().st_size,
                "sha256": hashlib.sha256(file.read_bytes()).hexdigest(),
                "size": derivative_size,
            }
        entries.append(
            {
                "asset": asset,
                "master": {
                    "bytes": master.stat().st_size,
                    "dhash256": difference_hash(master),
                    "sha256": hashlib.sha256(master.read_bytes()).hexdigest(),
                    "size": [width, height],
                },
                "derivatives": derivatives,
            }
        )
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(
        json.dumps(
            {
                "schema": 1,
                "method": "Original OpenAI image generation; 256-bit horizontal difference hash from the 1600x2800 master.",
                "entries": entries,
            },
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    sub = parser.add_subparsers(dest="command", required=True)
    process = sub.add_parser("process")
    process.add_argument("--source", type=Path, required=True)
    process.add_argument("--asset", required=True)
    sheet = sub.add_parser("sheet")
    sheet.add_argument("--group", required=True)
    sheet.add_argument("--output", type=Path, required=True)
    registry = sub.add_parser("registry")
    registry.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    if args.command == "process":
        save_derivatives(args.source, args.asset)
    elif args.command == "sheet":
        review_sheet(args.group, args.output)
    else:
        build_registry(args.output)


if __name__ == "__main__":
    main()
