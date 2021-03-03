import React from "react";

function ResultList(props) {
  return (
    
    <tr>
      <td><img src={props.picture} alt={props.firstName}/></td>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td><a href={props.email}>{props.email}</a></td>
      <td>{props.phone}</td>
      <td>{props.birthday}</td>
      
    </tr>
  );
}

export default ResultList;
