#!/usr/bin/env bash
# Ship the current directory as a new public repo, deployed to GitHub Pages
# via .github/workflows/deploy.yml. Run from a duplicated idea-bootstrap copy.
set -euo pipefail
name="${1:?usage: ./ship.sh <repo-name>}"

npm ci
npm run build
npm test

git init -q
git add -A
git commit -qm "landing page: $name"

gh repo create "$name" --public --source=. --push
gh api -X POST "repos/{owner}/$name/pages" -f build_type=workflow >/dev/null

login=$(gh api user -q .login | tr '[:upper:]' '[:lower:]')
echo "building… https://${login}.github.io/${name}/"
