import React from 'react';
import { faWindows, faPlaystation, faXbox } from '@fortawesome/free-brands-svg-icons';
import Icon from '../Icon';
export type SlugPlatform = 'pc' | 'playstation' | 'xbox';
interface Props {
  slug: SlugPlatform;
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
