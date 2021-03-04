import React, { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames';
import s from './Button.module.scss';
import Icon from '../Icon';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  disabled?: boolean;
  icon?: IconProp;
  className?: string;
}

const Button: FC<ButtonProps> = (props) => {
  const { disabled = false, loading = false, icon, children, className, ...rest } = props;
  const rootClassName = cn(
    s.root,
    {
      [s.loading]: loading,
      [s.disabled]: disabled,
    },
    className,
  );

  return (
    <button className={rootClassName} {...rest}>
      {icon && <Icon icon={icon} spin={loading} />}
      {children && <span>{children}</span>}
    </button>
  );
};
export default Button;
