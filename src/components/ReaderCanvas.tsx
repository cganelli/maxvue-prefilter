import React, { useEffect, useRef } from 'react'
import { prefilterImageData } from '../vision/prefilter'
type Props = { text: string; font?: string; sizePx?: number; color?: string; bg?: string }
export default function ReaderCanvas({ text, font='-apple-system, system-ui, sans-serif', sizePx=18, color='#cae4ff', bg='#101010' }: Props) {
  const ref = useRef<HTMLCanvasElement | null>(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    canvas.width = Math.min(900, window.innerWidth - 32)
    canvas.height = 320
    ctx.fillStyle = bg; ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.font = `${sizePx}px ${font}`; ctx.fillStyle = color
    const lines = text.split('\\n'); let y = 48
    for (const line of lines) { ctx.fillText(line, 24, y); y += sizePx * 1.6 }
    const img = ctx.getImageData(0,0,canvas.width,canvas.height)
    const out = prefilterImageData(img); ctx.putImageData(out,0,0)
  }, [text, font, sizePx, color, bg])
  return <canvas ref={ref} style={{ width: '100%', borderRadius: 12 }} />
}
