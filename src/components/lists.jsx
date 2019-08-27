import React, { Component } from 'react'

export default class lists extends Component {
  render() {

    let response = this.state.data.map((res,index)=>{
      return (

     <div></div>
      )
    })

    return (
      {response}
    )
  }
}
