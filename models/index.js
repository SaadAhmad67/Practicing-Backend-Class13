const {Sequelize} = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'saad123',
    database: 'quantum_university',
});


sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully!");
}).catch(err => {
    console.log(err);
});


sequelize.sync({alter: true}).then(()=> {
    console.log("Syncing Successfully");
}).catch(err => {
    console.log(err);
})



module.exports = sequelize;