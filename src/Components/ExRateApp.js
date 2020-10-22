import React from 'react';
import './ExRateApp.scss';
import { useRequestData } from '../useRequestData/useRequestData';
import { Calendar } from '../Components/Calendar/Calendar';
import { Filter } from '../Components/Filter/Filter';
import { PreLoader } from '../Components/PreLoader/PreLoader';
import {
  tableContent,
  setMinMaxValueStyle,
  setMinMaxValueStyleFilter,
} from '../functions/functions';
import { Error } from '../Components/Error/Error';

export const ExRateApp = () => {
  const {
    data,
    error,
    isLoading,
    rangeDate,
    minMaxValue,
    setRangeDate,
    filter,
    setFilter,
  } = useRequestData();

  if (isLoading) {
    return <PreLoader />;
  }

  if (error) {
    return <Error error={error} />;
  }
  return (
    <div className='container'>
      <h1>ExRates app</h1>
      <table>
        <thead>
          <tr>
            {data[0].map((item, index) => {
              if (!index) {
                return <th key={index}></th>;
              }
              return (
                <th key={index}>{item.Date.slice(0, 10).replace(/-/g, '/')}</th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableContent(filter, data).map((currency, index) => {
            return (
              <tr key={index}>
                {currency.map((currencyData, index2) => {
                  if (!index2) {
                    return (
                      <td className='currency-title' key={index2}>
                        {currencyData}
                      </td>
                    );
                  } else {
                    return (
                      <td
                        key={index2}
                        className={
                          filter
                            ? setMinMaxValueStyleFilter(
                                minMaxValue,
                                currencyData.Cur_OfficialRate,
                                currency[0]
                              )
                            : setMinMaxValueStyle(
                                minMaxValue[index],
                                currencyData.Cur_OfficialRate
                              )
                        }
                      >
                        {currencyData.Cur_OfficialRate}
                      </td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Filter filter={filter} setFilter={setFilter}></Filter>
      <Calendar setRangeDate={setRangeDate} rangeDate={rangeDate} />
    </div>
  );
};
