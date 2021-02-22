import React, { FC } from 'react';
import cn from 'classnames';

interface Props {
  className?: string;
  children?: any;
  el?: HTMLElement;
  clean?: boolean;
}

const Container: FC<Props> = ({ children, className, el = 'div', clean }) => {
  const rootClassName = cn(className, {
    'mx-auto px-6 max-w-8xl': !clean,
  });
  const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> = el as any;

  return <Component className={rootClassName}> {children}</Component>;
};
export default Container;
