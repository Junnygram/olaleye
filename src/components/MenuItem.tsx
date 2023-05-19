import Link from 'next/link';
import { useRouter } from 'next/router';

interface MenuProps {
  menuTitle: string;
  icon: any;
}
function MenuItem({ menuTitle, icon }: MenuProps) {
  const router = useRouter();
  const url = `${menuTitle}`;
  return (
    <Link href={url} passHref>
      <div
        className={`py-2 pt-4 overflow-hidden cursor-default rounded-sm ${
          router.pathname.startsWith(url) ? 'bg-[#B2BEB5]' : 'bg-transparent'
        }`}
      >
        <div className="flex text-cyan-300 active:bg-gray-300">
          <div className="bg-white font-medium my-auto">{icon}</div>
          <span className="font-semibold text-xl px-2 capitalize ">
            {menuTitle}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default MenuItem;
