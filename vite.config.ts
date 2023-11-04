import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
	base: 'https://solomonosato.github.io/fem-static-job-listing/',
  }

  if (command === 'build') {
    config.base = 'https://solomonosato.github.io/fem-static-job-listing/'
  }

  return config
})
