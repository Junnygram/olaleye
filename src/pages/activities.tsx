import TopPage from '@/utils/TopPage';
import React from 'react';

const activities = () => {
  return (
    <div>
      {' '}
      <div>
        <TopPage
          details={'Activities'}
          name={'olaleye'}
          info={'olaleye@email.com'}
          page={'yo'}
          right={true}
          src={'/assets/006.jpeg'}
        />
      </div>
      activities{' '}
    </div>
  );
};

export default activities;
