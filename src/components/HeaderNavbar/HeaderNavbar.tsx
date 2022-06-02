import React from 'react';
import cx from 'classnames';
import { Button } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiMoon, FiPercent, FiTriangle } from 'react-icons/fi';
import { ICompBaseProps } from '@/interfaces';

import styles from './style.module.less';

interface IProps extends ICompBaseProps {}

export const HeaderNavbar: React.FC<IProps> = (props) => {
  const { pathname, route, query } = useRouter();

  const navs = [
    { to: '/', icon: <FiTriangle />, exact: true },
    { to: '/about', icon: <FiPercent />, exact: true },
    {
      to: '/about/darkmode',
      active: '/about/[name]',
      icon: <FiMoon />,
      exact: true,
    },
  ];

  return (
    <div
      className={cx(
        styles['comp-wrapper'],
        { [styles['comp-wrapper--alwaysDarkMode']]: props.alwaysDarkMode },
        `g-comp--${HeaderNavbar.displayName}`,
        props.className,
      )}
      style={props.style}
    >
      {navs.map((nav) => (
        <Link href={nav.to} key={nav.to}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className={cx(styles['nav-link'], {
              [styles['nav-link--active']]:
                pathname === nav.active || pathname === nav.to,
            })}
          >
            <Button type="ghost" className={styles['nav-button']}>
              {nav.icon}
            </Button>
          </a>
        </Link>
      ))}
    </div>
  );
};
