import { PolicyShell } from '@/components/policy-shell'
import { policies } from '@/lib/data'

export default function DashboardPage() {
  const due30 = policies.filter((p) => new Date(p.nextReviewDate).getTime() - Date.now() < 1000*60*60*24*30).length
  return <PolicyShell><div className="p-6 grid grid-cols-3 gap-4"><div className="rounded border border-slate-700 p-4">Due in 30 days: {due30}</div><div className="rounded border border-slate-700 p-4">Drafts Awaiting Approval: 1</div><div className="rounded border border-slate-700 p-4">Approval Bottlenecks: 0</div></div></PolicyShell>
}
