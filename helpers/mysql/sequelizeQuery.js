var Sequelize = require("sequelize");

const countries = () => {
  return new Promise((resolve) => {
    var sequelize = new Sequelize("mysql://root:password@127.0.0.1:3306/sales");

    var Sales = sequelize.define("sales", {
      Country: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
    });

    Sales.findAll({
      attributes: [
        [Sequelize.fn("DISTINCT", Sequelize.col("Country")), "Country"],
      ],
    })
      .then(async (sales) => {
        const result = sales.map((e) => e.dataValues);
        resolve({ data: result });
        await sequelize.close();
      })
      .catch(async (error) => {
        resolve({ error: true });
        await sequelize.close();
      });
  });
};

countries().then((response) => {
  console.log(response);
});
