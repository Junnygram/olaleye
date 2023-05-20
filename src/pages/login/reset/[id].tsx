import React from 'react';
import CompleteReset from '@/components/authentication/CompleteReset';
import { GetServerSideProps } from 'next';

const forgotPassword = ({ code }: { code: string }) => {
  return <CompleteReset code={code} />;
};

export default forgotPassword;

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const { id } = ctx.query;

  return {
    props: {
      code: id,
    },
  };
};
