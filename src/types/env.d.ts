declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    APP_PORT: string;
    DB_USER: string;
    DB_HOST: string;
    DB_NAME: string;
    DB_PORT: string;
    DB_PASSWORD: string;
    SESSION_SECRET: string;
  }
}