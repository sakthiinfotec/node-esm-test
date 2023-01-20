/**
 * How to use MJS files in Node.js?
 * https://dev.to/bennycode/how-to-use-mjs-files-in-node-js-23ep
 * Keypoints: Either use '.mjs' or '.js' and type: 'module' in package.json
 */
import { greet } from './greet.js'

const message = greet('Smith');
console.log(message);
