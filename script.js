
//const keysToDisplay = ['image', 'name', 'symbol', 'id', 'current_price', 'total_volume'];
const keysToDisplay = ['image', 'name', 'symbol', 'id' ,'current_price', 'total_volume', 'market_cap_change_percentage_24h','market_cap'];


//Method 1: fetching data using .then method

// fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
//   .then(response => response.json())
//   .then(data => {
//     // Process the fetched data
//     renderTable(data,keysToDisplay);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.log(error);
//   });


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
        } 
        else {
          (column.textContent) = item[key];
        }

        if (key === 'symbol'){
            column.textContent = item[key].toUpperCase();
        }

        if( key === 'current_price' || key === 'total_volume' ){
           column.textContent = "$"+  item[key];
        }

        if(key === 'market_cap' ){
          column.textContent = "Mkt Cap:$"+  item[key];
        }
         
        if(key === 'market_cap_change_percentage_24h' ){
          column.textContent =   item[key].toFixed(2) +"%";
          let x = column.textContent;
          if(x < 0){
            column.classList.add('conditional-color'); 
          } 
          else {
            column.classList.add('conditional-color2'); 
          }
        }
        
       // column.textContent = item[key];
        row.appendChild(column);
      });
      
      // Append row to table body
      tableBody.appendChild(row);
    });
  }


//Method 2 : fetching data using async await method  
// async function fetchDataAndRenderTable() {
//   try {
//     const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
//     const data = await response.json();
//     const keysToDisplay = ['image', 'name', 'symbol', 'current_price', 'total_volume', 'market_cap_change_percentage_24h','market_cap']; // Specify the keys you want to display
    
//     renderTable(data, keysToDisplay);
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchDataAndRenderTable();
  

const searchInput = document.getElementById('search-input');
const sortMarketCapButton = document.getElementById('sort-mkt-cap-button');
const sortPercentageChangeButton = document.getElementById('sort-by-percentage-button');


function renderTable(data, keys, sorted_key) {
  const tableBody = document.querySelector('#data-table tbody');

  // Clear any existing data
  tableBody.innerHTML = '';

  // Sort the data based on the specified key
  data.sort((a, b) => a[sorted_key].localeCompare(b[sorted_key]));

  // Iterate over the sorted data and create rows
  data.forEach(item => {
    const row = document.createElement('tr');

    // Iterate over the specified keys and create columns
    keys.forEach(key => {
      const column = document.createElement('td');
      column.textContent = item[key];
      row.appendChild(column);
    });

    // Append row to table body
    tableBody.appendChild(row);
  });
} 


