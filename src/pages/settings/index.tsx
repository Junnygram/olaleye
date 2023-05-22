import TopPage from '@/utils/TopPage';
import React from 'react';

const index = () => {
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

export default index;
