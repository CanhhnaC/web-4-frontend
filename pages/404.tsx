import React from 'react';
import Link from 'next/link';
import { Button, Container } from '@/src/components/ui';
import styles from '@/src/styles/pages/404.module.scss';

const Page404 = () => {
  return (
    <Container>
      <div className={styles.content}>
        <h1>404</h1>
        <span>
          Whoops!
          <br />
          We couldn&apos;t find that page.
        </span>
        <Link href="/">
          <Button rounded border>
            Main page
          </Button>
        </Link>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.art}></div>
      </div>
    </Container>
  );
};

export default Page404;
