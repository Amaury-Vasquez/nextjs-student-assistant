import {
  MdOutlineAddCircle,
  MdOutlineRemoveCircle,
  MdSave,
} from 'react-icons/md';
import { FcAddColumn } from 'react-icons/fc';
import { RiAddCircleFill } from 'react-icons/ri';
import { SiAddthis } from 'react-icons/si';
import { AiOutlineDelete, AiOutlineFileAdd } from 'react-icons/ai';

import styles from 'styles/home.module.css';

const { menu, menuOption } = styles;

export const ScheduleMenu = () => {
  const options = [
    { text: 'Add', icon: <MdOutlineAddCircle style={{ color: '#b6e388' }} /> },
    {
      text: 'Delete',
      icon: <MdOutlineRemoveCircle style={{ color: 'var(--red)' }} />,
    },
    {
      text: 'Save',
      icon: <MdSave style={{ color: '#405064' }} />,
    },
  ];
  return (
    <div className={menu}>
      {options.map((option) => (
        <button className={menuOption} onClick={() => alert('Hola')}>
          {option.text} {option.icon}
        </button>
      ))}
    </div>
  );
};
