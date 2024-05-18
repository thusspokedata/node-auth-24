import express from 'express';

interface Options {
  port?: number;
}

// nuestras clases deben estar abiertas a su extensión pero cerradas a su modificación
export class Server {
  public readonly app = express();
  private readonly port: number;
  constructor(options: Options) {
    const { port = 3100 } = options;
    this.port = port;
  }
  async start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
