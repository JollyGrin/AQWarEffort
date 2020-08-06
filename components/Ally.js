import React, { Component, Fragment } from 'react';
import Item from './Item';

export default class Ally extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      prog: {
        flexBasis: `${Math.floor(
          (this.props.table.current.sumTotal /
            this.props.table.total.sumTotal) *
            100
        )}%`,
      },
    };
    return (
      <Fragment>
        <Item
          pic={'inv_bannerpvp_02.jpg'}
          id={21436}
          total={this.props.table.total.sumTotal}
          current={this.props.table.current.sumTotal}
        />
        <hr />
        <Item
          pic={'inv_ingot_02.jpg'}
          id={2840}
          total={this.props.table.total.copperBar}
          current={this.props.table.current.copperBar}
        />
        <Item
          pic={'inv_misc_leatherscrap_08.jpg'}
          id={4304}
          total={this.props.table.total.thickLeather}
          current={this.props.table.current.thickLeather}
        />
        <Item
          pic={'inv_misc_bandage_11.jpg'}
          id={14529}
          total={this.props.table.total.runeclothBandage}
          current={this.props.table.current.runeclothBandage}
        />
        <Item
          pic={'inv_misc_herb_17.jpg'}
          id={8831}
          total={this.props.table.total.purpleLotus}
          current={this.props.table.current.purpleLotus}
        />
        <Item
          pic={'inv_misc_fish_01.jpg'}
          id={6887}
          total={this.props.table.total.spottedYellowtail}
          current={this.props.table.current.spottedYellowtail}
        />
        <hr />
        <Item
          pic={'inv_misc_bandage_15.jpg'}
          id={1251}
          total={this.props.table.total.linenBandage}
          current={this.props.table.current.linenBandage}
        />
        <Item
          pic={'inv_misc_bandage_01.jpg'}
          id={6450}
          total={this.props.table.total.silkBandage}
          current={this.props.table.current.silkBandage}
        />
        <Item
          pic={'inv_misc_fish_27.jpg'}
          id={5095}
          total={this.props.table.total.rainbowFin}
          current={this.props.table.current.rainbowFin}
        />
        <Item
          pic={'inv_misc_food_50.jpg'}
          id={12210}
          total={this.props.table.total.roastRaptor}
          current={this.props.table.current.roastRaptor}
        />
        <Item
          pic={'inv_misc_herb_11.jpg'}
          id={3820}
          total={this.props.table.total.stranglekelp}
          current={this.props.table.current.stranglekelp}
        />
        <Item
          pic={'inv_misc_herb_13.jpg'}
          id={8836}
          total={this.props.table.total.arthasTear}
          current={this.props.table.current.arthasTear}
        />
        <Item
          pic={'inv_ingot_iron.jpg'}
          id={3575}
          total={this.props.table.total.ironBar}
          current={this.props.table.current.ironBar}
        />
        <Item
          pic={'inv_ingot_07.jpg'}
          id={12359}
          total={this.props.table.total.thoriumBar}
          current={this.props.table.current.thoriumBar}
        />
        <Item
          pic={'inv_misc_leatherscrap_03.jpg'}
          id={2318}
          total={this.props.table.total.lightLeather}
          current={this.props.table.current.lightLeather}
        />
        <Item
          pic={'inv_misc_leatherscrap_05.jpg'}
          id={2319}
          total={this.props.table.total.mediumLeather}
          current={this.props.table.current.mediumLeather}
        />
      </Fragment>
    );
  }
}
