import eslintConfigPrettier from 'eslint-config-prettier';
import coreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...coreWebVitals,
  ...nextTypescript,
  /** Prettier와 겹치는 ESLint 스타일 규칙 비활성화 — 포맷은 Prettier에 맡김 */
  eslintConfigPrettier,
];

export default eslintConfig;
