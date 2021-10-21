import {
  TypedUseSelectorHook,
  useDispatch as untypedUseDispatch,
  useSelector as untypedUseSelector
} from 'react-redux';
import type { RootState, AppDispatch } from './configureStore';

export const useDispatch = () => untypedUseDispatch<AppDispatch>();

export const useSelector: TypedUseSelectorHook<RootState> = untypedUseSelector;
