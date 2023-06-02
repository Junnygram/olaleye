import { UserContext } from '@/components/Context/UserContext';
import React, { useContext } from 'react';
import TopPage from '../TopPage';

const Help = () => {
  //   const { user } = useContext(UserContext);
  return (
    <div>
      <TopPage
        details={'Help!'}
        name={'olaleye'}
        info={'olaleye@email.com'}
        page={'yo'}
        right={true}
        src={'/assets/006.jpeg'}
      />
    </div>
  );
};

export default Help;
