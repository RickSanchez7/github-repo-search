import React from 'react';
import Link from 'next/link';
import { FaStar, FaCodeBranch } from 'react-icons/fa';

import styles from './repo-list-item.module.scss';
import UserAvatar from './user-avatar';

const RepoListItem = ({ repo }) => {
  const cutDescription = description => {
    if (description && description.length > 100) {
      return description.slice(0, 100) + '...';
    }

    return description;
  };

  return (
    <div className={`${styles.repoListItem} box`}>
      <div className={styles.repoName}>
        <Link href='/repo/[id]' as={`/repo/${repo.id}`}>
          <a>{repo.name}</a>
        </Link>
      </div>

      <UserAvatar user={repo.owner} />
      <p className={styles.description}>{cutDescription(repo.description)}</p>

      <div className={styles.footer}>
        <div className={styles.counters}>
          <div className={styles.counter}>
            <FaStar />
            <span>{repo.stargazers_count}</span>
          </div>
          <div className={styles.counter}>
            <FaCodeBranch />
            <span>{repo.forks_count}</span>
          </div>
        </div>
        <div className={styles.language}>
          <span>{repo.language}</span>
        </div>
      </div>
    </div>
  );
};

export default RepoListItem;
