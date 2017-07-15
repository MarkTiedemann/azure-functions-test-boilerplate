# azure-functions-test-boilerplate

**Test boilerplate for Azure Functions.**

## Features

- `lint`: Tests the code for common mistakes and stylistic inconsistencies
- `unit`: Unit tests that test whether the specified function does the right thing
  - If necesssary, databases and inter-function calls are mocked
- `i9n`: Integrations tests that test whether the specified function does the right thing in a local Azure Function host
  - If necessary, in-memory databases should be setup locally
- `e2e`: End-to-end tests that test whether the specified function does the right thing in a real Azure test environment
  - The environment should be set-up in such a way that it mirrors a production setup
- `sec`: Security tests by [Node Security](https://nodesecurity.io/) that test whether known vulnerabilities exist in the project dependencies

## Commands

```sh
npm run lint
npm run fmt
npm run unit
npm run i9n
npm run e2e
npm run sec

# run all tests successively
npm test
```

## Todos

- `unit`: db and inter-function call mocking
- `i9n`: db setup and teardown
- `e2e`: environment setup and teardown
- binding tests (?)
- performance tests (?)

## Notes

- Please note that i9n tests are not cross-plattform since the Azure Function Host is only available on Windows systems.

## License

MIT