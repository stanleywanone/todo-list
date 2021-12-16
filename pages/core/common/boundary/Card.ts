export interface Card {
  id?: string;
  title?: string;
  description?: string;
  deadline?: string;
  priority?: string;
}

export enum Priority {
  High = 'high',
  Medium = 'medium',
  Low = 'low',
}
