import React from 'react';
import { ResultCard } from '@appbaseio/reactivesearch';
import '../styles/results.css';

export const Results = () => (
  <ResultCard
    componentId="SearchResult"
    dataField="price"
    size={12}
    sortBy="asc"
    onData={data=>({
      image: data.image || require('../img/not-available.jpg'),
      title: data.name,
      description: (
        <div>
          <div className="price">${data.price}</div>
          <p className="info">{data.room_type} . {data.accommodates} guests</p>
        </div>
      ),
      url: data.listing_url,
    })}
    pagination={true}
    react={{
      and: ["PriceSensor", "SearchSensor", "GuestSensor", "DateRangeSensor", "search"]
    }}
    innerClass={{
      resultStats: 'result-stats',
      list: 'list',
      listItem: 'list-item',
      image: 'image'
    }}
  />
);
