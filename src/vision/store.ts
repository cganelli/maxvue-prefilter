import type { CalibrationProfile } from './types'
const KEY = 'maxvue.calibration.v1'
export function saveProfile(p: CalibrationProfile) { localStorage.setItem(KEY, JSON.stringify(p)) }
export function loadProfile(): CalibrationProfile | null {
  const raw = localStorage.getItem(KEY)
  if (!raw) return null
  try { return JSON.parse(raw) as CalibrationProfile } catch { return null }
}
export function hasProfile(): boolean { return !!localStorage.getItem(KEY) }
