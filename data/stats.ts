/** Verified stats only — Aug 2026 research lock */

export const peachJam = {
  games: 8,
  ppg: 32.3,
  apg: 6.1,
  rpg: 4.9,
  spg: 2.9,
  fg: 58.6,
  three: 48.8,
  ft: 91,
  label: 'Peach Jam 2026 · 8 games',
  note: 'Tournament MVP · Champion · Record',
} as const

export const juniorSeason = {
  ppg: 26.5,
  apg: 5.2,
  rpg: 4.5,
  spg: 2.7,
  fg: 54.5,
  three: 36.8,
  label: 'Junior Season · CCA',
  note: 'State Champion · Nat\'l Jr of the Year',
} as const

export const usaU17 = {
  ppg: 11.7,
  apg: 4.7,
  label: 'USA U17 · Gold',
  note: 'FIBA U17 World Cup Champions',
} as const

export const proofChips = [
  { label: 'Peach Jam MVP', heat: true },
  { label: '32.3 PPG', heat: false },
  { label: 'First-Ever EYBL MVP', heat: true },
  { label: 'U17 Gold', heat: false },
  { label: 'State Champ ×2', heat: true },
] as const
