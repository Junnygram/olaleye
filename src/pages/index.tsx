import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cyan-700 to-cyan-300">
      <div>
        <Image src="/assets/logo.jpeg" alt="logo" height={50} width={50} />
      </div>
      <div className="bg-cyan-100 rounded-md shadow-md p-8 text-center">
        <h1 className="text-4xl text-cyan-800 mb-4">Welcome to Study App</h1>
        <p className="text-xl text-cyan-700 mb-8">
          Enhance your learning experience with Study App.
        </p>
        <Link
          href="/register"
          className="bg-cyan-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg"
        >
          Get Started
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="rounded-md shadow-md">
          <Image
            src="/assets/studyimage.jpg"
            alt="Image 1"
            width={500}
            height={300}
            className="rounded-md"
          />
        </div>
        <div className="rounded-md shadow-md">
          <Image
            src="/assets/studyimage.jpg"
            alt="Image 2"
            width={500}
            height={300}
            className="rounded-md"
          />
        </div>
        <div className="rounded-md shadow-md">
          <Image
            src="/assets/studyimage.jpg"
            alt="Image 1"
            width={500}
            height={300}
            className="rounded-md"
          />
        </div>
        <div className="rounded-md shadow-md">
          <Image
            src="/assets/studyimage.jpg"
            alt="Image 2"
            width={500}
            height={300}
            className="rounded-md"
          />
        </div>
      </div>
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
