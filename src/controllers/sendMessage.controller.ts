import { Request, Response } from 'express';
import { SendMessage } from '../services/sendMessage.service';

class SendMessageController {
  async handle(req: Request, res: Response) {
    try {
      const sendMessage = new SendMessage();
      const {service, description} = req.body;
      const message = `Falha Reportada - ${service} : ${description}`;
      const result = {service, description, message};
      sendMessage.execute(message);
      console.info('SendMessageController :: handle ',result);
      return res.json({service, description, message});

    } catch (err) {
      console.error('SendMessageController :: handle ', err);
      return res.json(err)
    }

  }
}

export default new SendMessageController;