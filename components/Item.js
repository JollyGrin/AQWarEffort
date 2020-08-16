import React, { Component, Fragment } from 'react';

export default class Item extends Component {
  constructor(props) {
    super(props);
  }

  formatNumber = (rawNum) => {
    return Number(parseFloat(rawNum).toFixed(0)).toLocaleString('en', {
      minimumFractionDigits: 0,
    });
  };

  render() {
    const percentInt = Math.floor((this.props.current / this.props.total) * 100)
    const styles = {
      prog: {
        width: `${percentInt}%`,
      },
      complete: {
        width: 'auto',
        borderRadius: '0.5em',
      },
    };
    return (
      <Fragment>
        <div className='item'>
          <a
            href={`https://classic.wowhead.com/item=${this.props.id}/`}
            data-wowhead={`item=${this.props.id}`}
          >
            <img
              src={`https://wow.zamimg.com/images/wow/icons/large/${this.props.pic}`}
            ></img>
          </a>
          <span className='percent'>
            {percentInt}
          </span>
          <div className='meter'>
            {percentInt === 100 ? (
            <span className='progress' style={styles.complete}>
              {this.formatNumber(this.props.current)} /{' '}
              {this.formatNumber(this.props.total)}
            </span>
            ) : (
            <span className='progress' style={styles.prog}>
              {this.formatNumber(this.props.current)} /{' '}
              {this.formatNumber(this.props.total)}
            </span>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}
