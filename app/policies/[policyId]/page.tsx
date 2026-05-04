import Link from 'next/link'
import { PolicyShell } from '@/components/policy-shell'
import { policies, revisions, reviews } from '@/lib/data'

export default async function PolicyDetail({ params }: { params: Promise<{ policyId: string }> }) {
  const { policyId } = await params
  const policy = policies.find((p) => p.id === policyId)
  if (!policy) return <PolicyShell><div className='p-6'>Not found</div></PolicyShell>
  return <PolicyShell><div className="p-6 space-y-4"><h2 className="text-2xl">{policy.title}</h2><div className="grid grid-cols-3 gap-4"><div className="col-span-2 rounded border border-slate-700 p-3"><h3 className="font-semibold mb-2">Revision Timeline</h3>{revisions.filter(r=>r.policyId===policyId).map(r=><div key={r.id} className="text-sm mb-2">v{r.version} · {r.status} · {r.changeSummary}</div>)}</div><div className="rounded border border-slate-700 p-3"><h3 className="font-semibold mb-2">Approval Status</h3><p className="text-sm">Current: {policy.status}</p><p className="text-sm">Review due: {reviews.find(r=>r.policyId===policyId)?.dueDate}</p><Link className="text-blue-300 text-sm" href={`/policies/${policyId}/edit`}>Open Editor</Link></div></div></div></PolicyShell>
}
