import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { GirisClient as _giris_api_GirisClient, GirisDefinition as _giris_api_GirisDefinition } from './giris_api/Giris';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  giris_api: {
    CheckPhoneRequest: MessageTypeDefinition
    CheckStatus: EnumTypeDefinition
    Giris: SubtypeConstructor<typeof grpc.Client, _giris_api_GirisClient> & { service: _giris_api_GirisDefinition }
    StatusResponse: MessageTypeDefinition
  }
}

