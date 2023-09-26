module.exports = (sequelize, Sequelize) => {
    const Phone = sequelize.define("phone", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        num_type: {
            type: Sequelize.STRING


        },

        phone_number: {
            type: Sequelize.STRING,
        }
        // DEFINE YOUR MODEL HERE
    });
  
    return Phone;
};