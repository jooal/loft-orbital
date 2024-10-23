
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "localhost:3000/graphql",
  documents: "src/queries/**/*.graphql",
  generates: {
    "src/generated/graphql.tsx": {
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
