import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('node', 'MasterPro27', 'JDVaathi$42', {
  host: 'localhost',
  dialect: 'mysql'
});

const dbFunction = () => {
  return sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    return true;
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    return false;
  });
};

export { sequelize, dbFunction };
