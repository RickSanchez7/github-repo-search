function getRandomWord() {
  const words = ['react', 'angular', 'vue', 'node.js', 'python'];
  return words[Math.floor(Math.random() * words.length)];
}

export { getRandomWord };
