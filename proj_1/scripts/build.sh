npm run babel
npm run browserify
cat css/*/* css/*.css | sed 's/..\/..\/images/images/g' > bundle.css