
const filterInput = document.getElementById('filterInput');
const countryList = document.getElementById('countryList');
const countries = countryList.getElementsByTagName('li');


function filterCountries() {
  const filterValue = filterInput.value.toLowerCase().trim();

  
  Array.from(countries).forEach(country => {
    const countryName = country.textContent.toLowerCase();

    
    if (countryName.includes(filterValue)) {
      country.style.display = 'block'; 
    } else {
      country.style.display = 'none';  
    }
  });
}


filterInput.addEventListener('input', filterCountries);

