#!/bin/bash

yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=proto/ proto/*.proto

protoc -I=./proto/PhoneCheckRequest.proto echo.proto  --js_out=import_style=commonjs:./test/  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./test

protoc-gen-grpc --js_out=import_style=commonjs,binary:./proto --grpc_out=grpc_js:./proto --proto_path ./proto/ ./proto/PhoneCheckRequest.proto

protoc -I=. ./proto/*.proto --js-out=import_style=commonjs:./test/ --grcp-web_out=import_style=typescript,mode=grpcwebtext:./test/
