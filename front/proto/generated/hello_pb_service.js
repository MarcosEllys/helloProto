// package: helloworld
// file: hello.proto

var hello_pb = require("./hello_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Hello = (function () {
  function Hello() {}
  Hello.serviceName = "helloworld.Hello";
  return Hello;
}());

Hello.SayHello = {
  methodName: "SayHello",
  service: Hello,
  requestStream: false,
  responseStream: false,
  requestType: hello_pb.HelloRequest,
  responseType: hello_pb.HelloResponse
};

Hello.SayRepeatHello = {
  methodName: "SayRepeatHello",
  service: Hello,
  requestStream: false,
  responseStream: true,
  requestType: hello_pb.RepeatHelloRequest,
  responseType: hello_pb.HelloResponse
};

exports.Hello = Hello;

function HelloClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

HelloClient.prototype.sayHello = function sayHello(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Hello.SayHello, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

HelloClient.prototype.sayRepeatHello = function sayRepeatHello(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Hello.SayRepeatHello, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.HelloClient = HelloClient;

