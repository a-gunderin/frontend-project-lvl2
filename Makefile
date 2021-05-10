install:
	npm ci
	npm link

publish:
	npm publish --dry-run

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .

uninstall:
	npm rm --global @hexlet/code