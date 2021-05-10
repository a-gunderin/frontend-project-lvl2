# Gendiff - generator of difference
[![Actions Status](https://github.com/a-gunderin/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/a-gunderin/frontend-project-lvl2/actions)
[![ESLint + Testing](https://github.com/a-gunderin/frontend-project-lvl2/actions/workflows/linting-testing.yml/badge.svg)](https://github.com/a-gunderin/frontend-project-lvl2/actions/workflows/linter.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/03f3aac295ca599f1c70/maintainability)](https://codeclimate.com/github/a-gunderin/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/03f3aac295ca599f1c70/test_coverage)](https://codeclimate.com/github/a-gunderin/frontend-project-lvl2/test_coverage)

Gendiff (generator of difference) is program that determines the difference between two data structures. 

Utility features:

* Support for different input formats: yaml, json
* Generating of report in plain text, stylish and json format

## Requirements

I am developing this program using v14.14.0 of Node.
If you face with some issue while using other version of node just try to use v14.14.0.

## Setup for Linux / macOS systems

```sh
$ make install
```

## Setup for Windows

```sh
$ npm ci
...
$ npm link
```

## Get help information on Linux / macOS

```sh
$ gendiff -h
```

## Get help information on Windows

```sh
$ ../frontend-project-lvl2> node ./bin/gendiff -h
```

### Compare two files on Linux / macOS

```sh
$ gendiff pathToFile1.json pathToFile2.json
```

### Compare two files on Windows

```sh
$ ../frontend-project-lvl2> node ./bin/gendiff pathToFile1.json pathToFile2.json
```
