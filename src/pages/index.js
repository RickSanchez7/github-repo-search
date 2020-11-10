import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from '../components/search';
import { searchRepos } from '../services/githubService';
import RepoList from '../components/repo-list';
import { getRandomWord } from '../helpers/randomWordHelper';

import styles from './index.module.scss';

const index = props => {
  const [searchText, setSearchText] = useState(props.searchText);
  const [language, setLanguage] = useState('');
  const [repos, setRepos] = useState(props.repos);
  const [loading, setLoading] = useState(false);

  const onSearchTextChange = text => {
    setSearchText(text);
    if (text) {
      loadRepos(text, language);
    }
  };

  const onLanguageChange = language => {
    setLanguage(language);
    loadRepos(searchText, language);
  };

  const loadRepos = async (searchText, language) => {
    setLoading(true);
    const res = await searchRepos(searchText, language);
    if (res && res.data) {
      setLoading(false);
      setRepos(res.data.items);
    }
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src='/img/image.png' />
      <Search
        searchText={searchText}
        Language={language}
        onSearchTextChange={onSearchTextChange}
        onLanguageChange={onLanguageChange}
      />
      <RepoList loading={loading} repos={repos} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const searchText = getRandomWord();
  const res = await searchRepos(searchText);
  return {
    props: {
      searchText,
      repos: res.data.items,
    },
  };
};

export default index;
