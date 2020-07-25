import React, { Component, Fragment } from 'react';
import Item from './Item';

export default class Ally extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        {console.log('ally', this.props.table)}
      </Fragment>
    );
  }
}
