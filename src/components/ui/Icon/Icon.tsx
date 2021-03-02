import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import s from './Icon.module.scss';

interface Props {
  icon: IconProp;
  spin?: boolean;
  className?: string;
}

const Icon: React.FC<Props> = (props) => {
  const { icon, spin, className, ...rest } = props;
  const rootClassName = cn(s.root, className);
  return (
    <i className={rootClassName} {...rest}>
      <FontAwesomeIcon icon={icon} spin={spin} />
    </i>
  );
};

export default Icon;
