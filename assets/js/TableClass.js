export default class Table {
  constructor(csv) {
    this.sumTotal = parseInt(csv['Total']);
    this.copperBar = parseInt(csv['Copper Bar']);
    this.tinBar = parseInt(csv['Tin Bar']);
    this.ironBar = parseInt(csv['Iron Bar']);
    this.thoriumBar = parseInt(csv['Thorium Bar']);
    this.mithrilBar = parseInt(csv['Mithril Bar']);
    this.lightLeather = parseInt(csv['Light Leather']);
    this.mediumLeather = parseInt(csv['Medium Leather']);
    this.heavyLeather = parseInt(csv['Heavy Leather']);
    this.thickLeather = parseInt(csv['Thick Leather']);
    this.ruggedLeather = parseInt(csv['Rugged Leather']);
    this.linenBandage = parseInt(csv['Linen Bandages']);
    this.woolBandage = parseInt(csv['Wool Bandages']);
    this.silkBandage = parseInt(csv['Silk Bandages']);
    this.mageBandage = parseInt(csv['Mageweave Bandages']);
    this.runeclothBandage = parseInt(csv['Runecloth Bandages']);
    this.peacebloom = parseInt(csv['Peacebloom']);
    this.stranglekelp = parseInt(csv['Stranglekelp']);
    this.purpleLotus = parseInt(csv['Purple Lotus']);
    this.firebloom = parseInt(csv['Firebloom']);
    this.arthasTear = parseInt(csv["Arthas' Tears"]);
    this.roastRaptor = parseInt(csv['Roast Raptor']);
    this.leanWolf = parseInt(csv['Lean Wolf Steak']);
    this.rainbowFin = parseInt(csv['Rainbow Fin Albacore']);
    this.spottedYellowtail = parseInt(csv['Spotted Yellowtail']);
    this.bakedSalmon = parseInt(csv['Baked Salmon']);
  }
}
