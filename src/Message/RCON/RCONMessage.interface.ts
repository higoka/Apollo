import * as http from "http";

export interface RCONMessageInterface {
    handle(data: any, response: http.ServerResponse): void;
}