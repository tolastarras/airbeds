import React from 'react';
// import PropTypes from 'prop-types';

import { DataSearch } from '@appbaseio/reactivesearch';
import '../styles/nav.css';

export const Navigation = () => (
  <nav className="nav">
    <div className="title">AirBeds</div>
    <DataSearch
      componentId="SearchSensor"
      dataField={["name"]}
      autosuggest={false}
      placeholder="Search by house names"
      iconPosition="left"
      className="search"
      highlight={true}
      hightlightField={true}
      // react={{ and: ["SearchFilter"] }}
     />
  </nav>
);

// Navigation.propTypes = {
//   highlightField: PropTypes.func
// }
