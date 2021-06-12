import * as ws from "ws";

export const NetworkingProvider = [
    {
        provide: 'NETWORKING_CONNECTION',
        useFactory: (server: ws.Server) => {
            var server: ws.Server = new ws.Server({
                host: "127.0.0.1",
                port: 2096
            });
            server.on('connection', function connection(ws, req) {
                ws.onmessage = function(event: ws.MessageEvent) {
                    console.log(event.data);
                }
            });
        }
    }
];
