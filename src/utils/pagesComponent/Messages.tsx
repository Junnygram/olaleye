import { UserContext } from '@/components/Context/UserContext';
import TopPage from '@/utils/TopPage';
import React, { useContext } from 'react';

const Messages = () => {
  //   const { user } = useContext(UserContext);
  return (
    <div>
      <TopPage
        details={'Messages'}
        name={'olaleye'}
        info={'olaleye@email.com'}
        page={'yo'}
        right={true}
        src={'/assets/006.jpeg'}
      />
    </div>
  );
};

export default Messages;
