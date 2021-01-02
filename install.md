1. Add the core-utils package
```bash
pnpm install @nx-plugins/i18n-core-utils
```
2. Add the react-package
```bash
pnpm install @nx-plugins/i18n-react
pnpm install @nx-plugins/i18n-react-data-access
pnpm install @nx-plugins/i18n-react-ui
pnpm install @nx-plugins/i18n-react-utils

```

3. Add the extractor builder
```
pnpm install @nx-plugins/i18n-extract
```

4. Select a project to start extract
```json
"extract": {
          "executor": "@nx-plugins/i18n:build",
          "options": {
            "framework": "react",
            "directory": "apps/i18n-blog",
            "locales": ["en"]
          }
        }
```

5. Install himalaya

```bash
pnpm install himalaya
```