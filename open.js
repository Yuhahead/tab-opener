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

  // タブを開いた後に「閉じるヒント付きボタン」を表示
  document.body.innerHTML = `
    <h3>✅ タブを開きました！</h3>
    <p>この中継ページはブラウザの制限により自動では閉じられません。</p>
    <p>「このタブを閉じる」ボタン、もしくは右上の✕をクリックしてください。</p>
    <button onclick="window.close()">このタブを閉じる</button>
  `;
});
