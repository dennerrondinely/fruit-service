import axios from 'axios';
import { Router } from 'express';

const routes = new Router();

routes.get('/fruits', async (req, res) => {
    const resp = await axios.get('https://www.fruityvice.com/api/fruit/all')
    res.json(resp.data);
});

export default routes;
