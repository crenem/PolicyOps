import { PolicyShell } from '@/components/policy-shell'
import { PolicyDataTable } from '@/components/policy-data-table'

export default function PoliciesPage() {
  return <PolicyShell><div className="p-6"><h2 className="text-xl mb-4">Policies</h2><PolicyDataTable /></div></PolicyShell>
}
