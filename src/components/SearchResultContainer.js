import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    users: [],
    search: "",
    results: [],
    display:"",
    sort:"asc"
  };

  // When this component mounts, search the Random User API
  componentDidMount() {
    this.searchEmployeeData();
  }

  // here is calling the API, line 22 will return 10 random users from the API
  searchEmployeeData = query => {
    API.getUsers(query)
      .then(res => this.setState({ users: res.data.results }))
      .catch(err => console.log(err));
     
  };

  //in this section it managing the events, 
  handleInputChange = event => {
    event.preventDefault();
    console.log(event.target.value);
    console.log(event.target.name);
    console.log(event.target);
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      
    }, ()=>{console.log("x",this.state)});
    
  };

  // When the form is submitted, sets the search state
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(event.target);
    
    // const results = this.state.users.filter(user => {
    //   console.log('z',user.name.first.match(new RegExp(this.state.search, 'i')))
    //   return user.name.first.match(new RegExp(this.state.search, "i")) })
    // this.setState({results: results}, ()=>{console.log('y', this.state)})

    
  };

  handleSort = (event) => {
    event.preventDefault()
    const sortUsers = [...this.state.users];
    if (this.state.sort === "asc") {
      this.setState({sort: "dsc"})
      sortUsers.sort((a, b) => a.email > b.email ? 1 : b.email > a.email ? -1 : 0
      );
    }
    else{
      this.setState({sort: "asc"})
      sortUsers.sort((a, b) => a.email > b.email ? -1 : b.email > a.email ? 1 : 0
      );
    }
    this.setState({users: sortUsers});
  };
  
  
  render() {
    return (
      
      <div>
        <SearchForm
          name="search"
          value={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          
        />
        <p>the searched value is " {this.state.search} "</p>

        <table className="table table-striped App">   

          <thead>
            <tr>
              <th>Image</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>e-mail</th>
              <th>Phone</th>
              <th>Birthday</th>   
            </tr>
          </thead>

          <tbody>
            {this.state.users.filter(user => {
            console.log('z',JSON.stringify(user).match(new RegExp(this.state.search, 'i')))
            return JSON.stringify(user).match(new RegExp(this.state.search, "i")) }).map(((user, i) => {
            //change user.name.first.... use json.stringify(user)
            
            return  <ResultList 
              picture={user.picture.thumbnail}
              firstName={user.name.first}
              lastName={user.name.last}
              email={user.email}
              phone={user.phone}
              birthday={user.dob.date}
              key={i}/>
              }))}
          </tbody>
        
        </table>
       
       

      </div>
    );
  }
}


export default SearchResultContainer;
