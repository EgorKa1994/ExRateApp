// фильтрация данных
export const tableContent = (filter, data) => {
  if (filter) {
    return data.filter((cur) => cur[0].includes(filter.toUpperCase()));
  } else {
    return data;
  }
};

export const setMinMaxValueStyle = (minMaxRates, currentRate) => {
  if (minMaxRates.max == currentRate) {
    return 'max-rate';
  } else if (minMaxRates.min == currentRate) {
    return 'min-rate';
  } else {
    return '';
  }
};

export const setMinMaxValueStyleFilter = (
  minMaxRates,
  currentRate,
  currency
) => {
  console.log(currency);
  switch (currency) {
    case 'USD':
      return setMinMaxValueStyle(minMaxRates[0], currentRate);
    case 'EUR':
      return setMinMaxValueStyle(minMaxRates[1], currentRate);
    case 'RUR':
      return setMinMaxValueStyle(minMaxRates[2], currentRate);
  }
};
