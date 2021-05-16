import { Router } from 'express';

import Test from '../services/Test.services';

const testRouter = Router();

testRouter.get('/', (request, response) => {
  const message = new Test();

  return response.json({'message': message.getMessage()});
});

export default testRouter;
