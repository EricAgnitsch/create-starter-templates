import cors from 'cors';
import EnvironmentVariables from 'src/environment-variables';

// ** The BASE_URL defined in `.env.local` can be your deployed URL that you'd wish to add to cors. **
// EG: If you own `www.example.com` and host your frontend there, use `https://www.example.com` as your BASE_URL.
const allowedOrigins = [EnvironmentVariables.BASE_URL];

export const corsHandler = cors({
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void
  ) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'), false);
    }
  },
});
