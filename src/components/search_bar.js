import React, { Component } from 'react';



class SearchBar extends Component {

  constructor(props){
  console.log(props) //state is a plain js object
    super(props);    //Component has its own constructor. thus parent class method super called
    this.state = {term: ''} //state intialized by creating new object which has properties we want records on state
  }

  render()  {

      return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange = { event => this.onInputChange(event.target.value)}
        />
      </div>
     );
  }

  onInputChange(term){

    this.setState({term});
    this.props.onSearchTermChange(term);

  }

}



export default SearchBar;
