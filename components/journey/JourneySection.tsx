'use client'

import { journeyNodes } from '@/data/journeyNodes'
import ReducedMotionTimeline from './ReducedMotionTimeline'

export default function JourneySection() {
  return <ReducedMotionTimeline nodes={journeyNodes} />
}
