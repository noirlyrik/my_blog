set -e

npm run docs:build

cd docs/.vuepress/dist

git init 
git add -A 
git commit -m 'deploy'

git push -f git@47.105.187.6:/var/repo/vuepress.git master

cd - 