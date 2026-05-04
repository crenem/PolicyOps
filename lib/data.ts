import { Policy, PolicyRevision, PolicyReview } from './types'

export const policies: Policy[] = [
  { id: 'p1', title: 'Incident Response Policy', program: 'IT', category: 'Security', standard: 'CARF 1.A', owner: 'Alex Lee', status: 'in_review', nextReviewDate: '2026-06-20' },
  { id: 'p2', title: 'Client Privacy Policy', program: 'HUD / CoC', category: 'Compliance', standard: 'HUD 2.4', owner: 'Sam Park', status: 'published', nextReviewDate: '2026-08-12' }
]

export const revisions: PolicyRevision[] = [
  { id: 'r1', policyId: 'p1', version: '1.3', status: 'in_review', contentJson: {}, contentHtml: '', contentText: '', createdBy: 'Alex Lee', createdAt: '2026-05-01', submittedAt: '2026-05-02', changeSummary: 'Added escalation matrix.' },
  { id: 'r2', policyId: 'p1', version: '1.2', status: 'published', contentJson: {}, contentHtml: '', contentText: '', createdBy: 'Alex Lee', createdAt: '2025-11-01', publishedAt: '2025-11-15', changeSummary: 'Annual review updates.' }
]

export const reviews: PolicyReview[] = [
  { id: 'rv1', policyId: 'p1', revisionId: 'r1', reviewCycle: 'annual', dueDate: '2026-06-20', assignedReviewerIds: ['u1'], status: 'in_progress', requiresRevision: false }
]
