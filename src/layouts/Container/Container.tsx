import React, { FC, HTMLAttributes } from 'react';
import cs from 'classnames';

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

export const Container: FC<ContainerProps> = ({ className, children, ...rest }) => {
  return (
    <div className={cs('container mx-auto', className)} {...rest}>
      {children}
    </div>
  );
};
