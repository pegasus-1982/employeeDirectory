import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
// import API2 from "../utils/API2";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchEmployeeData();
  }

  searchEmployeeData = query => {
    API.getUsers(query)
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
     
  };

  handleInputChange = event => {
    console.log(event.target);
    
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(event.target);
    console.log(event.state);
    this.searchEmployeeData(this.state.search);
    
  };
  
  render() {
    return (
      
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          
        />
        <p>the searched value is " {this.state.search} "</p>
        <ResultList searchedResults={this.state.results} />
      </div>
    );
  }
}


export default SearchResultContainer;
