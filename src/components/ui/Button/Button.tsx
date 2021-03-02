import React, { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames';
import s from './Button.module.scss';
import Icon from '../Icon';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  disabled?: boolean;
  icon?: IconProp;
}

const Button: FC<ButtonProps> = (props) => {
  const { disabled, loading, icon, children, ...rest } = props;
  const rootClassName = cn(s.root, {
    [s.loading]: loading,
    [s.disabled]: disabled,
  });

  return (
    <button className={rootClassName} {...rest}>
      {children && <span>{children}</span>}
      {icon && <Icon icon={icon} spin={loading} />}
    </button>
  );
};
export default Button;
