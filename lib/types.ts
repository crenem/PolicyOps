export type PolicyStatus = 'draft' | 'in_review' | 'changes_requested' | 'approved' | 'published' | 'archived'

export type Policy = {
  id: string
  title: string
  program: string
  category: string
  standard: string
  owner: string
  status: PolicyStatus
  nextReviewDate: string
}

export type PolicyRevision = {
  id: string
  policyId: string
  version: string
  status: PolicyStatus
  contentJson: unknown
  contentHtml: string
  contentText: string
  createdBy: string
  createdAt: string
  submittedAt?: string
  approvedAt?: string
  publishedAt?: string
  changeSummary: string
}

export type PolicyReview = {
  id: string
  policyId: string
  revisionId: string
  reviewCycle: 'annual' | 'biennial' | 'custom'
  dueDate: string
  assignedReviewerIds: string[]
  status: 'not_started' | 'in_progress' | 'completed' | 'overdue'
  completedAt?: string
  findings?: string
  requiresRevision: boolean
}
