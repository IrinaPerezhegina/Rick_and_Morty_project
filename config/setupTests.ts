import '@testing-library/jest-dom';
import { TextDecoder, TextEncoder } from 'node:util';
import 'whatwg-fetch';

Object.defineProperties(globalThis, {
  TextDecoder: { value: TextDecoder, writable: true },
  TextEncoder: { value: TextEncoder, writable: true }
});
