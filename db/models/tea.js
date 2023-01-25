const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Country, Comment }) {
      this.belongsTo(Country, {
        foreignKey: 'country_id',
      });
      this.hasMany(Comment, {
        foreignKey: 'tea_id',
      });
    }
  }
  Tea.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    image: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    country_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Countries',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Tea',
  });
  return Tea;
};
