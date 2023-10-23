export function cacheSummary(summary) {
  localStorage.setItem('summary', summary);
}

export function getCachedSummary() {
  const summary = localStorage.getItem('summary');
  return !summary ? '' : summary;
}
