import { Request, Response } from 'express';

class ConnectController {
  async handle(req: Request, res: Response) {
    console.info("ConnectTest :: API Connected");
    return res.json({message: "Connected"});
  }
}

export default new ConnectController;

