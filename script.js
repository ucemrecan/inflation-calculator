const amount = document.getElementById("amount-value");
const startYear = document.getElementById("start-year");
const endYear = document.getElementById("end-year");
const btn = document.getElementById("btn");
const resultStartYear = document.getElementById("result-start-year");
const resultEndYear = document.getElementById("result-end-year");
const userValue = document.getElementById("user-value");
const resultValue = document.getElementById("result-value");

const cpis = {
    1956: 21.5,
    1957: 21.9,
    1958: 22.4,
    1959: 22.6,
    1960: 22.9,
    1961: 23.5,
    1962: 24.2,
    1963: 24.9,
    1964: 25.5,
    1965: 26.3,
    1966: 27.2,
    1967: 27.7,
    1968: 28.1,
    1969: 28.7,
    1970: 29.7,
    1971: 31.2,
    1972: 32.9,
    1973: 35.2,
    1974: 37.7,
    1975: 39.9,
    1976: 41.6,
    1977: 43.2,
    1978: 44.4,
    1979: 46.2,
    1980: 48.7,
    1981: 51.8,
    1982: 54.5,
    1983: 56.3,
    1984: 57.6,
    1985: 58.8,
    1986: 58.7,
    1987: 58.9,
    1988: 59.6,
    1989: 61.3,
    1990: 62.9,
    1991: 65.5,
    1992: 68.8,
    1993: 71.9,
    1994: 73.8,
    1995: 75.1,
    1996: 76.2,
    1997: 77.6,
    1998: 78.3,
    1999: 78.8,
    2000: 79.9,
    2001: 81.5,
    2002: 82.6,
    2003: 83.5,
    2004: 84.9,
    2005: 86.2,
    2006: 87.6,
    2007: 89.6,
    2008: 91.9,
    2009: 92.3,
    2010: 93.3,
    2011: 95.2,
    2012: 97.1,
    2013: 98.6,
    2014: 99.5,
    2015: 100.0,
    2016: 100.5,
    2017: 102.0,
    2018: 103.8,
    2019: 105.3,
    2020: 105.8,
    2021: 109.1,
    2022: 117.8,
    2023: 125.7
}

btn.addEventListener("click", (e) => {
    
    e.preventDefault();
    let value = ((cpis[endYear.value] / cpis[startYear.value]) * amount.value).toFixed(2); 

    userValue.innerHTML = amount.value + "€";
    resultValue.innerHTML = value + "€";
    resultStartYear.innerHTML = startYear.value;
    resultEndYear.innerHTML = endYear.value;
    document.getElementById("result").style.display = "block";

});
