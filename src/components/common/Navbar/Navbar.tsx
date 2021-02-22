import Link from 'next/link';
import React, { FC } from 'react';
import { Search } from '../../ui';

import styles from './Navbar.module.scss';

const list_items = [
  { name: 'Log in', link: '/login' },
  { name: 'Sign up', link: '/signup' },
  { name: 'Api', link: '/apidocs' },
];

const Navbar: FC = () => {
  return (
    <div className={styles.navbar}>
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
        <Items listItem={list_items} />
      </div>
    </div>
  );
};

interface ItemsProps {
  listItem?: { link: string; name: string }[];
}

const Items: FC<ItemsProps> = ({ listItem }) => {
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

export default Navbar;
