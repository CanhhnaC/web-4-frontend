import cn from 'classnames';
import Image from 'next/image';
import s from './ProductCard.module.scss';
import data from '../data.json';
import { Platform } from '../../ui';

const ProductCard = () => {
  return (
    <div className={s.root}>
      <div className="">
        <Image src={data.background_image} alt={data.name} width={300} height={150} />
      </div>
      <div className="p-3 pb-4">
        <div className="flex space-x-2 items-center">
          <Platform slug="pc" />
          <Platform slug="playstation" />
          <Platform slug="xbox" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
