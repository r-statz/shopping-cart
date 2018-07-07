import React, { Component } from 'react'
import productItem from "./productItem"
const AddItem= (props) => {
    return (
    <div className="container">
      <div className="row">
        <form>
          <label htmlFor="quantity">Quantity</label>
          <input type="number" id="quantity" className="quantity"></input><br></br>
          <label htmlFor="products">Products</label>
          <select className="products">
            {props.map(prtem => <option value="name">{props.name}</option>
          )}
          </select>
          <input className="products"></input><br></br>
          <button type="submit" className="submit btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export { AddItem }
