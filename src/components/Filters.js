import React from 'react';
import { DateRange, NumberBox, RangeSlider } from '@appbaseio/reactivesearch';
import '../styles/filters.css';

export const Filters = () => {
  let el = document.querySelector('.rheostat-handle')

  if (el) {
    document.querySelector('.css-1e195do').innerHTML = '$' + el.getAttribute("aria-valuenow")
    document.querySelector('.css-hl1uwk').innerHTML = '$' + el.getAttribute("aria-valuemax")
  }

  return (
    <div className="filters">
      <DateRange
        dataField="date_from"
        componentId="DateRangeSensor"
        title="When"
        numberOfMonths={2}
        queryFormat="basic_date" // yyyyMMdd
        initialMonth={new Date('04-01-2017')}
      />
      <br/>
      <NumberBox
        componentId="GuestSensor"
        dataField="accommodates"
        title="Guests"
        labelPosition="right"
        defaultSelected={2}
        data={{
          start: 1,
          end: 16
        }}
      />
      <br/>
      <RangeSlider
        componentId="PriceSensor"
        dataField="price"
        title="Price Range"
        range={{
          start: 10,
          end: 250
        }}
        rangeLabels={{
          start: "$10",
          end: "$250"
        }}
        defaultSelected={{
          start: 10,
          end: 50
        }}
        stepValue={10}
        interval={20}
        react={{
          and: ["DateRangeSensor"]
        }}
      />
    </div>
  )
}
