import React, { useEffect } from 'react';
import { useDispatch, useSelector } from '../../../../redux/hooks';
import { fetchTodos, resetState, selectTodos } from '../../../../redux/reducers/todosReducer';

import DumbComponent from '../DumbComponent';

export interface SmartComponentProps {
  selectedPage: number;
  selectedLimit: number;
  pagesNumbers: number[];
  setSelectedPage: (value: number) => void;
  setSelectedLimit: (value: number) => void;
}

const SmartComponent: React.FC<SmartComponentProps> = ({
  selectedPage,
  selectedLimit,
  pagesNumbers,
  setSelectedPage,
  setSelectedLimit
}) => {
  const { loadingState, items } = useSelector(selectTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetState());
      setSelectedPage(1);
      setSelectedLimit(10);
    }
  }, []);

  useEffect(() => {
    dispatch(fetchTodos({ page: selectedPage, limit: selectedLimit }));
  }, [selectedPage, selectedLimit]);

  return (
    <DumbComponent
      loadingState={loadingState}
      items={items}
      pagesNumbers={pagesNumbers}
      setSelectedPage={setSelectedPage}
      setSelectedLimit={setSelectedLimit}
    />
  )
};

export default SmartComponent;
