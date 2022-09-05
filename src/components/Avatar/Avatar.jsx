import React, { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Avatar.module.scss';
import images from '../../assets/images';
const cx = classNames.bind(styles);

const Avatar = forwardRef(({ src, alt, className, fallback = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(fallback);
    };

    return <img ref={ref} src={fallBack || src} alt={alt} {...props} className={classNames(styles.wrapper, className)} onError={handleError} />;
});

export default Avatar;
