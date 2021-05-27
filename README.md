# Gendiff - generator of difference
[![Actions Status](https://github.com/a-gunderin/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/a-gunderin/frontend-project-lvl2/actions)
[![ESLint + Testing](https://github.com/a-gunderin/frontend-project-lvl2/actions/workflows/linting-testing.yml/badge.svg)](https://github.com/a-gunderin/frontend-project-lvl2/actions/workflows/linting-testing.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/03f3aac295ca599f1c70/maintainability)](https://codeclimate.com/github/a-gunderin/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/03f3aac295ca599f1c70/test_coverage)](https://codeclimate.com/github/a-gunderin/frontend-project-lvl2/test_coverage)

Gendiff (generator of difference) is program that determines the difference between two data structures. 

Utility features:

* Support for different input formats: yaml, json
* Generating of report in plain text, stylish and json format

## Requirements

I've developed this program using v14.14.0 of Node.

If you face with some issues while using other versions of node just try to use v14.14.0.

## For Linux / macOS systems

To install the program just run inside cloned folder
```sh
$ make install
```

Uninstall program
```sh
$ make uninstall
```

Get help information
```sh
$ gendiff -h
```

Compare two files
```sh
$ gendiff pathToFile1.json pathToFile2.json
```

Compare two files using other formats
```sh
$ gendiff -f plain pathToFile1.json pathToFile2.json
```
```sh
$ gendiff -f json pathToFile1.json pathToFile2.json
```

Run tests
```sh
$ make test
```

## For Windows PCs

To install the program just run inside cloned folder
```sh
$ npm ci
...
$ npm link
```

Run tests
```sh
$ npm run win-test
```

All other actions are the same as for Linux / MacOS systems.