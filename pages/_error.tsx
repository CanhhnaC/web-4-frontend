import Error from 'next/error';
import { GetServerSideProps } from 'next';

type Props = {
  statusCode: number;
  errorCode: number;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ res }) => {
  const statusCode = res ? res.statusCode : 404;

  return {
    props: { errorCode: statusCode, statusCode },
  };
};

export default function Page({ errorCode }: Props) {
  return <Error statusCode={errorCode} />;
}
