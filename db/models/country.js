const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Tea }) {
      this.hasMany(Tea, { foreignKey: 'country_id' });
    }
  }
  Country.init({
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Country',
  });
  return Country;
};
