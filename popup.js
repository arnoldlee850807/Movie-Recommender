document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('searchMovies');
    checkPageButton.addEventListener('click', function() {
        chrome.tabs.query({
            active: true,
            lastFocusedWindow: true
        }, function(tabs) {
            // Create table
            let table = document.createElement('table');
            let thead = document.createElement('thead');
            let tbody = document.createElement('tbody');

            table.appendChild(thead);
            table.appendChild(tbody);

            // Adding the entire table to the body tag
            document.getElementById('body').appendChild(table);

            // Dum data
            let row_1 = document.createElement('tr');
            let heading_1 = document.createElement('th');
            heading_1.innerHTML = "";
            let heading_2 = document.createElement('th');
            heading_2.innerHTML = "Movie Name";
            let heading_3 = document.createElement('th');
            heading_3.innerHTML = "Ratings";

            row_1.appendChild(heading_1);
            row_1.appendChild(heading_2);
            row_1.appendChild(heading_3);
            thead.appendChild(row_1);
            // Creating and adding data to second row of the table
            let row_2 = document.createElement('tr');
            let row_2_data_1 = document.createElement('td');
            row_2_data_1.innerHTML = "1.";
            let row_2_data_2 = document.createElement('td');
            row_2_data_2.innerHTML = "Iron man";
            let row_2_data_3 = document.createElement('td');
            row_2_data_3.innerHTML = "8/10";

            row_2.appendChild(row_2_data_1);
            row_2.appendChild(row_2_data_2);
            row_2.appendChild(row_2_data_3);
            tbody.appendChild(row_2);

            // Creating and adding data to third row of the table
            let row_3 = document.createElement('tr');
            let row_3_data_1 = document.createElement('td');
            row_3_data_1.innerHTML = "2.";
            let row_3_data_2 = document.createElement('td');
            row_3_data_2.innerHTML = "Iron man 2";
            let row_3_data_3 = document.createElement('td');
            row_3_data_3.innerHTML = "7.5/10";

            row_3.appendChild(row_3_data_1);
            row_3.appendChild(row_3_data_2);
            row_3.appendChild(row_3_data_3);
            tbody.appendChild(row_3);

            // Creating and adding data to third row of the table
            let row_4 = document.createElement('tr');
            let row_4_data_1 = document.createElement('td');
            row_4_data_1.innerHTML = "3.";
            let row_4_data_2 = document.createElement('td');
            row_4_data_2.innerHTML = "Iron man 3";
            let row_4_data_3 = document.createElement('td');
            row_4_data_3.innerHTML = "7.5/10";

            row_4.appendChild(row_4_data_1);
            row_4.appendChild(row_4_data_2);
            row_4.appendChild(row_4_data_3);
            tbody.appendChild(row_4);

            // Creating and adding data to third row of the table
            let row_5 = document.createElement('tr');
            let row_5_data_1 = document.createElement('td');
            row_5_data_1.innerHTML = "4.";
            let row_5_data_2 = document.createElement('td');
            row_5_data_2.innerHTML = "Iron man 4";
            let row_5_data_3 = document.createElement('td');
            row_5_data_3.innerHTML = "7.5/10";

            row_5.appendChild(row_5_data_1);
            row_5.appendChild(row_5_data_2);
            row_5.appendChild(row_5_data_3);
            tbody.appendChild(row_5);

            // Creating and adding data to third row of the table
            let row_6 = document.createElement('tr');
            let row_6_data_1 = document.createElement('td');
            row_6_data_1.innerHTML = "5.";
            let row_6_data_2 = document.createElement('td');
            row_6_data_2.innerHTML = "Iron man 5";
            let row_6_data_3 = document.createElement('td');
            row_6_data_3.innerHTML = "7.5/10";

            row_6.appendChild(row_6_data_1);
            row_6.appendChild(row_6_data_2);
            row_6.appendChild(row_6_data_3);
            tbody.appendChild(row_6);
        });
    }, false);
}, false);