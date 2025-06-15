HASH=$(git subtree split --prefix dist HEAD)
git push origin ${HASH}:refs/heads/gh-pages --force