var Sequelize = require("sequelize");

const find = (model, attributes) => {
  return new Promise((resolve) => {
    const sequelize = new Sequelize("sales", "root", "password", {
      host: "127.0.0.1",
      dialect: "mysql",
      port: "3306",
      dialectOptions: {
        supportBigNumbers: true,
        decimalNumbers: true,
      },
    });

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
