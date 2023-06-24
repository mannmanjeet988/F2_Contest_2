const keysToDisplay = ['image', 'name', 'symbol', 'id', 'current_price', 'total_volume'];

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
  .then(response => response.json())
  .then(data => {
    // Process the fetched data
    renderTable(data,keysToDisplay);
  })
  .catch(error => {
    // Handle any errors
    console.log(error);
  });


  function renderTable(data, keys) {
    const tableBody = document.querySelector('#data-table tbody');
    
    // Clear any existing data
    tableBody.innerHTML = '';
    
    // Iterate over the data and create rows
    data.forEach(item => {
      const row = document.createElement('tr');
      
      // Iterate over the specified keys and create columns
      keys.forEach(key => {
        const column = document.createElement('td');
        if (key === 'image') {
          const image = document.createElement('img');
          image.src = item[key];
          column.appendChild(image);
        } else {
          column.textContent = item[key];
        }
       // column.textContent = item[key];
        row.appendChild(column);
      });
      
      // Append row to table body
      tableBody.appendChild(row);
    });
  }

  //renderTable(data);
  