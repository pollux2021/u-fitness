import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const envs = loadEnv(mode, process.cwd())
  const BASE_URL = envs.VITE_BASE_URL
  const ASSETS_DIR = envs.VITE_ASSETS_DIR // 静态文件目录

  return defineConfig({
    server: {
      proxy: {
        '/api': BASE_URL
      }
    },
    build: {
      cssCodeSplit: false,
      outDir: 'dist',
      assetsDir: ASSETS_DIR
    },
    resolve: {
      alias: [{ find: '@', replacement: '/src' }]
    },
    plugins: [react()],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `@import "${resolve(
            __dirname,
            'src/styles/variables.less'
          )}";`
        }
      }
    }
  })
}
