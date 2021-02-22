import {
  faCalendar,
  faChartBar,
  faCrown,
  faFire,
  faForward,
  faStar,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Sider.module.scss';

const newReleases = [
  { name: 'Last 30 days', link: '/', icon: faStar },
  { name: 'This week', link: '/', icon: faFire },
  { name: 'Next week', link: '/', icon: faForward },
  { name: 'Release calendar', link: '/', icon: faCalendar },
];
const top = [
  { name: 'Best of the year', link: '/', icon: faTrophy },
  { name: 'Popular in 2020', link: '/', icon: faChartBar },
  { name: 'All time top 250', link: '/', icon: faCrown },
];

const Sider: FC = () => {
  return (
    <div className="mr-5">
      <div className={styles.sidebar}>
        <Menu name="Home" link="/" />
        <Menu name="Review" link="/" />
        <Menu name="New Releases" link="/" listItem={newReleases} />
        <Menu name="Top" link="/" listItem={top} />
        <Menu name="All Games" link="/" />
      </div>
    </div>
  );
};

interface MenuProps {
  name: string;
  link: string;
  listItem?: { name: string; link: string; icon: any }[];
}

const Menu: FC<MenuProps> = ({ link, name, listItem = null }) => {
  return (
    <div className={styles.menu}>
      {listItem ? (
        <span className={styles.span}>{name}</span>
      ) : (
        <Link href={link}>
          <a className={styles.title}>{name}</a>
        </Link>
      )}
      <ul className={styles.list}>
        {listItem?.map((i) => (
          <li className={styles.item} key={i.link + i.name}>
            <Link href={i.link}>
              <a className={styles.link}>
                <span className={styles.wrapper}>
                  <FontAwesomeIcon className={styles.icon} icon={i.icon} />
                </span>
                <span className={styles.label}>{i.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sider;
