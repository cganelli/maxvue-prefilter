export type CalibrationProfile = {
  version: 1
  defocusD: number
  cylD: number
  axisDeg: number
  rgbScale: [number, number, number]
  distanceCm: number
  confidence: number
  createdAt: string
}
export type PrefilterConfig = {
  gainDb: number
  cutoffCpd: number
  haloLimit: number
  greenBias: number
}
