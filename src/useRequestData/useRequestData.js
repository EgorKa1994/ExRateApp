import { useEffect, useState } from 'react';
import { getDateFormat, getMinMaxValue } from './functions/functions';

export const useRequestData = () => {
  const [data, setData] = useState([]); // данные курсов 3 валют
  const [error, setError] = useState(null); // ошибка при запросе
  const [isLoading, setIsLoading] = useState(true); // индикатор загрузки данных
  const [rangeDate, setRangeDate] = useState([new Date(), new Date()]); // диапазон дат
  const [minMaxValue, setMinMaxValue] = useState([]); // минимальное и максимальное значение курсов валют
  const [filter, setFilter] = useState(''); // фильтр валют

  useEffect(() => {
    let range;
    // проверка на случай сброса даты на календаре
    if (rangeDate) {
      range = getDateFormat(rangeDate);
    } else {
      range = getDateFormat([new Date(), new Date()]);
    }

    const currencies = {
      USD: '145',
      EUR: '292',
      RUR: '298',
    };

    (async function () {
      try {
        const responseUSD = await fetch(
          `https://www.nbrb.by/API/ExRates/Rates/Dynamics/${currencies.USD}?startDate=${range[0]}&endDate=${range[1]}`
        );
        const usd = await responseUSD.json();

        const responseEUR = await fetch(
          `https://www.nbrb.by/API/ExRates/Rates/Dynamics/${currencies.EUR}?startDate=${range[0]}&endDate=${range[1]}`
        );
        const eur = await responseEUR.json();

        const responseRUR = await fetch(
          `https://www.nbrb.by/API/ExRates/Rates/Dynamics/${currencies.RUR}?startDate=${range[0]}&endDate=${range[1]}`
        );
        const rur = await responseRUR.json();

        setMinMaxValue([
          getMinMaxValue(usd),
          getMinMaxValue(eur),
          getMinMaxValue(rur),
        ]);

        usd.splice(0, 0, 'USD');
        eur.splice(0, 0, 'EUR');
        rur.splice(0, 0, 'RUR');

        setData([usd, eur, rur]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [rangeDate]);

  return {
    data,
    error,
    isLoading,
    rangeDate,
    minMaxValue,
    setRangeDate,
    filter,
    setFilter,
  };
};
