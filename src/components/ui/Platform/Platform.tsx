import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { faWindows, faPlaystation, faXbox } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import Icon from '../Icon';

interface Props {
  slug: 'pc' | 'playstation' | 'xbox';
}

const Platform: React.FC<Props> = ({ slug }) => {
  switch (slug) {
    case 'pc':
      return <Icon icon={faWindows} />;
    case 'playstation':
      return <Icon icon={faPlaystation} />;
    case 'xbox':
      return <Icon icon={faXbox} />;
    default:
      return <></>;
  }
};

export default Platform;
