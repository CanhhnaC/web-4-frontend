import { faAngleRight, faEllipsisH, faGift, faPlus } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import cn from 'classnames';
import { Button, Platform } from '../../ui';
import { SlugPlatform } from '../../ui/Platform';
import s from './ProductCard.module.scss';
import data from '../data.json';
import { gameRouter } from '@/src/constant/router';
import { IGenres } from '@/src/types/game';
import { DATE_TIME_TEXT } from '@/src/constant';

const ProductCard = () => {
  return (
    <div className={s.root}>
      <div className="relative h-64 w-full">
        <Image src={data.background_image} alt={data.name} layout="fill" objectFit="cover" className="rounded-t" />
      </div>
      <div className="p-3 pb-4">
        <div className="flex space-x-2 items-center">
          {data.parent_platforms.map((i) => (
            <Platform slug={i.platform.slug as SlugPlatform} key={i.platform.id} />
          ))}
        </div>
        <div className="my-2">
          <Link href={data.slug}>
            <a className="text-2xl font-bold">{data.name}</a>
          </Link>
        </div>
        <div className="space-x-2">
          <Button className="px-2 py-1 text-xs" icon={faPlus}>
            {data.added}
          </Button>
          <Button className="px-2 py-1" icon={faGift}></Button>
          <Button className="px-2 py-1" icon={faEllipsisH}></Button>
        </div>
        <ul className={s.card_about}>
          <li>
            <span>Release date:</span>
            <span>{dayjs(data.released || data.updated).format(DATE_TIME_TEXT)}</span>
          </li>
          <li>
            <span>Genres:</span>
            <span>
              <LinkList data={data.genres} />
            </span>
          </li>
          <li>
            <span>Chart:</span>
            <span>
              <Link href={gameRouter.genres(data.charts.year.year)}>
                <a className="underline hover:text-accents-1 transition ease-in-out duration-150">{`#${data.charts.year.position} Top ${data.charts.year.year}`}</a>
              </Link>
            </span>
          </li>
        </ul>
        <Button className="justify-between px-5 my-2 flex-row-reverse space-x-reverse w-full py-4" icon={faAngleRight}>
          Show more like this
        </Button>
      </div>
    </div>
  );
};

interface PropsLinkList {
  data: IGenres[];
}

const LinkList: React.FC<PropsLinkList> = ({ data }) => (
  <div className="space-x-2">
    {data.map((i) => (
      <Link key={i.id} href={gameRouter.genres(i.slug)}>
        <a className="underline hover:text-accents-1 transition ease-in-out duration-150">{i.name}</a>
      </Link>
    ))}
  </div>
);

export default ProductCard;
