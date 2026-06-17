function greet(name) {
  return `Hello, ${name}! 👋 This came from the package.`;
}

function greetFormal(name) {
  return `Good day, ${name}. — v1.2.0`;
}

module.exports = { greet, greetFormal };