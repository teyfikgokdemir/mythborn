// Mythborn Dynamic Mathematical Natal Chart Wheel Renderer
import { ZODIAC_SIGNS } from './data-core.js';

export function renderNatalWheelSvg({
  planets = [],
  angles = null,
  aspects = [],
  size = 500
}) {
  const cx = size / 2;
  const cy = size / 2;
  const rOuter = size * 0.46;
  const rZodiac = size * 0.38;
  const rHouses = size * 0.28;
  const rInner = size * 0.25;

  const ascDeg = angles?.ascendant?.longitude ?? 0;
  // Offset so that Ascendant sits on the left horizon (180° in standard Cartesian, or 9 o'clock)
  const degToSvgRad = (deg) => {
    // 180° - (deg - ascDeg) converts ecliptic to SVG angle starting at left horizon counterclockwise
    const angle = ((180 - (deg - ascDeg)) % 360 + 360) % 360;
    return (angle * Math.PI) / 180;
  };

  // Outer Zodiac Ring Segments
  let zodiacSegments = '';
  for (let i = 0; i < 12; i++) {
    const sign = ZODIAC_SIGNS[i];
    const startAngle = degToSvgRad(i * 30);
    const endAngle = degToSvgRad((i + 1) * 30);
    const midAngle = degToSvgRad(i * 30 + 15);

    const x1 = cx + rOuter * Math.cos(startAngle);
    const y1 = cy + rOuter * Math.sin(startAngle);
    const x2 = cx + rZodiac * Math.cos(startAngle);
    const y2 = cy + rZodiac * Math.sin(startAngle);

    // Sign symbol position
    const symX = cx + ((rOuter + rZodiac) / 2) * Math.cos(midAngle);
    const symY = cy + ((rOuter + rZodiac) / 2) * Math.sin(midAngle);

    zodiacSegments += `
      <line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="rgba(212,175,55,0.4)" stroke-width="1"/>
      <text x="${symX.toFixed(1)}" y="${symY.toFixed(1)}" font-size="14" fill="#d4af37" text-anchor="middle" dominant-baseline="central">${sign.symbol}</text>
    `;
  }

  // House Lines
  let houseLines = '';
  for (let h = 0; h < 12; h++) {
    const angle = degToSvgRad(ascDeg + h * 30);
    const x1 = cx + rZodiac * Math.cos(angle);
    const y1 = cy + rZodiac * Math.sin(angle);
    const x2 = cx + rInner * Math.cos(angle);
    const y2 = cy + rInner * Math.sin(angle);
    const isCard = h === 0 || h === 3 || h === 6 || h === 9; // ASC, IC, DSC, MC

    houseLines += `
      <line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${isCard ? '#d4af37' : 'rgba(255,255,255,0.12)'}" stroke-width="${isCard ? '1.5' : '0.8'}"/>
    `;
  }

  // Planet Coordinates on Wheel
  const planetPoints = {};
  let planetGlyphs = '';
  for (const p of planets) {
    if (typeof p.longitude !== 'number') continue;
    const ang = degToSvgRad(p.longitude);
    const rPos = (rZodiac + rHouses) / 2;
    const px = cx + rPos * Math.cos(ang);
    const py = cy + rPos * Math.sin(ang);
    planetPoints[p.id] = { x: px, y: py, ang, ...p };

    const rxLabel = p.isRetrograde ? '<tspan font-size="8" fill="#f87171">℞</tspan>' : '';

    planetGlyphs += `
      <circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="10" fill="#0c101c" stroke="#d4af37" stroke-width="1"/>
      <text x="${px.toFixed(1)}" y="${py.toFixed(1)}" font-size="12" fill="#fff" text-anchor="middle" dominant-baseline="central">${p.symbol}</text>
      ${p.isRetrograde ? `<text x="${(px + 9).toFixed(1)}" y="${(py - 7).toFixed(1)}" font-size="9" fill="#f87171">℞</text>` : ''}
    `;
  }

  // Aspect Lines
  let aspectLines = '';
  for (const asp of aspects.slice(0, 16)) {
    const p1 = planetPoints[asp.fromId];
    const p2 = planetPoints[asp.toId];
    if (!p1 || !p2) continue;

    const stroke = asp.nature === 'harmonious'
      ? 'rgba(74, 222, 128, 0.45)' // Emerald green
      : asp.nature === 'challenging'
      ? 'rgba(251, 146, 60, 0.5)' // Amber orange
      : 'rgba(212, 175, 55, 0.6)'; // Gold

    aspectLines += `
      <line x1="${p1.x.toFixed(1)}" y1="${p1.y.toFixed(1)}" x2="${p2.x.toFixed(1)}" y2="${p2.y.toFixed(1)}" stroke="${stroke}" stroke-width="1" stroke-dasharray="${asp.type === 'Sekstil' ? '2 2' : 'none'}"/>
    `;
  }

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="100%" height="auto" style="max-width:${size}px; filter: drop-shadow(0 0 24px rgba(212,175,55,0.2))" role="img" aria-label="Interactive Natal Chart Wheel">
      <defs>
        <radialGradient id="wheel-disc" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#0a0e1a"/>
          <stop offset="85%" stop-color="#06080e"/>
          <stop offset="100%" stop-color="#030408"/>
        </radialGradient>
      </defs>
      <circle cx="${cx}" cy="${cy}" r="${rOuter}" fill="url(#wheel-disc)" stroke="#d4af37" stroke-width="2"/>
      <circle cx="${cx}" cy="${cy}" r="${rZodiac}" fill="none" stroke="rgba(212,175,55,0.3)" stroke-width="1"/>
      <circle cx="${cx}" cy="${cy}" r="${rHouses}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      <circle cx="${cx}" cy="${cy}" r="${rInner}" fill="#06080e" stroke="rgba(212,175,55,0.2)" stroke-width="1"/>

      <!-- 12 Zodiac Segments -->
      ${zodiacSegments}

      <!-- 12 Houses -->
      ${houseLines}

      <!-- Center Aspect Grid -->
      ${aspectLines}

      <!-- Planet Markers -->
      ${planetGlyphs}

      <!-- Center Hub with Compass Star -->
      <circle cx="${cx}" cy="${cy}" r="12" fill="#0c101c" stroke="#d4af37" stroke-width="1.5"/>
      <circle cx="${cx}" cy="${cy}" r="3" fill="#d4af37"/>
    </svg>
  `;
}
