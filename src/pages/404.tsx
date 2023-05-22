/* eslint-disable react/no-unescaped-entities */
import TopPage from '@/utils/TopPage';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div>
      <div>
        <TopPage
          details={'Not Found'}
          name={'olaleye'}
          info={'olaleye@email.com'}
          page={'yo'}
          right={true}
          src={'/assets/006.jpeg'}
        />
      </div>
      <div className="flex flex-col text-center items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl  font-bold mb-4">404 - Page Not Found</h1>

        <p className="text-lg mb-6">
          Oops! The page you're looking for does not exist.
        </p>
        <Link href="/dashboard" className="text-indigo-500 underline">
          Go back to your dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
