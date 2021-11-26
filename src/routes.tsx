import React from 'react';
import ModalsPage from './pages/ModalsPage';
import ReduxPage from './pages/ReduxPage';

export const routes: Array<{ path: string; component: React.ComponentType; fetch?: (param: { dispatch: any }) => any }> = [
  { path: '/modals', component: ModalsPage },
  { path: '/redux', component: ReduxPage }
];
