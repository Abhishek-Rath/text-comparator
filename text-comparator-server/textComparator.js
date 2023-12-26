const { diffChars } = require('diff');

const compareTexts = (text1, text2) => {
  const differences = diffChars(text1, text2);
  return differences.map((part) => part.added ? `<mark>${part.value}</mark>` : part.removed ? `<del>${part.value}</del>` : part.value).join('');
};

module.exports = { compareTexts };
