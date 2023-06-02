import Dashboard from '@/utils/pagesComponent/Dashboard';
import React from 'react';

interface DashboardProps {
  data: any;
}
const index = ({ data }: DashboardProps) => {
  return (
    <div>
      <Dashboard />
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
