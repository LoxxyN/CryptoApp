import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	plugins: [tailwindcss(), react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/'),
			'@constants': path.resolve(__dirname, './constants/'),
			'@hooks': path.resolve(__dirname, './hooks/'),
			'@utils': path.resolve(__dirname, './utils/'),
			'@config': path.resolve(__dirname, './config/'),
		},
	},
})
