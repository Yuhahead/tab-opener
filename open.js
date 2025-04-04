window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const urlsParam = params.get('urls');

  if (!urlsParam) {
    document.body.innerHTML = '<p>URLパラメータが見つかりません</p>';
    return;
  }

  const urls = decodeURIComponent(urlsParam).split(',');

  for (const url of urls) {
    window.open(url, '_blank');
  }

  // 自分自身を閉じる（ユーザー操作で開いた場合に限り有効）
  window.close();
});
