import { NextFunction, Request, Response } from "express";

export default function (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) {
    // console.error(err.stack);
    console.log("err", err.message ?? "Something Went Wrong");
    res.status(500).send(err.message ?? "Something Went Wrong");
}
