import React, { FC, InputHTMLAttributes } from 'react';
import cs from 'classnames';
import styles from './styles/Search.module.scss';
import { breakpoint, transitionDuration, transitionProperty } from 'src/interface/css';

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  bgHoverColor?: string;
  textHoverColor?: string;
  paddingX?: string | number;
  paddingY?: string | number;
  rounded?: boolean;
  roundedSize?: breakpoint;
  transition?: boolean;
  transitionDuration?: transitionDuration;
  transitionProperty?: transitionProperty;
  width?: string | number;
}

export const Search: FC<SearchProps> = ({
  bgHoverColor = 'white',
  textHoverColor = 'black',
  paddingX = 2,
  paddingY = 2,
  rounded = false,
  roundedSize = 'md',
  transition = true,
  transitionDuration = '500',
  transitionProperty = 'all',
  width = 'full',
  ...rest
}) => {
  return (
    <input
      className={cs(
        styles.search,
        `hover:bg-${bgHoverColor} focus:bg-${bgHoverColor} hover:text-${textHoverColor} focus:text-${textHoverColor}`,
        `px-${paddingX} py-${paddingY}`,
        { [`rounded-${roundedSize}`]: rounded },
        { [`duration-${transitionDuration} transition-${transitionProperty}`]: transition },
        `focus:outline-none`,
        `w-${width}`,
      )}
      {...rest}
    />
  );
};
