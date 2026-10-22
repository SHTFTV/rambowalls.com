import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import react from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite';

export default defineConfig(({command})=>({
  resolve:{tsconfigPaths:true,dedupe:['react','react-dom']},
  plugins:[tailwindcss(),tanstackStart({server:{entry:'server'}}),...(command==='build'?[nitro({preset:'vercel'})]:[]),react()],
}));
