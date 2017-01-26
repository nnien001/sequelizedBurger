module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("sequelizedBurgers", {
    burgerName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type:DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  return Burgers;
};

