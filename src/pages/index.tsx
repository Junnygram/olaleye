import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/utils/homeScreen/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
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
