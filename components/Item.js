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
    const styles = {
      prog: {
        width: `${Math.floor(
          (this.props.current / this.props.total) * 100 - 3
        )}%`,
      },
      full: {
        width: `98%`,
      },
    };

    const isFull = (current, total) => {
      if (current / total === 1) {
        return styles.full;
      } else {
        return styles.prog;
      }
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
            {Math.floor((this.props.current / this.props.total) * 100)}
          </span>
          <div className='meter'>
            <span
              className='progress'
              style={isFull(this.props.current, this.props.total)}
            >
              {this.formatNumber(this.props.current)} /{' '}
              {this.formatNumber(this.props.total)}
            </span>
          </div>
        </div>
      </Fragment>
    );
  }
}
