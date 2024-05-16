# Assignment2

## Refactoring process

- Split the code into smaller, more manageable modules based on functionality (e.g., cardano.ts, tron.ts, api.ts). This separation of concerns improves clarity and makes it easier to work on specific parts of the swap process independently.

- Created a custom useSwap hook to encapsulate the core swap logic and state. This promotes reusability, as the hook can be easily imported and used in other components.

- Introduced a useHandleApiError hook to centralize error handling logic. This simplifies the error handling process and makes it more consistent across different parts of the application.

- Created a getApiUrl function in api.ts to dynamically generate API URLs based on configuration. This improves flexibility and avoids hardcoded URLs.

## Reasons behind these changes:

- The code is now more modular, making it easier to understand the individual steps involved in the swap process.

- Changes or fixes can be made to specific parts of the code without affecting unrelated functionality.
  pen_spark

- The custom hooks can be used in other components, reducing code duplication.

- The smaller modules are easier to test independently, leading to more reliable code.

- Introducing TypeScript improves code quality by catching errors during development.

## Refactoring Experience

- The official React documentation is a great reference for best practices and patterns.

- TypeScript's documentation is essential for understanding types and how to use them effectively.

- Several articles and tutorials on refactoring techniques were helpful for generating ideas and approaches.
