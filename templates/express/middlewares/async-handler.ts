import { NextFunction, Request, Response } from 'express';

// Async handling middleware -- add to endpoints to add async handling. Look at `authenticate.ts` for an example.
export const asyncHandler =
  (fn) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
