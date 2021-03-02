import React from 'react';
import cn from 'classnames';
import { Text } from '../../ui';
import s from './MainContent.module.scss';

interface Props {
  heading?: string;
  subtitle?: string;
  className?: string;
}

const Content: React.FC<Props> = ({ className, heading, subtitle, children }) => {
  const rootClassName = cn(s.root, className);
  return (
    <>
      <div className={rootClassName}>
        <Text variant="heading" className="font-bold">
          {heading}
        </Text>
        <Text>{subtitle}</Text>
      </div>
      <div>{children}</div>
    </>
  );
};

export default Content;
