'use client'
import mermaid from 'mermaid'
import { useEffect, useState } from 'react'

export function MermaidPreview({ chart }: { chart: string }) {
  const [svg, setSvg] = useState('')
  useEffect(() => {
    mermaid.initialize({ startOnLoad: false, theme: 'dark' })
    mermaid.render(`m-${Math.random()}`, chart).then((r) => setSvg(r.svg)).catch(()=>setSvg('<p>Invalid mermaid syntax</p>'))
  }, [chart])
  return <div className="rounded border border-slate-700 p-2" dangerouslySetInnerHTML={{ __html: svg }} />
}
