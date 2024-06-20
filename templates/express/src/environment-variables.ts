import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const EnvironmentVariables = {
  BASE_URL: process.env.BASE_URL,
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_KEY: process.env.SUPABASE_KEY,
  SUPABASE_JWT_SECRET: process.env.SUPABASE_JWT_SECRET,
};

export default EnvironmentVariables;
