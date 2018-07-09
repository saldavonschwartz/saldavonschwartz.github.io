git co master
git co 0xfede _site
cp -r _site/*
rm -rf _site
git add .
git commit -m 'merge 0xfede branch'
git push
