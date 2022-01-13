**NOTE** : `.env` file must be filled with your values.
## Only For Windows Users
```
- Go to your specific project root and find `.graphql-let.yml`
- Replace the env variable `${NEXT_PUBLIC_GRAPHQL_API_ENDPOINT}` in schema field manually
- Provide your API url in the schema field.
- Also change the dev command at `package.json`
- Go to `shop/package.json` file and change the scripts:

"codegen": "node -r dotenv/config $(yarn bin)/graphql-let",
to
"codegen": "graphql-let"
```