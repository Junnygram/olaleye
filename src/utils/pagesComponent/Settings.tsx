import { UserContext } from '@/components/Context/UserContext';
import TopPage from '@/utils/TopPage';
import React, { useContext } from 'react';

const Settings = () => {
  //   const { user } = useContext(UserContext);
  return (
    <div>
      <TopPage
        details={'Settings'}
        name={'olaleye'}
        info={'olaleye@email.com'}
        page={'yo'}
        right={true}
        src={'/assets/006.jpeg'}
      />
    </div>
  );
};

export default Settings;
