/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

function HideLayout() {
  return (
    <div className="flex justify-center align-center w-full h-full overflow-hidden flex-col">
      <div className="h-24 w-full rounded-full bg-[#666362] bg-[#66636] p-1 ">
        <Image height={500} src="" width={500} alt="unknown" />
        <div className="mt-4 text-white text-center ">
          <span className=" text-2xl font-bold mb-4">Oh, hi there!</span>
          <span className=" text-xl font-bold mx-auto w-[80%]">
            We currently do not support view on this screen resolution. Please
            manage your admin dashboard on a different device, or if you're
            using a desktop, try maximixing to full screen or use a bigger
            screen
          </span>
        </div>
      </div>
    </div>
  );
}

export default HideLayout;
