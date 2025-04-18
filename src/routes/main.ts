import { Request, Response, Router } from 'express';

const route = Router();

route.get('/ping', (req: Request, res: Response) => {
    res.json({
        "pong": true
    })
});

route.get('/hello', (req: Request, res: Response) => {
    res.json({
        "hello": "world"
    })
})

export default route;