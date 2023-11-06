export function cacheSummary(summary) {
  localStorage.setItem('summary', summary);
}

export function getCachedSummary() {
  const summary = localStorage.getItem('summary');
  return !summary ? '' : summary;
}

export function cacheFOTD(fotd) {
  localStorage.setItem('fotd', fotd);
}

export function getCachedFOTD() {
  const fotd = localStorage.getItem('fotd');
  return !fotd ? '' : fotd;
}

export function cacheTodayHistory(history) {
  localStorage.setItem('history', history);
}

export function getCachedTodayHistory() {
  const history = localStorage.getItem('history');
  return !history ? '' : history;
}
