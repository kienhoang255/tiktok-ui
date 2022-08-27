import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import React from 'react';

const cx = classNames.bind(styles);
export default function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}
