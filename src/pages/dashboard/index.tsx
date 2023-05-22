import TopPage from '@/utils/TopPage';
import React from 'react';
import { fetchDataFromAPI } from '@/utils/api';
import { GetServerSideProps } from 'next';

interface DashboardProps {
  data: any;
}
const index = ({ data }: DashboardProps) => {
  return (
    <div>
      <TopPage
        details={'Dashboard'}
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

// export const getServerSideProps: GetServerSideProps<
//   DashboardProps
// > = async () => {
//   const data = await fetchDataFromAPI();

//   return {
//     props: {
//       data,
//     },
//   };
// };
