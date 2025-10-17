import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '@/app/config';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
