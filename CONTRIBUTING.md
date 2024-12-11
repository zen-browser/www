# Zen Browser Website

Thank you for wanting to contribute to Zen Browser Website. We are thrilled to welcome you to our community. Before you start, please read this document to understand how you can contribute to this project.

## How to Contribute

1. Fork the Zen Browser Website repository.
2. Clone the Zen Browser Website repository to your local machine.

```bash
git clone git@github.com:<YOUR_GITHUB_USERNAME>/www.git # SSH
git clone https://github.com/<YOUR_GITHUB_USERNAME>/www.git # HTTPS
gh repo clone <YOUR_GITHUB_USERNAME>/www # GitHub CLI
```

3. Change directory to the cloned repository.

```bash
cd www
```

4. Create a branch for your contribution.

```bash
git checkout -b <BRANCH_NAME>
```

5. Start the development environment.

```bash
npm install # or your favorite package manager
npm run dev
```

6. Make your changes.

7. Once you're done, commit your changes.

```bash
git add .
git commit -m "Your commit message"
```

> [!NOTE]
> Please follow the commit guidelines described below.

## Commit Guidelines

This project follows the [Conventional Commits][] specification.

Commits must be signed. You can learn more about [Commit Signing][] here.

### Commit Message Guidelines

- Commit messages must include a "type" as described in Conventional Commits
- Commit messages **must** start with a capital letter
- Commit messages **must not** end with a period `.`
- Commit messages **must** be in English _sorry for the constraint_

[Conventional Commits]: https://www.conventionalcommits.org/
[Commit Signing]: https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits
