const API_KEY = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

export const fetchExchangeRates = async (baseCurrency = 'USD') => {
    const response = await fetch(`${BASE_URL}${baseCurrency}`);

    if (!response.ok) throw new Error('Ошибка загрузки данных');

    return await response.json();
};