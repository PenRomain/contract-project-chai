const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Tea, User }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Tea, { foreignKey: 'tea_id' });
    }
  }
  Comment.init({
    text: {
      type: DataTypes.TEXT,
    },
    tea_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Teas',
        key: 'id',
      },
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: 'Users',
      key: 'id',
    },
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
