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
        className={`py-2 overflow-hidden cursor-default rounded-sm ${
          isActive ? 'bg-gray-400' : ''
        }`}
      >
        <div className="flex text-cyan-300">
          <div className="font-medium my-auto py-1">{icon}</div>
          <span className="hidden md:flex md:text-sm font-medium text-xl px-2 capitalize">
            {menuTitle}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default MenuItem;
