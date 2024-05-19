import express, { Router } from 'express';

interface Options {
  port?: number;
  routes: Router;
}

// nuestras clases deben estar abiertas a su extensión pero cerradas a su modificación
export class Server {
  public readonly app = express();
  private readonly port: number;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port = 3100, routes } = options;
    this.port = port;
    this.routes = routes;
  }
  async start() {
    this.app.use(this.routes);
    
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
