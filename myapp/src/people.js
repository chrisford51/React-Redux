import React, { Component } from 'react';

class People extends Component{
  render(){
    // console.log(this.props);
    const { people } = this.props;
    const peopleList = people.map(people => {
      return (
        <div className="people" key={people.id}>
          <div>Name: {people.name}</div>
          <div>Age: {people.age}</div>
          <div>Location: {people.location}</div>
        </div>
      )
    })
    return(
      <div className="people-list">
        { peopleList}
      </div>
    )
  }
}

export default People
