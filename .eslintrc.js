module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'no-console': 'warn',

        'indent': ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],

        'import/extensions': [
            'error',
            'ignorePackages',
            {
                'js': 'never',
                'jsx': 'never',
                'ts': 'never',
                'tsx': 'never'
            }
        ],
        'react/jsx-filename-extension': [
            'warn',
            {'extensions': ['.js', '.jsx', '.ts', '.tsx']}
        ],

        'no-use-before-define': ['error', { 'functions': false }],
        'prefer-const': 1,
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'react/prop-types': 0,
        'no-trailing-spaces': ['error', { skipBlankLines: true }],
        'react/jsx-props-no-spreading': 0,

        '@typescript-eslint/interface-name-prefix': [1, 'always']
    },
    settings: {
        'import/resolver': {
            'node': {
                'extensions': ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
};
