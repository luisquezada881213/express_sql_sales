var Sequelize = require("sequelize");

exports.countries = () => {
  return {
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
};

exports.regions = () => {
  return {
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
};

exports.item_types = () => {
  return {
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
};

exports.totals_by_country = (country) => {
  return {
    model: {
      Country: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      Units_Sold: {
        type: Sequelize.INTEGER,
      },
      Total_Cost: {
        type: Sequelize.DECIMAL,
      },
      Total_Revenue: {
        type: Sequelize.DECIMAL,
      },
      Total_Profit: {
        type: Sequelize.DECIMAL,
      },
    },

    attributes: {
      attributes: [
        "Country",
        [Sequelize.fn("SUM", Sequelize.col("Units_Sold")), "Units_Sold"],
        [Sequelize.fn("SUM", Sequelize.col("Total_Cost")), "Total_Cost"],
        [Sequelize.fn("SUM", Sequelize.col("Total_Revenue")), "Total_Revenue"],
        [Sequelize.fn("SUM", Sequelize.col("Total_Profit")), "Total_Profit"],
      ],
      group: ["Country"],
      where: { Country: country },
    },
  };
};

exports.totals_by_region = (region) => {
  return {
    model: {
      Country: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      Units_Sold: {
        type: Sequelize.INTEGER,
      },
      Total_Cost: {
        type: Sequelize.DECIMAL,
      },
      Total_Revenue: {
        type: Sequelize.DECIMAL,
      },
      Total_Profit: {
        type: Sequelize.DECIMAL,
      },
    },

    attributes: {
      attributes: [
        "Region",
        [Sequelize.fn("SUM", Sequelize.col("Units_Sold")), "Units_Sold"],
        [Sequelize.fn("SUM", Sequelize.col("Total_Cost")), "Total_Cost"],
        [Sequelize.fn("SUM", Sequelize.col("Total_Revenue")), "Total_Revenue"],
        [Sequelize.fn("SUM", Sequelize.col("Total_Profit")), "Total_Profit"],
      ],
      group: ["Region"],
      where: { Region: region },
    },
  };
};

exports.item_type_by_country = (country) => {
  return {
    model: {
      Item_Type: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      Units_Sold: {
        type: Sequelize.INTEGER,
      },
      Units_Sold: {
        type: Sequelize.INTEGER,
      },
      Total_Cost: {
        type: Sequelize.DECIMAL,
      },
      Total_Revenue: {
        type: Sequelize.DECIMAL,
      },
      Total_Profit: {
        type: Sequelize.DECIMAL,
      }
    },

    attributes: {
      attributes: [
        "Item_Type",
        [Sequelize.fn("SUM", Sequelize.col("Units_Sold")), "Units_Sold"],
        [Sequelize.fn("SUM", Sequelize.col("Total_Cost")), "Total_Cost"],
        [Sequelize.fn("SUM", Sequelize.col("Total_Revenue")), "Total_Revenue"],
        [Sequelize.fn("SUM", Sequelize.col("Total_Profit")), "Total_Profit"],
      ],
      group: ["Item_Type"],
      where: { Country: country },
    },
  };
};

exports.item_type_by_region = (region) => {
  return {
    model: {
      Item_Type: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      Units_Sold: {
        type: Sequelize.INTEGER,
      },
      Units_Sold: {
        type: Sequelize.INTEGER,
      },
      Total_Cost: {
        type: Sequelize.DECIMAL,
      },
      Total_Revenue: {
        type: Sequelize.DECIMAL,
      },
      Total_Profit: {
        type: Sequelize.DECIMAL,
      }
    },

    attributes: {
      attributes: [
        "Item_Type",
        [Sequelize.fn("SUM", Sequelize.col("Units_Sold")), "Units_Sold"],
        [Sequelize.fn("SUM", Sequelize.col("Total_Cost")), "Total_Cost"],
        [Sequelize.fn("SUM", Sequelize.col("Total_Revenue")), "Total_Revenue"],
        [Sequelize.fn("SUM", Sequelize.col("Total_Profit")), "Total_Profit"],
      ],
      group: ["Item_Type"],
      where: { Region: region },
    },
  };
};