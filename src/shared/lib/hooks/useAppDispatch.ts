import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/app/config';

export const useAppDispatch = () => useDispatch<AppDispatch>();
