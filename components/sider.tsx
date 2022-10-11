import Link from 'next/link';
import { BiTask } from 'react-icons/bi';
import { MdOutlineLogout } from 'react-icons/md';
import { AiOutlineFieldTime, AiOutlineSchedule } from 'react-icons/ai';

import styles from 'styles/layout.module.css';
import { useStrings } from 'hooks/useStrings';

const { logout, sider, option, optionsList } = styles;

export const Sider = () => {
  const { capitalizeFirst } = useStrings();

  const items = [
    { icon: <AiOutlineSchedule />, link: '', name: 'schedule' },
    { icon: <AiOutlineFieldTime />, link: 'agenda', name: 'agenda' },
    { icon: <BiTask />, link: 'tasks', name: 'tasks' },
    // { icon: <AiOutlineSetting />, link: 'settings' },
  ];

  return (
    <div className={`${sider}`}>
      <ul className={optionsList}>
        {items.map((item, i) => (
          <Link href={'/' + item.link} key={item.link + i}>
            <a className={option}>
              {item.icon}
              {capitalizeFirst(item.name)}
            </a>
          </Link>
        ))}
      </ul>
      <button
        className={`${option} ${logout}`}
        onClick={() => {
          sessionStorage.clear();
          localStorage.clear();
        }}
      >
        <MdOutlineLogout /> Logout
      </button>
    </div>
  );
};
