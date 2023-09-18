const fetchApi = async () => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
    }
    const exchangeRates = await response.json();
    const currenciesFiltered = Object.keys(exchangeRates)
      .filter((currency) => currency !== 'USDT');
    return { currenciesFiltered, exchangeRates };
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = fetchApi;
