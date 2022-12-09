require('dotenv').config({ path: '../.env' });

export default () => ({
  jwtSecret: process.env.JWTSECRET,
  YANDEX_CLIENT_ID: process.env.YANDEX_CLIENT_ID,
  YANDEX_CLIENT_SECRET: process.env.YANDEX_CLIENT_SECRET,
  YANDEX_REDIRECT_URI: process.env.YANDEX_REDIRECT_URI,
  port: parseInt(process.env.PORT) || 3000,
  db: {
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  },
});
