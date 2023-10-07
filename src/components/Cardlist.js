import React from 'react';
import Card from './Card';
import './cardListStyle.css';

import { robots } from './robots';

const Cardlist = ({ robots }) => {
  return (
    <div className='mainDiv'>
      <div className='alignment '>
        {robots.map((users, i) => {
          return (
            <Card
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cardlist;
