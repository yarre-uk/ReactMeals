module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        'airbnb-typescript',
        "airbnb/hooks",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": './tsconfig.json'
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/react-in-jsx-scope": 0,
        "react/require-default-props": 0,
        "react/jsx-props-no-spreading": 0,
        "@typescript-eslint/no-use-before-define": 0
    }
}
