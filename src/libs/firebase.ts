import { config } from 'dotenv';


config(); // .envを読み込む

export const firebaseConfig = {
  apiKey: process.env.API_KEY!,
  authDomain: process.env.AUTH_DOMAIN!,
  projectId: process.env.PROJECT_ID!,
  storageBucket: process.env.STORAGE_BUCKET!,
  messagingSenderId: process.env.MESSAGING_SENDER_ID!,
  appId: process.env.APP_ID!,
  measurementId: process.env.MEASUREMENT_ID!,
  clientId: process.env.CLIENT_ID!,
};