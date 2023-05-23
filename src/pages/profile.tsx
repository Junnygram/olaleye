import TopPage from '@/utils/TopPage';
import React from 'react';

const profile = () => {
  return (
    <div>
      {' '}
      <div>
        <TopPage
          details={'Profile'}
          name={'olaleye'}
          info={'olaleye@email.com'}
          page={'yo'}
          right={true}
          src={'/assets/006.jpeg'}
        />
      </div>
      profile page
    </div>
  );
};

export default profile;
