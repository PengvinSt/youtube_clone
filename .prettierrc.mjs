export default {
  tabWidth: 2,
  singleQuote: false,
  trailingComma: "es5",
  printWidth: 120,
  endOfLine: "lf",
  plugins: [
    (await import("prettier-plugin-tailwindcss")).default,
    (await import("@ianvs/prettier-plugin-sort-imports")).default,
  ],
  importOrder: [
    "^react$",
    "^next$",
    "^@mui/(.*)$",
    "^@/hooks$",
    "^@/components/(.*)$",
    "^(@types|@tanstack/react-query$|@schemas|zod|zod-i18n-map)$",
    "^@/lib/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^[.]"
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      options: {
        singleQuote: false,
        jsxSingleQuote: false
      }
    }
  ]
};
