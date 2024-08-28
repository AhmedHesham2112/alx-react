// src/setupTests.js

import { TextEncoder, TextDecoder } from "util";
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Polyfill for ReadableStream
if (typeof ReadableStream === "undefined") {
  const { ReadableStream } = require("stream/web");
  global.ReadableStream = ReadableStream;
}
