module.exports = {
  extends: [
    "universe",
    "universe/shared/typescript-analysis",
    "universe/native",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
};
