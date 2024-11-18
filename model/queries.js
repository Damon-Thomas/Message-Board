const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM all_messages");
  console.log('rows', rows)
  return rows;
}

async function insertMessage(username, message, date) {
    console.log('username', username, 'message', message, 'date', date.toDateString())
    let stringDate = date.toDateString()
    console.log('string date', stringDate)
  await pool.query("INSERT INTO all_messages (username,message,date) VALUES ($1, $2, $3)", [username, message, stringDate]);
}

module.exports = {
    getAllMessages,
    insertMessage
};
