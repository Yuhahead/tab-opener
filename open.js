window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const urlsParam = params.get('urls');

  if (!urlsParam) {
    document.body.innerHTML = '<p>URLパラメータが見つかりません</p>';
    return;
  }

  const urls = decodeURIComponent(urlsParam).split(',');

  const openButton = document.getElementById('openTabs');
  openButton.addEventListener('click', () => {
    for (const url of urls) {
      window.open(url, '_blank');
    }
  });
});
