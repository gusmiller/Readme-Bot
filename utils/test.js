const packagename = [
    {
        type: 'input',
        name: 'productname',
        message: 'What is the name of your package?',
        validate(value) {
            if (value.length == 0) {
                return chalk.red('You must enter a product name! Press Ctrl-C to cancel');
            }
            return true;
        }
    }
]