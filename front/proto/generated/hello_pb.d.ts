// package: helloworld
// file: hello.proto

import * as jspb from "google-protobuf";

export class HelloRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloRequest;
  static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
  export type AsObject = {
    name: string,
  }
}

export class RepeatHelloRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepeatHelloRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RepeatHelloRequest): RepeatHelloRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RepeatHelloRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepeatHelloRequest;
  static deserializeBinaryFromReader(message: RepeatHelloRequest, reader: jspb.BinaryReader): RepeatHelloRequest;
}

export namespace RepeatHelloRequest {
  export type AsObject = {
    name: string,
    count: number,
  }
}

export class HelloResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HelloResponse): HelloResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelloResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloResponse;
  static deserializeBinaryFromReader(message: HelloResponse, reader: jspb.BinaryReader): HelloResponse;
}

export namespace HelloResponse {
  export type AsObject = {
    message: string,
  }
}

