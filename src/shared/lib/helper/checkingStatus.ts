import { StatusesType } from '@/shared';

export function checkingStatus(value: unknown): StatusesType {
  return value === 'Alive' || value === 'Dead' || value === 'unknown'
    ? value
    : 'unknown';
}
