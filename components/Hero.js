import React, { Component, Fragment } from 'react';

export default class Hero extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <section id='hero'>
          <h1>AQ War Effort</h1>
          <h3>Deviate Delight</h3>
          <h4>Last Updated: {this.props.date}</h4>
        </section>
      </Fragment>
    );
  }
}
