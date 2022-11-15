import * as protoLoader from '@grpc/proto-loader';
import * as grpc from '@grpc/grpc-js';
import path from 'path';
import { ProtoGrpcType } from '../../proto/PhoneCheckRequest';

const PROTO_FILE = '../../proto/PhoneCheckRequest.proto';

const packageDef = protoLoader.loadSync(
    path.resolve(path.resolve(), PROTO_FILE),
);

const grpcObj = grpc.loadPackageDefinition(packageDef) as unknown as ProtoGrpcType;

const client = new grpcObj.giris_api.Giris(
    '195.2.85.103:8082',
    grpc.credentials.createInsecure(),
);

const girisPackage = grpcObj.giris_api;

function getServer() {
    const server = new grpc.Server();
    server.addService(girisPackage.Giris.service, {
        CheckPhone: (req: any, res: any) => {
            console.log(req, res);
        },
    });
    return server;
}

function main() {
    const server = getServer();
    server.bindAsync(
        '195.2.85.103:8082',
        grpc.ServerCredentials.createInsecure(),
        (err, res):void => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(res);
            server.start();
        },
    );
}

export function checkPhone() {
    client.CheckPhone({ phoneNumber: '666' }, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(res);
    });
}
