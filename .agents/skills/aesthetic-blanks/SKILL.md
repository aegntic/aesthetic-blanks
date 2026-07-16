```markdown
#aesthetic-blanks Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the `aesthetic-blanks` TypeScript repository. You'll learn how to structure files, write and organize code, follow commit conventions, and implement and test features in a consistent, maintainable way. This guide is ideal for contributors seeking to align with the project's established practices.

## Coding Conventions

### File Naming
- **Pattern:** PascalCase
- **Example:**  
  - `UserProfile.ts`
  - `DataFetcher.ts`

### Import Style
- **Pattern:** Alias imports are used for modules.
- **Example:**
  ```typescript
  import { fetchData } from 'utils/DataFetcher';
  ```

### Export Style
- **Pattern:** Mixed (both named and default exports may be used)
- **Example:**
  ```typescript
  // Named export
  export function calculateScore() { ... }

  // Default export
  export default class UserProfile { ... }
  ```

### Commit Messages
- **Pattern:** Conventional commits
- **Prefix:** `feat`
- **Average Length:** ~50 characters
- **Example:**
  ```
  feat: add user profile component
  ```

## Workflows

_No automated workflows detected in this repository._

## Testing Patterns

- **Framework:** Unknown (not detected)
- **Test File Pattern:** `*.test.*`
- **Example:**
  - `UserProfile.test.ts`
  - `DataFetcher.test.ts`

- **General Structure:**
  ```typescript
  // Example test file
  import { calculateScore } from './ScoreCalculator';

  describe('calculateScore', () => {
    it('returns correct score for valid input', () => {
      expect(calculateScore([1, 2, 3])).toBe(6);
    });
  });
  ```

## Commands

| Command    | Purpose                                   |
|------------|-------------------------------------------|
| /test      | Run all test files matching *.test.*      |
| /commit    | Make a conventional commit (feat: ...)    |
| /new-file  | Create a new PascalCase TypeScript file   |
| /import    | Add an alias import to a file             |

```