import Link from 'next/link'
import { ReactNode } from 'react'

export function PolicyShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 px-4 py-2 flex items-center justify-between">
        <h1 className="font-semibold">PolicyDesk</h1>
        <div className="text-sm text-slate-400">⌘K Command Palette</div>
      </header>
      <div className="grid grid-cols-[220px_1fr]">
        <aside className="border-r border-slate-800 p-3 space-y-2">
          {['dashboard', 'policies', 'approvals', 'reviews', 'standards', 'settings'].map((x) => (
            <Link key={x} href={`/${x}`} className="block rounded px-2 py-1 hover:bg-slate-800 capitalize">{x}</Link>
          ))}
        </aside>
        <main>{children}</main>
      </div>
    </div>
  )
}
