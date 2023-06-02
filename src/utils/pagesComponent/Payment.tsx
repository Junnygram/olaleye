import TopPage from '@/utils/TopPage';
import React, { useContext } from 'react';
import { WalletCard } from '@/utils/WalletCard';
import Naira from '@/utils/Naira';
import { UserContext } from '@/components/Context/UserContext';

const Payment = () => {
  //   const { user } = useContext(UserContext);
  return (
    <div>
      <div>
        <TopPage
          details={'Payments'}
          name={'olaleye'}
          info={'olaleye@email.com'}
          page={'yo'}
          right={true}
          src={'/assets/006.jpeg'}
        />
      </div>
      <div className="flex md:w-[60%]">
        <WalletCard
          title={'Wallet Balance'}
          amount={Naira(0)}
          src={'/assets/006.jpeg'}
        />
        <WalletCard
          title={'Total Earning'}
          amount={Naira(0)}
          src={'/assets/006.jpeg'}
        />
      </div>
    </div>
  );
};

export default Payment;
