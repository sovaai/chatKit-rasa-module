import typescript from '@wessberg/rollup-plugin-ts'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import dotenv from 'dotenv'
dotenv.config()
const { RASA_URL } = process.env
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    replace({
      process: JSON.stringify({
        env: {
         RASA_URL
        },
      }),
    }),
    peerDepsExternal(),
    resolve(),
    typescript(),
    commonjs(),
  ],
}
