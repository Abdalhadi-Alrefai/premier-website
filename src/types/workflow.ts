/**
 * Reusable Workflow Data Structure for Premier Dental Lab.
 * Defines the conceptual stages of the digital dental laboratory workflow.
 * Prepared for future CMS, documentation, and operational pipeline integration.
 */
export interface WorkflowStep {
  id?: string;
  number?: string;
  titleKey: string;
  descriptionKey: string;
  badgeKey?: string;
  icon: string;
  displayOrder: number;
  isActive: boolean;
}

/**
 * Default provisional workflow stages for Premier Dental Lab.
 * Cleanly separated from presentation components to ensure modularity and maintainability.
 */
export const DEFAULT_WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 'intake',
    titleKey: 'steps.intake.title',
    descriptionKey: 'steps.intake.description',
    badgeKey: 'steps.intake.badge',
    icon: 'Scan',
    displayOrder: 1,
    isActive: true,
  },
  {
    id: 'design',
    titleKey: 'steps.design.title',
    descriptionKey: 'steps.design.description',
    badgeKey: 'steps.design.badge',
    icon: 'Monitor',
    displayOrder: 2,
    isActive: true,
  },
  {
    id: 'manufacturing',
    titleKey: 'steps.manufacturing.title',
    descriptionKey: 'steps.manufacturing.description',
    badgeKey: 'steps.manufacturing.badge',
    icon: 'Cog',
    displayOrder: 3,
    isActive: true,
  },
  {
    id: 'finishing',
    titleKey: 'steps.finishing.title',
    descriptionKey: 'steps.finishing.description',
    badgeKey: 'steps.finishing.badge',
    icon: 'Sparkles',
    displayOrder: 4,
    isActive: true,
  },
  {
    id: 'delivery',
    titleKey: 'steps.delivery.title',
    descriptionKey: 'steps.delivery.description',
    badgeKey: 'steps.delivery.badge',
    icon: 'PackageCheck',
    displayOrder: 5,
    isActive: true,
  },
];
