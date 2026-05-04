import Link from 'next/link'
import { policies } from '@/lib/data'

export function PolicyDataTable() {
  return <table className="w-full text-sm"><thead><tr className="text-left border-b border-slate-700"><th>Policy</th><th>Status</th><th>Owner</th><th>Next Review</th></tr></thead><tbody>{policies.map(p=><tr key={p.id} className="border-b border-slate-800"><td><Link className="text-blue-300" href={`/policies/${p.id}`}>{p.title}</Link></td><td>{p.status}</td><td>{p.owner}</td><td>{p.nextReviewDate}</td></tr>)}</tbody></table>
}
