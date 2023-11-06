import { Container, Stack } from '@mui/material';
import React, { useMemo, useState } from 'react';

import { fetchArticleByCategory } from '../../utils/ArticleManager';
import ArticleSection from './ArticleSection';
import ExploreSelect from './ExploreSelect';
import FactOfTheDay from './FactOfTheDay';
import TodayInHistory from './TodayInHistory';

export default function Explore() {
  const [preferences, setPreferences] = useState({
    all: true,
    tech: false,
    science: false,
    sports: false,
    business: false,
    health: false,
    entertainment: false,
  });

  const [techArticles, setTechArticles] = useState([]);
  const [scienceArticles, setScienceArticles] = useState([]);
  const [sportsArticles, setSportsArticles] = useState([]);
  const [businessArticles, setBusinessArticles] = useState([]);
  const [healthArticles, setHealthArticles] = useState([]);
  const [entertainmentArticles, setEntertainmentArticles] = useState([]);

  useMemo(() => {
    fetchArticleByCategory('tech', 6).then((article) => {
      setTechArticles(article);
    });
    fetchArticleByCategory('science', 6).then((article) => {
      setScienceArticles(article);
    });
    fetchArticleByCategory('sports', 6).then((article) => {
      setSportsArticles(article);
    });
    fetchArticleByCategory('business', 6).then((article) => {
      setBusinessArticles(article);
    });
    fetchArticleByCategory('health', 6).then((article) => {
      setHealthArticles(article);
    });
    fetchArticleByCategory('entertainment', 6).then((article) => {
      setEntertainmentArticles(article);
    });
  }, []);

  return (
    <Container width="xm" style={{ paddingBottom: '3rem' }}>
      <ExploreSelect
        preferences={preferences}
        setPreferences={setPreferences}
      />

      <Stack direction="row" spacing={6}>
        <Stack spacing={10} sx={{ flexBasis: '65%' }}>
          {preferences.all || preferences.tech ? (
            <ArticleSection title="Technology" articles={techArticles} />
          ) : null}
          {preferences.all || preferences.science ? (
            <ArticleSection title="Science" articles={scienceArticles} />
          ) : null}
          {preferences.all || preferences.sports ? (
            <ArticleSection title="Sports" articles={sportsArticles} />
          ) : null}
          {preferences.all || preferences.business ? (
            <ArticleSection title="Business" articles={businessArticles} />
          ) : null}
          {preferences.all || preferences.health ? (
            <ArticleSection title="Health" articles={healthArticles} />
          ) : null}
          {preferences.all || preferences.entertainment ? (
            <ArticleSection
              title="Entertainment"
              articles={entertainmentArticles}
            />
          ) : null}
        </Stack>
        <Stack spacing={4} paddingTop={10} sx={{ flexBasis: '35%' }}>
          <FactOfTheDay />
          <TodayInHistory />
        </Stack>
      </Stack>
    </Container>
  );
}
