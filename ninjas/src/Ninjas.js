impor React, { Component } from 'react';

class Ninjas extends Component{
  render(){
    const { ninjas } = this.props;
    const ninjasList = ninjas.map(ninja => {
      return (
        <div className="ninja" key=ninja.id)>
          <div>Name: { ninja.name }</div>
          <div>Age: { ninja.age }</div>
          <div>Belt: { ninja.belt }</div>
        </div>
      )
    })
    return(
      <div className="ninja-list">
        { ninjasList }
      </div>
    )
  }
}

export default Ninjas
