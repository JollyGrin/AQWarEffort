import React, { Component, Fragment } from 'react';

export default class Item extends Component {
  render() {
    return (
      <Fragment>
        <div className='item'>
          <img src='https://wow.zamimg.com/images/wow/icons/large/inv_misc_flower_02.jpg'></img>
          <div className='meter'>
            <span className='progress'></span>
          </div>
        </div>
      </Fragment>
    );
  }
}
