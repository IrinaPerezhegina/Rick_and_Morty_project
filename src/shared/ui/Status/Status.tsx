import { classNames } from '@/shared';

import './Status.css';

const STATUSES_DICT = {
  Alive: 'green',
  Dead: 'red',
  unknown: 'orange'
};

export type StatusesType = keyof typeof STATUSES_DICT;

export interface StatusProps {
  status?: StatusesType;
  classname?: string;
}

function isStatusesType(value: unknown): value is StatusesType {
  return value === 'Alive' || value === 'Dead' || value === 'unknown';
}

export const CircleStatus = (props: StatusProps) => {
  const { status = 'unknown', classname } = props;
  const statusVal = isStatusesType(status) ? status : 'unknown';

  const statusValue = STATUSES_DICT[statusVal];

  return statusValue ? (
    <div className={classNames(statusValue, [classname])} />
  ) : null;
};
