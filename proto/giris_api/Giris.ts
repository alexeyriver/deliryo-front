// Original file: proto/PhoneCheckRequest.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CheckPhoneRequest as _giris_api_CheckPhoneRequest, CheckPhoneRequest__Output as _giris_api_CheckPhoneRequest__Output } from '../giris_api/CheckPhoneRequest';
import type { StatusResponse as _giris_api_StatusResponse, StatusResponse__Output as _giris_api_StatusResponse__Output } from '../giris_api/StatusResponse';

export interface GirisClient extends grpc.Client {
  CheckPhone(argument: _giris_api_CheckPhoneRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_giris_api_StatusResponse__Output>): grpc.ClientUnaryCall;
  CheckPhone(argument: _giris_api_CheckPhoneRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_giris_api_StatusResponse__Output>): grpc.ClientUnaryCall;
  CheckPhone(argument: _giris_api_CheckPhoneRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_giris_api_StatusResponse__Output>): grpc.ClientUnaryCall;
  CheckPhone(argument: _giris_api_CheckPhoneRequest, callback: grpc.requestCallback<_giris_api_StatusResponse__Output>): grpc.ClientUnaryCall;
  checkPhone(argument: _giris_api_CheckPhoneRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_giris_api_StatusResponse__Output>): grpc.ClientUnaryCall;
  checkPhone(argument: _giris_api_CheckPhoneRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_giris_api_StatusResponse__Output>): grpc.ClientUnaryCall;
  checkPhone(argument: _giris_api_CheckPhoneRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_giris_api_StatusResponse__Output>): grpc.ClientUnaryCall;
  checkPhone(argument: _giris_api_CheckPhoneRequest, callback: grpc.requestCallback<_giris_api_StatusResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface GirisHandlers extends grpc.UntypedServiceImplementation {
  CheckPhone: grpc.handleUnaryCall<_giris_api_CheckPhoneRequest__Output, _giris_api_StatusResponse>;
  
}

export interface GirisDefinition extends grpc.ServiceDefinition {
  CheckPhone: MethodDefinition<_giris_api_CheckPhoneRequest, _giris_api_StatusResponse, _giris_api_CheckPhoneRequest__Output, _giris_api_StatusResponse__Output>
}
