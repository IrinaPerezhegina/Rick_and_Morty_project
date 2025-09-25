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

export const CircleStatus = (props: StatusProps) => {
  const { status = 'unknown', classname } = props;

  const statusValue = STATUSES_DICT[status];

  return statusValue ? (
    <div className={classNames(statusValue, classname)} />
  ) : null;
};
