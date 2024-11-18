#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE all_messages (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, username VARCHAR ( 255 ), message VARCHAR ( 255 ), date VARCHAR ( 255 ));

INSERT INTO all_messages (username, message, date) 
VALUES
  ('Joel', 'woah does this thing really work?', '${(new Date()).toDateString()}'),
  ('Ellie', 'ya I guess it does', '${(new Date()).toDateString()}'),
  ('Abby', 'that is acually crazy i did not think it would', '${(new Date()).toDateString()}');
`;


async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: 'postgres:LIjpltdFfOVPCKUFSqnnvoeXRtieTBee@autorack.proxy.rlwy.net:59205/railway'
    
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
