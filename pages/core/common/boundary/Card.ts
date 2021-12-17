export interface Card {
  id?: string;
  title?: string;
  description?: string;
  priority?: string;
}

export enum Priority {
  High = 'high',
  Medium = 'medium',
  Low = 'low',
}
