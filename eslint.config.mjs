import {dirname} from "path"
import {fileURLToPath} from "url"
import {FlatCompat} from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        rules: {
            "indent": ["error", 4],
            "semi": ["error", "never"],
            "prefer-const": "error",
            "no-var": "error",
            "@typescript-eslint/consistent-type-definitions": ["error", "type"],
            "object-curly-spacing": ["error", "never"],
            "react/jsx-max-props-per-line": ["error", {"maximum": 1}],
            "react/jsx-closing-bracket-location": ["error", "line-aligned"]
        }
    }
]

export default eslintConfig

