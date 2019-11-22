import React from 'react';
import './FilterBar.scss';


class FilterBar extends React.Component {

  render() {
    return(
      <section className="filters">
        <select name="categories" id="categories">
          <option value="">Category</option>
          <option value="Something">Something</option>
        </select>
        <select name="length" id="length">
          <option value="">Length of Article</option>
        </select>
        <select name="format" id="format">
          <option value="">Format of Content</option>
        </select>
        <select name="sort" id="sort">
          <option value="">Sort</option>
          </select>
      </section>
    )
  }
};

export default FilterBar;