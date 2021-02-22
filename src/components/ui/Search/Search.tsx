import React, { FC, InputHTMLAttributes, useMemo } from 'react';
import cs from 'classnames';
import styles from './Search.module.scss';
import { useRouter } from 'next/dist/client/router';
import { ISearch } from '../../icons';

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id?: string;
}

const Search: FC<SearchProps> = ({ className, id = 'search', ...rest }) => {
  const router = useRouter();

  return useMemo(
    () => (
      <div className="">
        <label className="hidden">Search</label>
        <input id={id} className={styles.input} defaultValue={router.query.q} {...rest} />
        <div className="bg-red text-red-500">
          hekllo wordk
          <ISearch className="bg-red text-red-500" />
        </div>
      </div>
    ),
    [],
  );
};

export default Search;
