import { onValue, ref } from 'firebase/database';

import { db } from '../configs/firebase';

function fetchArticleData(category, numArticles) {
  const dbref = ref(db, `/articles/${category}`);
  return new Promise((resolve, reject) => {
    onValue(dbref, (snapshot) => {
      if (snapshot.exists()) {
        // slice and take only the number of articles required
        let entries = Object.entries(snapshot.val());
        entries = entries.slice(0, numArticles);
        resolve(entries.map((articles) => articles[1])); // remove the id
      } else {
        reject(new Error('Unable to fetch articles'));
      }
    });
  });
}

async function fetchAllArticles(allocatedPref) {
  let contentToSummarise = [];
  const categories = Object.keys(allocatedPref);
  for (const category of categories) {
    const count = allocatedPref[category];
    const result = await fetchArticleData(category, count);
    contentToSummarise = contentToSummarise.concat(result);
  }
  return contentToSummarise;
}

function allocateCategories(preferences, numToSummarise) {
  if (preferences.all) {
    preferences = {
      all: false,
      business: true,
      entertainment: true,
      health: true,
      science: true,
      sports: true,
      tech: true,
    };
  }

  const selectedCategories = Object.keys(preferences).filter(
    (category) => preferences[category]
  );
  const trueCategories = selectedCategories.length;

  if (trueCategories === 0) {
    // if no categories are selected, return 0 for all categories
    return Object.fromEntries(
      selectedCategories.map((category) => [category, 0])
    );
  }

  const allocationPerCategory = Math.floor(numToSummarise / trueCategories);
  const remainder = numToSummarise % trueCategories;

  const allocations = {};

  selectedCategories.forEach((category) => {
    allocations[category] = allocationPerCategory;
  });

  // distribute the remainder as evenly as possible among the selected categories
  for (let i = 0; i < remainder; i++) {
    allocations[selectedCategories[i]]++;
  }

  return allocations;
}

function processFetchedArticles(articles) {
  const extractedArticles = [];

  articles.forEach((article) => {
    extractedArticles.push({
      title: article.title,
      description: article.description,
      content: article.content,
      publishedAt: article.publishedAt,
    });
  });

  return extractedArticles;
}

export async function fetchArticles(preferences, numToSummarise) {
  // allocate 10 articles evenly
  const allocatedPref = allocateCategories(preferences, numToSummarise);

  try {
    const contentToSummarise = await fetchAllArticles(allocatedPref);
    const processedArticles = processFetchedArticles(contentToSummarise);
    return processedArticles;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchTrendingArticles(numToSummarise) {
  const allocatedPref = {
    trending: numToSummarise,
  };

  try {
    const fetchedArticles = await fetchAllArticles(allocatedPref);
    return fetchedArticles;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchArticleByCategory(category, numOfArticles) {
  const allocatedPref = {
    [category]: numOfArticles,
  };

  try {
    const fetchedArticles = await fetchAllArticles(allocatedPref);
    return fetchedArticles;
  } catch (error) {
    console.error(error);
    return [];
  }
}
