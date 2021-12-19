export interface Card {
  _id?: string;
  id?: string;
  title?: string;
  description?: string;
  priority?: string;
  progress?: string;
}

export enum Priority {
  High = 'high',
  Medium = 'medium',
  Low = 'low',
}
