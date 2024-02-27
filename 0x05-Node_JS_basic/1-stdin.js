process.stdout.write('Welcome to Holberton school, what is your name?\n');

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const input = data.trim();
  if (input) {
    process.stdout.write(`Your name is: ${input}\n`);
    process.exit();
  }
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
