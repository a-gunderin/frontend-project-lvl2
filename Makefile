install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .

link:
	npm link

unlink:
	npm rm --global @hexlet/code