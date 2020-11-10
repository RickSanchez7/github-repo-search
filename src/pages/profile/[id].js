import React from 'react';
import { getProfile } from '../../services/githubService';
import ButtonLink from '../../components/shared/button-link';
import UserAvatar from '../../components/user-avatar';
import styles from './profile.module.scss';

const Profile = ({ profile }) => {
  console.log(profile);
  return (
    <div>
      <ButtonLink href='/' text='Back' />
      <UserAvatar user={profile} />
      <h3 className='is-size-3'>{profile.name}</h3>
      {profile.bio && <div className={styles.text}>{profile.bio}</div>}
      {profile.email && <div className={styles.text}>{profile.email}</div>}
      {profile.blog && <div className={styles.text}>{profile.blog}</div>}
      {profile.location && (
        <div className={styles.text}>{profile.location}</div>
      )}
      {profile.followers > 0 && profile.following > 0 ? (
        <div className={styles.counters}>
          <div>Followers: {profile.followers}</div>
          <div>Following: {profile.following}</div>
        </div>
      ) : (
        ''
      )}

      <ButtonLink
        href={profile.html_url}
        text='View on Github'
        type='dark'
        target='_blank'
        external
      />
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const res = await getProfile(query.id);
  return {
    props: { profile: res.data },
  };
};

export default Profile;
