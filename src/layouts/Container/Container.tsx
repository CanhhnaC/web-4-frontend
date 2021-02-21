import React, { FC } from 'react';
import cs from 'classnames';

interface ContainerProps {
  className?: string;
}

export const Container: FC<ContainerProps> = ({ className, children }) => {
  return <div className={cs('', className)}>{children}</div>;
};
