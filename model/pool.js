const { Pool } = require("pg");
require('dotenv').config()

module.exports = new Pool({
  connectionString: 'postgres:LIjpltdFfOVPCKUFSqnnvoeXRtieTBee@autorack.proxy.rlwy.net:59205/railway'

  
});
