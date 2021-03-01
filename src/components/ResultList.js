import React from "react";

function ResultList(props) {
  return (
    
    <tbody>
      {props.searchedResults.map(result => (
        <tr className="list-group-item" key={result.id}>
          
          <td>{result.name.first}</td>
          <td>{result.name.last}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default ResultList;
