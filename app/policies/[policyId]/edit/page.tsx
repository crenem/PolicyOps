import { LexicalPolicyEditor } from '@/components/lexical-policy-editor'
import { PolicyShell } from '@/components/policy-shell'

async function saveDraft() {
  'use server'
  console.log('draft saved')
}

async function submitReview() {
  'use server'
  console.log('submitted for review')
}

export default function EditPolicyPage() {
  return <PolicyShell><div className="p-4 space-y-3"><div className="flex gap-2"><form action={saveDraft}><button className="bg-slate-200 text-slate-900 px-3 py-1 rounded">Save Draft Revision</button></form><form action={submitReview}><button className="bg-blue-500 px-3 py-1 rounded">Submit for Review</button></form></div><LexicalPolicyEditor /></div></PolicyShell>
}
