// Original file: proto/PhoneCheckRequest.proto

import type { CheckStatus as _giris_api_CheckStatus } from '../giris_api/CheckStatus';

export interface StatusResponse {
  'checkStatus'?: (_giris_api_CheckStatus | keyof typeof _giris_api_CheckStatus);
}

export interface StatusResponse__Output {
  'checkStatus'?: (_giris_api_CheckStatus);
}
