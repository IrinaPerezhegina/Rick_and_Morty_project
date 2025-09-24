import { StatusesType } from '@/shared/ui';

export function checkingStatus(value: unknown): StatusesType {
  return value === 'Alive' || value === 'Dead' || value === 'unknown'
    ? value
    : 'unknown';
}
