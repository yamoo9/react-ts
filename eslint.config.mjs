import globals from 'globals'
import prettier from 'eslint-config-prettier'
import pluginReact from 'eslint-plugin-react'
import * as reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import { globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  globalIgnores(['dist']),

  // JS/TSX 파일 규칙
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // typescript-eslint 추천 규칙
  tseslint.configs.recommended,

  // React, jsx-a11y, react-hooks 등 Flat 구성
  pluginReact.configs.flat['jsx-runtime'],
  jsxA11y.flatConfigs.recommended,
  reactHooks.configs['recommended-latest'],

  // Prettier 비활성화
  prettier,

  // 사용자 정의 규칙
  {
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
)
