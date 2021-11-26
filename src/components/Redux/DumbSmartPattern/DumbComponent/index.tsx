import React from 'react';

import StyledButton from '../../../Reusable/StyledButton/StyledButton';
import { TodoType } from '../../../../types/types';
import { SmartComponentProps } from '../SmartComponent';

interface DumbComponentProps extends Omit<SmartComponentProps, 'selectedPage' | 'selectedLimit'> {
  loadingState: string;
  items: TodoType[]
}

const DumbComponent: React.FC<DumbComponentProps> = ({
  loadingState,
  items,
  pagesNumbers,
  setSelectedPage,
  setSelectedLimit
}) => {
  const handlePageClick = (page: number) => {
    setSelectedPage(page);
  };

  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLimit(Number(event.target.value));
  };

  return (
    <>
      <h3>Redux with dumb and smart components</h3>
      <p>Using dumb and smart component pattern for fetching data via Redux</p>
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

export default DumbComponent;
