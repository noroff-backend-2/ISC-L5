const bcrypt = require('bcrypt');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        fullName: Sequelize.DataTypes.STRING,
        email: Sequelize.DataTypes.STRING,
        username: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false            
        },
        // password: {
        //     type: Sequelize.DataTypes.STRING,
        //     allowNull: true,
        //     // Hashing the value with an appropriate cryptographic hash function is better.
        //     set(value) {
        //       const hash = bcrypt.hashSync(value, 10);
        //       this.setDataValue('password', hash);
        //     },
        //   },
        role: {
            type: Sequelize.DataTypes.STRING,
            defaultValue: "customer" 
        }
    },  {
        timestamps: false,
        hooks: {
            beforeCreate: async (user) => {
            if (user.password) {
            const salt = await bcrypt.genSaltSync(10, 'a');
            user.password = bcrypt.hashSync(user.password, salt);
            }
            },
            beforeUpdate:async (user) => {
            if (user.password) {
            const salt = await bcrypt.genSaltSync(10, 'a');
            user.password = bcrypt.hashSync(user.password, salt);
            }
            }
        },
        instanceMethods: {
            validPassword: (password) => {
            return bcrypt.compareSync(password, this.password);
            }
        }
        });
        User.prototype.validPassword = async (password, hash) => {
        return await bcrypt.compareSync(password, hash);
        }
      
    User.associate = function(models) {
        User.belongsToMany(models.Product, {through: models.Order})
    };
	return User
}