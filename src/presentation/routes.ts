import { Router } from 'express';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    // define your routes here
    router.use('/api/auth')
    router.use('/api/user')
    router.use('/api/clients')
    router.use('/api/orders')

    return router;
  }
}
