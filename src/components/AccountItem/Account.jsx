import React from 'react';
import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
export default function Account() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={require('../../assets/images/avatar.jpg')} alt="Vinh" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Kien</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>kien</span>
            </div>
        </div>
    );
}
