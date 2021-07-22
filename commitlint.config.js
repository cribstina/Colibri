module.exports = {
  extends: ['@commitlint/config-conventional'], rules: {
      'type-enum': [
          2,
          'always',
          [
              'init',
              'config',
              'docs',
              'feature',
              'add',
              'remove',
              'integration',
              'merge',
              'bugfix',
              'refactor',
              'test'
          ],
      ],
  }
};