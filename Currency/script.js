// function getCurrency(){
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://api.coinlore.net/api/tickers/');
//     xhr.addEventListener('readystatechange', () => {
//         if ( xhr.readyState === 4 ){

//             let response = JSON.parse(xhr.responseText);
//             console.log(response);

//             for ( let coin of response.data ) {

//                 let row = document.createElement('tr'); 

//                 row.innerHTML = `
//                 <td>${coin.rank}</td>
//                 <td>${coin.name} ${coin.symbol}</td>
//                 <td>${coin.price_usd}</td>
//                 <td>${coin.percent_change_1h}</td>
//                 <td>${coin.percent_change_24h}</td>
//                 <td>${coin.percent_change_7d}</td>
//                 <td>${coin.market_cap_usd}</td>
//                 <td>${coin.volume24}</td>
//                 <td>${coin.csupply} ${coin.symbol}</td>
//                 `
//                 let table = document.querySelector('table');
//                 table.appendChild(row);

//             }

//         } else if ( xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200 ){
            
//             alert(`There is an error!
//             Code: ${xhr.status}
//             Text: ${xhr.statusText}`);
//         }

//     })
//     xhr.send(null);
// };

// getCurrency();

function getCurrency(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.coinlore.net/api/tickers/');
    xhr.addEventListener('readystatechange', () => {
        if ( xhr.readyState === 4 ){

            let rawData = JSON.parse(xhr.responseText);
            console.log(rawData);

            for (let coin of rawData.data) {
                let row = document.createElement('tr');
                let rank = document.createElement('td');
                rank.textContent = coin.rank;
                row.appendChild(rank);
                
                let name = document.createElement('td');
                name.textContent = coin.name + " " + coin.symbol;
                row.appendChild(name);
        
                let price = document.createElement('td');
                price.textContent = "$" + coin.price_usd;
                row.appendChild(price);
                
                let hour = document.createElement('td');
                if ( 0 <= coin.percent_change_1h ) {
                    hour.style.color = '#4CAF50';
                    hour.textContent = "▲" + coin.percent_change_1h  
                } else if ( 0 > coin.percent_change_1h) {
                    hour.style.color = '#FF5252';
                    hour.textContent = "▼" + coin.percent_change_1h
                }
                row.appendChild(hour);
                
                let day = document.createElement('td');
                if ( 0 < coin.percent_change_24h) {
                    day.style.color = '#4CAF50';
                    day.textContent = "▲" + coin.percent_change_24h  
                } else if ( 0 > coin.percent_change_24h) {
                    day.style.color = '#FF5252';
                    day.textContent = "▼" + coin.percent_change_24h
                } else if ( 0 == coin.percent_change_24h) {
                    day.style.color = 'black';
                    day.textContent = "= " + coin.percent_change_24h
                  }
                row.appendChild(day);

                let week = document.createElement('td');
                if ( 0<coin.percent_change_7d) {
                    week.style.color = '#4CAF50';
                    week.textContent = "▲" + coin.percent_change_7d  
                } else if ( 0>coin.percent_change_7d) {
                    week.style.color = '#FF5252';
                    week.textContent = "▼" + coin.percent_change_7d
                } else if ( 0 == coin.percent_change_7d) {
                    week.style.color = 'black';
                    week.textContent = "= " + coin.percent_change_7d
                  }
                row.appendChild(week);
                let mark = document.createElement('td');
                mark.textContent = "$" + addCommas(coin.market_cap_usd);
                row.appendChild(mark);
                
                let vol = document.createElement('td');
                vol.textContent = addCommas(coin.volume24);
                row.appendChild(vol);
                
                let csupply = document.createElement('td');
                csupply.textContent = addCommas(coin.csupply) + " " + coin.symbol;
                row.appendChild(csupply);
                
                let table = document.querySelector('table');
                table.appendChild(row);
              }
        } else if ( xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200 ){
            
            alert(`There is an error!
            Code: ${xhr.status}
            Text: ${xhr.statusText}`);
        }

    })
    xhr.send(null);
};

function addCommas(num) {
    if (typeof num !== "number") parseInt(num);
    let floor = Math.floor(num);
    let numParts = floor.toString().split(".");
    numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numParts.join(".");
  }


getCurrency();