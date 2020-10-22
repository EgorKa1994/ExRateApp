// форматирование полученной из календаря даты
export const getDateFormat = (period) => {
  let rangeDate = period.map((item) => {
    let dataCorrection = `${item.getFullYear()}-${
      item.getMonth() + 1
    }-${item.getDate()}`;
    return dataCorrection;
  });
  return rangeDate;
};

// нахождение минимального и максимального значения курсов валют
export const getMinMaxValue = (arrValue) => {
  let currencyRates = arrValue.map((item) => {
    return item.Cur_OfficialRate;
  });

  currencyRates.sort((a, b) => a - b);

  const minMaxValues = {
    min: currencyRates[0],
    max: currencyRates[currencyRates.length - 1],
  };

  return minMaxValues;
};
