import React, { useEffect } from 'react';

import { useTodos } from './useTodos';
import StyledButton from '../Reusable/StyledButton/StyledButton';

interface HooksPatternProps {
  selectedPage: number;
  selectedLimit: number;
  pagesNumbers: number[];
  setSelectedPage: (value: number) => void;
  setSelectedLimit: (value: number) => void;
}

const HooksPattern: React.FC<HooksPatternProps> = ({
  selectedPage,
  selectedLimit,
  pagesNumbers,
  setSelectedPage,
  setSelectedLimit
}) => {
  const { loadTodos, resetTodos, loadingState, items } = useTodos();

  useEffect(() => {
    return () => {
      resetTodos();
      setSelectedPage(1);
      setSelectedLimit(10);
    }
  }, []);

  useEffect(() => {
    loadTodos(selectedPage, selectedLimit);
  }, [selectedPage, selectedLimit]);

  const handlePageClick = (page: number) => {
    setSelectedPage(page);
  };

  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLimit(Number(event.target.value));
  };

  return (
    <>
      <h3>Redux with hooks</h3>
      <p>Using custom hook for fetching data via Redux</p>
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

export default HooksPattern;
