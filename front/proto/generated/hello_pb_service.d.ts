// package: helloworld
// file: hello.proto

import * as hello_pb from "./hello_pb";
import {grpc} from "@improbable-eng/grpc-web";

type HelloSayHello = {
  readonly methodName: string;
  readonly service: typeof Hello;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hello_pb.HelloRequest;
  readonly responseType: typeof hello_pb.HelloResponse;
};

type HelloSayRepeatHello = {
  readonly methodName: string;
  readonly service: typeof Hello;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof hello_pb.RepeatHelloRequest;
  readonly responseType: typeof hello_pb.HelloResponse;
};

export class Hello {
  static readonly serviceName: string;
  static readonly SayHello: HelloSayHello;
  static readonly SayRepeatHello: HelloSayRepeatHello;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class HelloClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  sayHello(
    requestMessage: hello_pb.HelloRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hello_pb.HelloResponse|null) => void
  ): UnaryResponse;
  sayHello(
    requestMessage: hello_pb.HelloRequest,
    callback: (error: ServiceError|null, responseMessage: hello_pb.HelloResponse|null) => void
  ): UnaryResponse;
  sayRepeatHello(requestMessage: hello_pb.RepeatHelloRequest, metadata?: grpc.Metadata): ResponseStream<hello_pb.HelloResponse>;
}

