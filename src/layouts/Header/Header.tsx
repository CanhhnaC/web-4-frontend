import Link from 'next/link';
import React, { FC } from 'react';
import { Search } from 'src/components/Input/Search';

import styles from './Header.module.scss';

const header_item = [
  { name: 'Log in', link: '/login' },
  { name: 'Sign up', link: '/signup' },
  { name: 'Api', link: '/apidocs' },
];

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>R A W G</div>
      <div className={styles.search}>
        <Search
          paddingX={5}
          rounded
          roundedSize="full"
          transitionProperty="colors"
          placeholder="Search 509,325 games"
        />
      </div>
      <div className={styles.item}>
        <Navbar listItem={header_item} />
      </div>
    </div>
  );
};

interface NavbarProps {
  listItem?: { link: string; name: string }[];
}

const Navbar: FC<NavbarProps> = ({ listItem }) => {
  return (
    <div className={styles.navbar}>
      {listItem?.map((i) => (
        <Link href={i.link} key={i.link}>
          <a>{i.name}</a>
        </Link>
      ))}
    </div>
  );
};
