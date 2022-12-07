const dotenv = require('dotenv');

dotenv.config({ path: '../../.env' });

export default () => ({
  jwtSecret: process.env.JWTSECRET,
  YANDEX_CLIENT_ID: process.env.YANDEX_CLIENT_ID,
  YANDEX_CLIENT_SECRET: process.env.YANDEX_CLIENT_SECRET,
  YANDEX_REDIRECT_URI: process.env.YANDEX_REDIRECT_URI,
  port: parseInt(process.env.PORT) || 3001,
  db: {
    database: process.env.POSTGRES_DB,
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT) || 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  },
});
