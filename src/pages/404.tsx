import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ImSad } from 'react-icons/im';

export default function NotFound() {
  //after 3s it redirects to the home page
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/dashboard');
    }, 3000000);
  });
  return (
    <div className=" bg-white text-cyan-300 w-full h-full  ">
      <span className="flex text-cyan-300">
        404 <ImSad size={25} />
      </span>
      <span>The page cannot be found </span>
      <div>
        Go back to the <Link href="/"> Homepage</Link>
      </div>
    </div>
  );
}
