'use client'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { useState } from 'react'
import { MermaidPreview } from './mermaid-preview'

export function LexicalPolicyEditor() {
  const [chart, setChart] = useState('flowchart TD\nA[Draft] --> B[In Review] --> C[Approved] --> D[Published]')
  return <div className="grid grid-cols-2 gap-3 h-[65vh]"><LexicalComposer initialConfig={{ namespace: 'policydesk', onError: console.error, theme: {} }}><div className="border border-slate-700 rounded p-2"><RichTextPlugin contentEditable={<ContentEditable className='min-h-[300px] outline-none' />} placeholder={<div className='text-slate-500'>Write policy...</div>} ErrorBoundary={() => null} /><HistoryPlugin /><OnChangePlugin onChange={(state)=>state.read(()=>{})} /></div></LexicalComposer><div><textarea value={chart} onChange={(e)=>setChart(e.target.value)} className="w-full h-40 bg-slate-900 border border-slate-700 rounded p-2" /><MermaidPreview chart={chart} /></div></div>
}
