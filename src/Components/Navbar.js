import React, { Component } from "react";

export default class Movies extends Component {
  render() {
    return (
      <div style={{ display: "flex", padding: "0.5", backgroundColor: "aqua" }}>
        <h1>Movies App</h1>
        <h2 style={{ marginLeft: "2rem", marginTop: "1.5rem" }}>Favourites</h2>
      </div>
    );
  }
}
