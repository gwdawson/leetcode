# Commands

```zsh
# Installs all the dependencies required for this repository.
$ yarn install

# Executes scripts based on the provided arguments.
# If no number is provided, it runs playground.ts.
# If a number is provided, it runs src/{number}/index.ts.
$ yarn start <optional [number]>

# This command is executed automatically before a commit is made to the repository.
# It triggers lint-staged, which is responsible for running specific tasks on the staged files.
$ yarn pre-commit
```
