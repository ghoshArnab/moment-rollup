import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
var babel = require("rollup-plugin-babel");

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		dir: 'public',
		format: 'esm', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: false
	},
	plugins: [
		resolve(), // tells Rollup how to find date-fns in node_modules
		babel(),
		commonjs(), // converts date-fns to ES modules
		production && terser() // minify, but only in production
	]
};
