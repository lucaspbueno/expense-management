const fetchApi = async () => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
    }

    const exchangeRates = await response.json();
    if (!exchangeRates || Object.keys(exchangeRates).length === 0) {
      throw new Error('Dados de câmbio ausentes ou vazios na resposta da API.');
    }

    const BRL = {
      code: 'BRL',
      codein: 'BRL',
      name: 'Real Brasileiro',
      high: '1',
      low: '1',
      varBid: '0.0001',
      pctChange: '0',
      bid: '4.8787',
      ask: '1',
      timestamp: '1695243600',
      create_date: '2023-09-20 18:00:00',
    };

    const exchangeRatesWithBRL = { BRL, ...exchangeRates };

    const currenciesFiltered = Object.keys(exchangeRates)
      .filter((currency) => currency !== 'USDT');

    const currenciesWithBRL = ['BRL', ...currenciesFiltered];

    return { currenciesWithBRL, exchangeRatesWithBRL };
  } catch (err) {
    console.error(err.message);
    return { currenciesWithBRL: [], exchangeRatesWithBRL: {} };
  }
};

export default fetchApi;
