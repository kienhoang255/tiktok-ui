import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import React, { useEffect, useState } from 'react';
import images from '../../../../assets/images/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faEllipsisVertical,
    faKeyboard,
    faLanguage,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
    faMessage,
    faGear,
    faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import TippyIcon from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '../../Popper';
import Account from '../../../AccountItem/Account';
import Button from '../../../Button/Button';
import Menu from '../../Popper/Menu/Menu';
import { faPaperPlane, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import Avatar from '../../../Avatar/Avatar';

const cx = classNames.bind(styles);

const currentUser = true;

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Vietnamese',
        children: {
            title: 'language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'fr',
                    title: 'French',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut',
    },
];

const MENU_USER = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
    },
    {
        icon: <FontAwesomeIcon icon={faBitcoin} />,
        title: 'Get coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
        title: 'Log out',
        separate: true,
    },
];

const handleMenuChange = (menuItem) => {};

export default function Header() {
    const [onInput, setOnInput] = useState(false);
    const [valueInput, setValueInput] = useState('');
    const [searching, setSearching] = useState(false);
    useEffect(() => {
        if (valueInput !== '') {
            setOnInput(true);
        } else setOnInput(false);
    }, [valueInput]);
    const clearInput = () => {
        setValueInput('');
    };

    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([]);
        }, 0);
    }, [searchResults]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok-icon" />
                </div>

                <Tippy
                    interactive={true}
                    // visible={searchResults.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <Account />
                                <Account />
                                <Account />
                                <Account />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            className={cx('input')}
                            type="text"
                            placeholder="Search accounts and videos..."
                            spellCheck={false}
                            value={valueInput}
                            onChange={(e) => {
                                return setValueInput(e.target.value);
                            }}
                        />

                        {onInput && (
                            <button className={cx('clear')} onClick={clearInput}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )}
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <div className={cx('search-icon')}>
                            <span className={cx('span')}></span>
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button outline leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <TippyIcon content="Chat" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </TippyIcon>
                            <button className={cx('action-btn-message')}>
                                <FontAwesomeIcon icon={faMessage} />
                                <div className={cx('noti-message')}>12</div>
                            </button>
                            <Menu items={MENU_USER} onChange={handleMenuChange}>
                                <Avatar src={require('../../../../assets/images/avatar.jpg')} atl="Name" />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button outline size="large">
                                Upload
                            </Button>
                            <Button primary target="_blank" href="">
                                Login
                            </Button>
                            <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
