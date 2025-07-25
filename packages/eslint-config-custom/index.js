module.exports = {
	plugins: ['@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'react-app',
		'react-app/jest',
	],

	rules: {
		'@typescript-eslint/no-var-requires': 'warn',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-unused-vars': ['off'],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				useTabs: true,
				semi: true,
				trailingComma: 'all',
				bracketSpacing: true,
				printWidth: 100,
				endOfLine: 'auto',
			},
		],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
