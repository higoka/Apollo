import { Response } from "express";

export interface RCONMessageInterface {
    handle(data: any, response: Response): void;
}