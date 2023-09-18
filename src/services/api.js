const fetchApi = async () => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
    }
    const currencies = await response.json();
    const currenciesFiltered = Object.keys(currencies)
      .filter((currency) => currency !== 'USDT');
    return currenciesFiltered;
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = fetchApi;
