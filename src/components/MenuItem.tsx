import Link from 'next/link';
import { useRouter } from 'next/router';

interface MenuProps {
  menuTitle: string;
  icon: any;
}

function MenuItem({ menuTitle, icon }: MenuProps) {
  const router = useRouter();
  const url = `/${menuTitle}`;

  const isActive = router.pathname === url;

  return (
    <Link href={url} passHref>
      <div
        className={`py-2 overflow-hidden cursor-default  rounded-sm ${
          isActive ? 'text-indigo-700' : ''
        }`}
      >
        <div
          className={`flex text-gray-300${isActive ? 'text-indigo-700' : ''}`}
        >
          <div className="font-medium my-auto py-1">{icon}</div>
          <span className="hidden text-center md:flex md:text-sm font-medium text-xl px-2 capitalize">
            {menuTitle}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default MenuItem;
