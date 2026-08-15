#!/usr/bin/env bash
set -euo pipefail
base='https://mythborn.co'
urls=(
  '/es/'
  '/es/astroloji-kutuphanesi'
  '/es/burclar/koc'
  '/es/tarot-kartlari'
  '/es/tarot-kartlari/el-loco'
  '/es/blog'
  '/es/blog/12-agustos-2026-gunes-tutulmasi'
  '/es/advanced-astrology'
  '/es/astrokartografi'
)
for path in "${urls[@]}"; do
  body=$(curl -fsSL --max-time 25 "$base$path")
  status=$(curl -sS -o /dev/null -w '%{http_code}' --max-time 25 "$base$path")
  lang=$(printf '%s' "$body" | grep -o '<html[^>]*lang="[^"]*"' | head -1 || true)
  canonical=$(printf '%s' "$body" | grep -o '<link rel="canonical"[^>]*>' | head -1 || true)
  hreflang_count=$(printf '%s' "$body" | grep -o 'hreflang="[^"]*"' | wc -l | tr -d ' ')
  es_hreflang=$(printf '%s' "$body" | grep -o 'hreflang="es"[^>]*' | head -1 || true)
  title=$(printf '%s' "$body" | grep -o '<title>[^<]*' | head -1 | sed 's#<title>##' || true)
  echo "$status | $path | $lang | hreflang=$hreflang_count | es=$es_hreflang | title=$title"
done
