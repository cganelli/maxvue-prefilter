export type PSFParams = { defocusD: number; cylD: number; axisDeg: number; rgbScale: [number,number,number] }
export function buildUserPSF(p: PSFParams) {
  const base = Math.max(0.5, p.defocusD * 0.6)
  return { sigma: [base * p.rgbScale[0], base * p.rgbScale[1], base * p.rgbScale[2]] }
}
