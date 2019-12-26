const bcrypt = require('bcryptjs')


// eslint-disable-next-line no-unused-vars
function hashPassword(user, options) {
    const SALT_FACTOR = 8
    var salt = bcrypt.genSaltSync(SALT_FACTOR);
    var hash = bcrypt.hashSync(user.password, salt);

    if (!user.changed('password')) {
        return;
    }

    return user.setDataValue('password', hash)
}
// make model
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    }, {
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
            beforeSave: hashPassword
        }
    })

    // compare password user login
    User.prototype.comparePassword = function (password) {
        return bcrypt.compareSync(password, this.password)
    }

    return User
}