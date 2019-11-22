import React from 'react';
import './FilterBar.scss';

class FilterBar extends React.Component {

  render() {
    return(
      <section className="filters">
        <div className="fileters__top">
          <select name="categories" id="categories" className="dropdown">
            <option value="">-- Category --</option>
            <option value="five">5-7 Minute Read</option>
            <option value="ten-plus">10+ Minute Read</option>
          </select>
          <select name="length" id="length" className="dropdown">
            <option value="">-- Length of Article --</option>
            <option value="recent">Most Recent</option>
            <option value="least">Least Recent</option>
          </select>
          <select name="format" id="format" className="dropdown">
            <option value="">-- Number of Shares --</option>
            <option value="highest">Highest</option>
            <option value="lowest">Lowest</option>
          </select>
        </div>
        <div className="filters__bottom">
          <button id="button">Filter</button>
        </div>
      </section>
    )
  }
};

export default FilterBar;