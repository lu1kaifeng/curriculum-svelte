import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import copy from "rollup-plugin-copy";
import dev from 'rollup-plugin-dev'
import autoPreprocess from 'svelte-preprocess'
import { scss } from 'svelte-preprocess'

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		copy({
			targets: [
				{ src: ['theme/font/*'], dest: 'public/build/font' }
			]
		}),
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			emitCss: true,
			preprocess: autoPreprocess({
				scss: { includePaths: ['src', 'node_modules'] },
				babel: {
					presets: [
						[
							'@babel/preset-env',
							{
								loose: true,
								// No need for babel to resolve modules
								modules: false,
								targets: {
									// ! Very important. Target es6+
									esmodules: true,
								},
							},
						],
					],
				}
			})
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		postcss({
			extract: true,
			minimize: true,
			use: [
				['sass', {
					includePaths: [
						'./theme',
						'./node_modules'
					]
				}]
			]
		}),
		// In dev mode, call `npm run start` once
		// the bundle has been generated
		//!production && serve(),
		!production && dev({
			dirs:['public'],
			proxy: {
				'/api/*': 'http://127.0.0.1:2233/',
				'/dash/*':'http://10.0.0.233/',
				'/vid/':['http://10.0.0.233:8899/',{limit: '1024mb'}]
			}
		}),
		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};

function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
				started = true;

				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				});
			}
		}
	};
}
