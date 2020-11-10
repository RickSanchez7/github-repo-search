import React from 'react';
import styles from './button-link.module.scss';
import Link from 'next/link';

const ButtonLink = ({ href, text, type = 'info', target, external }) => {
  const types = {
    info: 'is-info',
    success: 'is-success',
    danger: 'is-danger',
    dark: 'is-dark',
    light: 'is-light',
  };

  const buttonClass = `button ${types[type]}`;

  if (external) {
    return (
      <div className={styles.button}>
        <a href={href} target={target} className={buttonClass}>
          {text}
        </a>
      </div>
    );
  }

  return (
    <div className={styles.button}>
      <Link href={href}>
        <a target={target} className={buttonClass}>
          {text}
        </a>
      </Link>
    </div>
  );
};

export default ButtonLink;
