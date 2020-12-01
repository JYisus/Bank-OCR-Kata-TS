module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
      },
    testEnvironment: 'node',
    testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.tsx?$'
};