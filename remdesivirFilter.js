
        const Search = () =>{
          let pinFilter = document.getElementById('pincode').value;
          let cityFilter = document.getElementById('city').value.toUpperCase();
          let stateFilter = document.getElementById('state').value.toUpperCase();
          let table = document.getElementById('remdesivir-table');
          let tr = table.getElementsByTagName('tr');
          for (var i=1; i<tr.length; i++){
            let pin = tr[i].getElementsByTagName('td')[0];
            let city = tr[i].getElementsByTagName('td')[2];
            let state = tr[i].getElementsByTagName('td')[1];

            
            let pinValue = pin.textContent || pin.innerHTML;
            let cityValue = city.textContent || city.innerHTML;
            let stateValue = state.textContent || state.innerHTML;

            if( (pinValue.indexOf(pinFilter) > -1) && (cityValue.toUpperCase().indexOf(cityFilter) > -1) && (stateValue.toUpperCase().indexOf(stateFilter) > -1) ){
              tr[i].style.display = '';
            }
            else{
              tr[i].style.display = 'none';
            }
          }
        }
        
        const CompleteTable = () =>{
          let table = document.getElementById('remdesivir-table');
          let tr = table.getElementsByTagName('tr');
          for (var i=1; i<tr.length; i++){
            tr[i].style.display = '';
          }
          document.getElementById('pincode').value = '';
          document.getElementById('city').value = '';
          document.getElementById('state').value = '';
        }
        
