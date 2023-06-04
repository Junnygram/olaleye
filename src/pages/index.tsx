import HomePage from '@/utils/homeScreen/HomePage';

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

// this redirects immediatly to login when the domain is processed
// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   return {
//     redirect: {
//       permanent: false,
//       destination: "/login",
//     },
//     props: {},
//   };
// };
