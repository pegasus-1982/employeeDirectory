import React from "react";
import moment from "moment";

function ResultList(props) {
  const formatDate = moment(props.birthday).format("YYYY-MM-DD")
  return (
    
    <tr>
      <td><img src={props.picture} alt={props.firstName}/></td>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td><a href={props.email}>{props.email}</a></td>
      <td>{props.phone}</td>
      <td>{formatDate}</td>
      
    </tr>
  );
}

export default ResultList;
