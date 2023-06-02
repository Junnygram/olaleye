import TopPage from '@/utils/TopPage';
import React, { useContext } from 'react';
import { UserContext } from '@/components/Context/UserContext';

const CourseBuilder = () => {
  //   const { user } = useContext(UserContext);
  return (
    <div>
      <TopPage
        details={'Hey Builder'}
        name={'olaleye'}
        info={'olaleye@email.com'}
        page={'yo'}
        right={true}
        src={'/assets/006.jpeg'}
      />
    </div>
  );
};

export default CourseBuilder;
