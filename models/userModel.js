'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

const getAllUsers = async () => {
  try {
    const sql = `SELECT user_id, name, email FROM wop_user`;
    const [rows] = await promisePool.query(sql);
    // console.log(rows);
    return rows;
  } catch (e) {
    console.error('error', e.message);
    throw new Error('sql query failed');
  }
};
const getUserById = async (id) => {
  try {
    const sql = `SELECT user_id, name, email FROM wop_user WHERE user_id = ?`;
    const [rows] = await promisePool.query(sql, [id]);
    // console.log(rows);
    return rows[0];
  } catch (e) {
    console.error('error', e.message);
    throw new Error('sql query failed');
  }
};

// TODO: add sql function for get/:id, put & post queries

// User authentication
const getUserLogin = async (email) => {
  console.log('get user login for', email);
  try {
    const [rows] = await promisePool.execute(
        'SELECT * FROM wop_user WHERE email = ?;',
        [email]);
    console.log('get user login rows', rows);
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserLogin,
};