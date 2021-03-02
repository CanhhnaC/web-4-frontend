import React, { FC } from 'react';
import cn from 'classnames';
import Navbar from '../Navbar';
import Sider from '../Sider';
import { Container } from '../../ui';
import s from './Layout.module.scss';
interface Props {
  pageProps: any;
}

const Layout: FC<Props> = ({ children, pageProps }) => {
  return (
    <div className={cn(s.root)}>
      <Container>
        <Navbar />
        <main className={cn(s.main)}>
          <Sider />
          <div className={cn(s.content)}>{children}</div>
        </main>
      </Container>
    </div>
  );
};

export default Layout;
