module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint'],
    overrides: [
        {
          files: ['*.ts', '*.tsx'], // Your TypeScript files extension
          extends: [
            'plugin:react/recommended',
            'plugin:@typescript-eslint/recommended',
          //   'plugin:@typescript-eslint/recommended-requiring-type-checking',
          ],
          
         rules:  {
          "react/jsx-uses-react": "off",
          "react/react-in-jsx-scope": "off"
        // Overwrite rules specified from the extended configs e.g. 
        // "@typescript-eslint/explicit-function-return-type": "off",
      }}],
    
    
  }