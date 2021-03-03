import React from "react";

function SearchForm(props) {
  return (
    
    <form>
      <div className="form-group">
       
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name={props.name}
          type="text"
          className="form-control"
          placeholder="Search Employee Data"
          id="search"
        />
        <br />
        

        {/* <button onClick={props.handleFormSubmit} className="btn btn-outline-dark">
          Search
        </button> */}
      </div>
    </form>
  
  
  );
}

export default SearchForm;
