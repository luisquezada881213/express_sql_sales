var Sequelize = require("sequelize");

const find = (model, attributes) => {
  return new Promise((resolve) => {
    var sequelize = new Sequelize("mysql://root:password@127.0.0.1:3306/sales");

    var Sales = sequelize.define("sales", model);

    Sales.findAll(attributes)
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

module.exports = find;