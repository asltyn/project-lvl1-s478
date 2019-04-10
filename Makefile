install: 
	sudo npm install

start:
	sudo npx babel-node src/bin/brain-games.js

publish:
	npm publish

lint:
	node_modules/.bin/eslint

lint:
	npx eslint .
