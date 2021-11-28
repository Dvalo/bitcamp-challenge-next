const API_PATH = "http://drupal.localhost:8000";

export async function fetchAvailableArticles() {
  return await fetch(`${API_PATH}/api/articles`).then((res) =>
    res.json()
  );
}

export async function fetchArticle(articleId) {
  return await fetch(`${API_PATH}/api/articles/${articleId}`).then(
    (res) => res.json()
  );
}
