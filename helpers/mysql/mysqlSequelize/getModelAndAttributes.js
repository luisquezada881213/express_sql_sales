var Sequelize = require("sequelize");

exports.countries = {
  model: {
    Country: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
  },

  attributes: {
    attributes: [
      [Sequelize.fn("DISTINCT", Sequelize.col("Country")), "Country"],
    ],
  },
};

exports.regions = {
  model: {
    Region: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
  },

  attributes: {
    attributes: [
      [Sequelize.fn("DISTINCT", Sequelize.col("Region")), "Region"],
    ],
  },
};

exports.item_types = {
  model: {
    Item_Type: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
  },

  attributes: {
    attributes: [
      [Sequelize.fn("DISTINCT", Sequelize.col("Item_Type")), "Item_Type"],
    ],
  },
};
