import { Request, Response } from 'express'

export class Controller {
    constructor(){}

    getSomething = async (req: Request, res: Response) => {
        try {
            res.status(200).json({
                result: true,
                msg: 'You can GET something now!!'
            })
        } catch (e) {
            res.status(500).json({
                result: false,
                msg: e.toString()
            })
        }
    }

    login = async (req: Request, res: Response) => {
        try{
            console.log(req.body)
            if (!req.body.username || !req.body.password) {
                res.status(401).json({
                    result: false,
                    msg: 'Wrong Username or Password',
                });
                return;
            }
            const { username, password } = req.body;
            res.status(200).json({
                username: username,
                password: password
            })
        } catch (e) {
            console.log(e);
            res.status(500).json({
                result: false,
                msg: toString(),
            }) 
        }
    }
}