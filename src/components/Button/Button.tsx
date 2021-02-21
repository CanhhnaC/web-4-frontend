import React, { ButtonHTMLAttributes, FC } from 'react';
import cs from 'classnames';
import styles from './Button.module.scss';
import { breakpoint } from 'src/interface/css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  bgHoverColor?: string;
  textColor?: string;
  textHoverColor?: string;
  paddingX?: string;
  paddingY?: string;
  rounded?: boolean;
  roundedSize?: breakpoint;
  border?: boolean;
  borderWidth?: string;
  borderBg?: string;
  outline?: boolean;
  transition?: boolean;
  transitionDuration?: string;
  transitionProperty?: number;
}

const Button: FC<ButtonProps> = ({
  bgColor = 'white',
  bgHoverColor = 'gray-100',
  textColor = 'black',
  textHoverColor = 'black',
  paddingX = 2,
  paddingY = 2,
  rounded = false,
  roundedSize = 'md',
  border = false,
  borderWidth = '2',
  borderBg = 'transparent',
  outline = false,
  transition = true,
  transitionDuration = '500',
  transitionProperty = 'all',
  children,
  ...rest
}) => {
  return (
    <button
      className={cs(
        styles.button,
        `bg-${bgColor} hover:bg-${bgHoverColor}`,
        `text-${textColor} hover:text-${textHoverColor}`,
        `px-${paddingX} py-${paddingY}`,
        { [`rounded-${roundedSize}`]: rounded },
        { [`border-${borderWidth} border-${borderBg}`]: border },
        { [`duration-${transitionDuration} transition-${transitionProperty}`]: transition },
        { 'focus:outline-none': !outline },
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
