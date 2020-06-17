module.exports = (database, orm) => {
  return database.define("orders", {
    id: {
      type: orm.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: orm.STRING,
      require: true,
      allowNull: false,
      validate: { notEmpty: true },
    },
  });
};