import { Request, Response } from 'express';
import { SendMessageService } from '../services/sendMessage.service';

class SendMessageController {
  async handle(req: Request, res: Response) {
    try {
      const sendMessage = new SendMessageService();
      const {service, description} = req.body;
      const message = `Falha Reportada - ${service} : ${description}`;
      const result = {service, description, message};
      sendMessage.execute(message);
      console.info('SendMessageController :: handle ',result);
      return res.json(result);

    } catch (err) {
      console.error('SendMessageController :: handle ', err);
      return res.json(err)
    }

  }
}

export default new SendMessageController;