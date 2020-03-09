import React from 'react';

class SearchBar extends React.Component {
  state = {
    searchValue: ''
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    // Callback from parent element
    this.props.onSearchSubmit(this.state.searchValue);
  };

  onInputChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    const { placeholder } = this.props;
    const { searchValue } = this.state;

    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Search videos</label>
            <input
              type='search'
              value={searchValue}
              placeholder={placeholder}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
};

SearchBar.defaultProps = {
  placeholder: 'Search...'
};

export default SearchBar;