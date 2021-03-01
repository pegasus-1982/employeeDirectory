import React from 'react'
import API from '../utils/API';

import Users from './user';


class Content extends React.Component {

  state = {
    name : "Luis",
    users: [],
  }


  componentDidMount() {

    API.getUsers().then(res => {
      console.log('RES', res.data.results);
      this.setState({users: res.data.results});
    });

    

  }

 

  render(){
    console.log('STATE', this.state.users);
    return (
     <div id="content">
     
        <table class="table table-striped App">   
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
            {this.state.users.map(((user, i) => {
            
            return  <Users 
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
     )
  }

}

export default Content;