# Nuxt Template
This is a minimal template for a blank Nuxt project. It includes some opinionated modules and tools to get started quickly.

## What is included❓

### [EsLint Module ✔️](https://eslint.nuxt.com/packages/module)
Nuxt module for linting and formatting your code.

### [Tailwind CSS Module 🎨](https://tailwindcss.nuxtjs.org/)
Nuxt module for Tailwind CSS.

### [Husky 🐶](https://typicode.github.io/husky/)
Hooks for linting commit messages and code pre-commit.

### [Commitlint ⌨️](https://commitlint.js.org/)
Lint commit messages. Configured to follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

## How to use it❓
1. Create a new repo from the template using the [**GitHub CLI**](https://cli.github.com/)
    
   ```zsh
   # change the --public flag to --private if you want a private repo
   gh repo create <new-repo-name> --public --template="hansmaast/nuxt-template"
   ```

   or using `git`

   ```zsh
   # Clone the repository
   git clone https://github.com/hansmaast/nuxt-template.git <new-project-directory>
   
   # Remove the existing .git directory
   cd <new-project-directory>
   rm -rf .git
   
   # Initialize a new Git repository
   git init
   ```

2. Install the dependencies

    ```zsh
    bun install
    ```

3. Start the development server

    ```zsh
    bun run dev
    ```

> [!NOTE]
> ⛳ If you don't have `bun` installed, head over to their [**installation guide**](https://bun.sh/docs/installation).
>
> 🧶 You can also use package managers like `npm`, `pnpm` or `yarn`.
 
