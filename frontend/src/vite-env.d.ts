/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BACKEND_HOST: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}