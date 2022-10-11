import { ReactNode } from 'react';

import { Sider } from './sider';
import styles from 'styles/layout.module.css';
import animate from 'styles/animation.module.css';
import { ParentElementProps } from 'interfaces';

const { fadeIn } = animate;
const { content, page } = styles;

const Layout = ({ children }: ParentElementProps) => {
  return (
    <div className={`${content} ${fadeIn}`}>
      <Sider />
      <div className={`${page}`}>{children}</div>
    </div>
  );
};

export default Layout;
