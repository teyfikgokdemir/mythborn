// Mythborn Astrology Platform — 24-Hour Custom Dual Time Picker
// Guarantees strict 24-hour time format (00:00 - 23:59) across all operating systems,
// browsers, and regional locales. Completely eliminates native browser AM/PM / ÖÖ/ÖS pickers.

export const render24hTimePicker = ({
  idPrefix = 'qk',
  name = 'time',
  defaultValue = '14:30',
  ariaLabelHour = 'Saat',
  ariaLabelMinute = 'Dakika'
} = {}) => {
  const parts = String(defaultValue || '14:30').split(':');
  const defHour = parts[0] || '14';
  const defMinute = parts[1] || '30';
  const safeHour = String(defHour).padStart(2, '0').slice(-2);
  const safeMinute = String(defMinute).padStart(2, '0').slice(-2);

  const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));

  const hoursHtml = hours.map((h) =>
    `<option value="${h}" ${h === safeHour ? 'selected' : ''}>${h}</option>`
  ).join('');

  const minutesHtml = minutes.map((m) =>
    `<option value="${m}" ${m === safeMinute ? 'selected' : ''}>${m}</option>`
  ).join('');

  return `
    <div class="astro-time-24h" id="${idPrefix}-time-picker">
      <div class="astro-time-col">
        <select id="${idPrefix}-hour" class="astro-time-select" aria-label="${ariaLabelHour} (00-23)" onchange="var m=document.getElementById('${idPrefix}-min'),t=document.getElementById('${idPrefix}-time-val');if(t&&m)t.value=this.value+':'+m.value;">
          ${hoursHtml}
        </select>
        <span class="astro-time-sub">24h saat</span>
      </div>
      <span class="astro-time-colon" aria-hidden="true">:</span>
      <div class="astro-time-col">
        <select id="${idPrefix}-min" class="astro-time-select" aria-label="${ariaLabelMinute} (00-59)" onchange="var h=document.getElementById('${idPrefix}-hour'),t=document.getElementById('${idPrefix}-time-val');if(t&&h)t.value=h.value+':'+this.value;">
          ${minutesHtml}
        </select>
        <span class="astro-time-sub">dakika</span>
      </div>
      <input type="hidden" id="${idPrefix}-time-val" name="${name}" value="${safeHour}:${safeMinute}">
    </div>
  `;
};
