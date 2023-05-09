import { GetServerSideProps } from 'next';

export default function Home() {
  return (
    <h1 className="text-3xl text-red-300 font-bold underline">Hello world!</h1>
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
