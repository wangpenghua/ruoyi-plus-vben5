import type { UserConfig } from 'vite';

async function getCommonConfig(): Promise<UserConfig> {
  return {
    build: {
      chunkSizeWarningLimit: 2000,
      reportCompressedSize: false,
      sourcemap: true,
    },
  };
}

export { getCommonConfig };
