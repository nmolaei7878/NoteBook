y# Testing Js With Vitest

# General
- test runner: is tool that will run the test code, execute and display result.
- assertion library: to define expected outcome, check that expection met.
- AAA Pattern
 - Arrange: define testing environment & values.
 - Act: run the function that should be test.
 - Assert: compare output value with your expectations.

## Vitest
- 'vitest --globals' is to use functions like (to) or (expect) without importing them.
- vitest support inline testing.
- you can define your test files both with.spec or .test .
- you can see more detail about test with '--reporter verbose' flag.
- run your test once with '--run' flag.
- enter watch mode with just 'vitest' flag.

## Unit Test





Writing test for a function that will run other functions or a function in side it self commonly called integration test, because the value of those fns are matter for the curren function,

You. Should and can test for errors


toEqual() will make a deep comparison (check properties and values)
toBe() will just make a shallow comparison (check for pointer refrence)
