// eslint-disable-next-line no-undef
module.exports = {
  // 继承自 '@commitlint/config-conventional' 配置，遵循常规的提交信息格式
  extends: ['@commitlint/config-conventional'], // extends can be nested
  // 指定解析器预设，用于解析符合 'conventionalcommits' 格式的提交信息
  parserPreset: 'conventional-changelog-conventionalcommits',
  // 配置交互式提交信息提示工具的设置
  prompt: {
    settings: {},
    // 定义提示信息的文案
    messages: {
      skip: ':skip',
      max: 'upper %d chars',
      min: '%d chars at least',
      emptyWarning: 'can not be empty',
      upperLimitWarning: 'over limit',
      lowerLimitWarning: 'below limit'
    },
    // 定义可用的提交类型及其展示信息和表情符号
    types: [
      { value: 'feat', name: 'feat:     ✨  A new feature', emoji: '✨ ' },
      { value: 'fix', name: 'fix:      🐛  A bug fix', emoji: '🐛 ' },
      { value: 'docs', name: 'docs:     📝  Documentation only changes', emoji: '📝 ' },
      {
        value: 'style',
        name: 'style:    💄  Changes that do not affect the meaning of the code',
        emoji: '💄 '
      },
      {
        value: 'refactor',
        name: 'refactor: 📦️   A code change that neither fixes a bug nor adds a feature',
        emoji: '📦️ '
      },
      {
        value: 'perf',
        name: 'perf:     🚀  A code change that improves performance',
        emoji: '🚀 '
      },
      {
        value: 'test',
        name: 'test:     🚨  Adding missing tests or correcting existing tests',
        emoji: '🚨 '
      },
      {
        value: 'build',
        name: 'build:    🛠   Changes that affect the build system or external dependencies',
        emoji: '🛠 '
      },
      {
        value: 'ci',
        name: 'ci:       🎡  Changes to our CI configuration files and scripts',
        emoji: '🎡 '
      },
      {
        value: 'chore',
        name: "chore:    🔨  Other changes that don't modify src or test files",
        emoji: '🔨 '
      },
      { value: 'revert', name: 'revert:   ⏪️  Reverts a previous commit', emoji: ':rewind:' }
    ],
    // 开启使用表情符号
    useEmoji: true,
    // 开启颜色提示
    confirmColorize: true,
    // 表情符号对齐方式
    emojiAlign: 'center',
    // 定义交互式提问的问题
    questions: {
      scope: {
        description: 'What is the scope of this change (e.g. component or file name)'
      },
      subject: {
        description: 'Write a short, imperative tense description of the change'
      },
      body: {
        description: 'Provide a longer description of the change'
      },
      isBreaking: {
        description: 'Are there any breaking changes?'
      },
      breakingBody: {
        description:
          'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself'
      },
      breaking: {
        description: 'Describe the breaking changes'
      },
      isIssueAffected: {
        description: 'Does this change affect any open issues?'
      },
      issuesBody: {
        description:
          'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself'
      },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "re #123".)'
      }
    }
  }
}
