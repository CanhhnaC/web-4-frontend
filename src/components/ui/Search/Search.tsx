import React, { FC, InputHTMLAttributes, useMemo } from 'react';
import { useRouter } from 'next/dist/client/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';
import styles from './Search.module.scss';

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id?: string;
}

const Search: FC<SearchProps> = ({ className, id = 'search', ...rest }) => {
  const router = useRouter();

  return useMemo(
    () => (
      <div className={cn('relative text-sm text-base w-full transition-colors duration-150', className)}>
        <label className="hidden" htmlFor={id}>
          Search
        </label>
        <input
          id={id}
          className={styles.input}
          defaultValue={router.query.q}
          onKeyDown={(e) => {
            e.preventDefault();
            if (e.key === 'Enter') {
              const q = e.currentTarget.value;
              router.push(
                {
                  pathname: '/search',
                  query: q ? { q } : {},
                },
                undefined,
                { shallow: true },
              );
            }
          }}
          {...rest}
        />
        <div className={styles.iconContainer}>
          <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        </div>
      </div>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
};

export default Search;
