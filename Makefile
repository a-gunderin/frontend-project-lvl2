install:
	npm ci
	npm link

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .

uninstall:
	npm rm --global @hexlet/code