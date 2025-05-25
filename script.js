fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const table = document.getElementById('dataTable');
    const thead = table.querySelector('thead');
    const tbody = table.querySelector('tbody');

    // ヘッダーの作成
    const headers = Object.keys(data[0]);
    const headerRow = document.createElement('tr');
    headers.forEach(key => {
      const th = document.createElement('th');
      th.textContent = key;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // データ行の作成
    data.forEach(item => {
      const row = document.createElement('tr');
      headers.forEach(key => {
        const cell = document.createElement('td');
        cell.textContent = item[key];
        row.appendChild(cell);
      });
      tbody.appendChild(row);
    });
  })
  .catch(error => console.error('読み込みエラー:', error));