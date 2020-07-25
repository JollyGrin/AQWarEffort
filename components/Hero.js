import React, { Component, Fragment } from 'react';

export default class Hero extends Component {
  render() {
    return (
      <Fragment>
        <section id='hero'>
          <h1>AQ War Effort</h1>
          <h3>Deviate Delight</h3>
        </section>

        <style jsx>{`
          h1 {
            font-family: 'Raleway', sans-serif;
            font-size: 5rem;
            font-weight: 800;
            line-height: 72px;
            margin: 0 0 24px;
            text-align: center;
            text-transform: uppercase;
          }
          h3 {
            font-family: 'Raleway', sans-serif;
            font-size: 2rem;
            font-weight: 800;
            line-height: 72px;
            margin: 0 0 24px;
            text-align: center;
            text-transform: uppercase;
          }
        `}</style>
      </Fragment>
    );
  }
}
