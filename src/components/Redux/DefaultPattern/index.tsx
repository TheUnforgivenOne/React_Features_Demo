import React, { useEffect } from 'react';
import { useDispatch, useSelector } from '../../../redux/hooks';
import { fetchTodos, resetState, selectTodos } from '../../../redux/reducers/todosReducer';

import StyledButton from '../../Reusable/StyledButton/StyledButton';

interface HDefaultPatternProps {
    selectedPage: number;
    selectedLimit: number;
    pagesNumbers: number[];
    setSelectedPage: (value: number) => void;
    setSelectedLimit: (value: number) => void;
}

const DefaultPattern: React.FC<HDefaultPatternProps> = ({
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

  const handlePageClick = (page: number) => {
    setSelectedPage(page);
  };

  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLimit(Number(event.target.value));
  };

  return (
    <>
      <h3>Redux inside component</h3>
      <p>Using Redux inside component</p>
      {pagesNumbers.map((page) => (
        <StyledButton key={page} onClick={() => handlePageClick(page)}>{page}</StyledButton>
      ))}
      <select onChange={handleLimitChange}>
        {pagesNumbers.map((page) => {
          const limit = page * 10;

          return <option key={limit} value={limit}>{limit}</option>
        })}
      </select>
      {loadingState === 'initial' || loadingState === 'loading'
        ? (
          <div>Loading...</div>
        )
        : (
          <>
            {items.length
              ? (
                <div>
                  {items.map((item) => (
                    <div key={item.id}>{JSON.stringify(item, null, 2)}</div>
                  ))}
                </div>
              )
              : (
                <div>No todos</div>
              )
            }
          </>
        )
      }
    </>
  );
};

export default DefaultPattern;
