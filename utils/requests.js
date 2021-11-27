const API_PATH = 'http://drupal.localhost:8000';

export async function fetchAvailableArticles() {
    return await fetch(`${API_PATH}/jsonapi/node/articles`).then(
        (res) => res.json()
    );
}