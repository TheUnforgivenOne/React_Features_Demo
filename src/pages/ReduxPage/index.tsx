import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';

import HooksPattern from '../../components/HooksPattern';
import SmartComponent from '../../components/DumbSmartPattern/SmartComponent';

import { ReduxPageLinks } from './ReduxPage.styles';

const ReduxPage: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [selectedLimit, setSelectedLimit] = useState<number>(10);
  const pagesNumbers = Array.from(Array(5), (_, i) => i + 1);

  return (
    <div>
      <ReduxPageLinks>
        <Link to="/redux/hooks">Hooks</Link>
        <Link to="/redux/dumbsmart">DumbSmart</Link>
      </ReduxPageLinks>
      <Route path="/redux/hooks">
        <HooksPattern
          selectedPage={selectedPage}
          selectedLimit={selectedLimit}
          pagesNumbers={pagesNumbers}
          setSelectedPage={setSelectedPage}
          setSelectedLimit={setSelectedLimit}
        />
      </Route>
      <Route path="/redux/dumbsmart">
        <SmartComponent
          selectedPage={selectedPage}
          selectedLimit={selectedLimit}
          pagesNumbers={pagesNumbers}
          setSelectedPage={setSelectedPage}
          setSelectedLimit={setSelectedLimit}
        />
      </Route>
    </div>
  );
};

export default ReduxPage;
