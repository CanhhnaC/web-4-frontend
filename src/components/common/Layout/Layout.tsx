import React, { FC } from 'react';
import cn from 'classnames';
import Navbar from '../Navbar';
import Sider from '../Sider';
import { Container } from '../../ui';
import styles from './Layout.module.scss';
interface Props {
  pageProps: any;
}

const Layout: FC<Props> = ({ children, pageProps }) => {
  return (
    <div className={cn(styles.root)}>
      <Container>
        <Navbar />
        <main className={cn(styles.main)}>
          <Sider />
          <div className={cn(styles.content)}>{children}</div>
        </main>
      </Container>
    </div>
  );
};

export default Layout;
