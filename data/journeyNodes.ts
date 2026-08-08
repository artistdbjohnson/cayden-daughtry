export type JourneyNode = {
  id: string
  title: string
  year?: string
  headline: string
  body: string
  proof?: string
  accent: 'ice' | 'heat'
}

export const journeyNodes: JourneyNode[] = [
  {
    id: 'roots',
    title: 'Roots',
    year: 'Early',
    headline: 'Boynton Beach → Fort Lauderdale',
    body: 'Playing up from the start. High motor, high IQ, already rewriting the ceiling for what a young guard can be.',
    proof: 'Playing up early',
    accent: 'ice',
  },
  {
    id: 'cca',
    title: 'CCA Eagles',
    year: '2024–26',
    headline: 'Back-to-Back State Champions',
    body: 'Calvary Christian Academy. Consecutive FHSAA Class 3A titles. The engine of a national contender.',
    proof: '26.5 PPG · State Champ ×2',
    accent: 'heat',
  },
  {
    id: 'ote',
    title: 'Fear of God',
    year: 'OTE',
    headline: 'Elite Environment',
    body: 'Fear of God Athletics. Overtime Elite affiliate. Daily competition against the best, sharpening the cold-blooded edge.',
    proof: 'OTE Affiliate',
    accent: 'ice',
  },
  {
    id: 'jr-nba',
    title: 'Court of Leaders',
    year: '2024',
    headline: 'Jr. NBA Court of Leaders',
    body: 'Selected among the next generation of leaders on and off the floor. Recognition that the work is seen.',
    proof: 'Jr. NBA',
    accent: 'ice',
  },
  {
    id: 'usa',
    title: 'USA Gold',
    year: '2026',
    headline: 'FIBA U17 World Cup Champions',
    body: 'Turkey. Gold medal. Averaged 11.7 points and 4.7 assists while helping Team USA stand on top of the world.',
    proof: '11.7 PPG · 4.7 APG · Gold',
    accent: 'heat',
  },
  {
    id: 'peach-jam',
    title: 'Peach Jam',
    year: '2026',
    headline: 'Record-Setting Run · MVP · Champion',
    body: 'Florida Rebels. Eight games. 32.3 points per game. Tournament records rewritten. Peach Jam MVP and champion. The most skilled player in high school basketball made it undeniable.',
    proof: '32.3 PPG · 58.6% FG · 48.8% 3PT · MVP',
    accent: 'heat',
  },
  {
    id: 'surge',
    title: 'The Surge',
    year: 'Now',
    headline: 'Top-3 National · Board Open',
    body: '247Sports #3 overall. Major offers from Kentucky, Miami, Michigan, Iowa, UConn, Louisville, Florida and more. Uncommitted. The next chapter is being written in real time.',
    proof: '5★ · #3 Overall · Uncommitted',
    accent: 'ice',
  },
]
