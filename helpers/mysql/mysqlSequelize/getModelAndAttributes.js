exports.country = {
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
