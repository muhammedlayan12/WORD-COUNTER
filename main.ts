import inquirer from 'inquirer';

class WordCounter {
    private inputText: string;

    constructor(inputText: string) {
        this.inputText = inputText;
    }

    countWords(): number {
        const words = this.inputText.split(/\s+/);
        const filteredWords = words.filter(word => word !== '');
        return filteredWords.length;
    }
}

async function main() {
    const userInput = await inquirer.prompt({
        type: 'input',
        name: 'text',
        message: 'Enter a sentence to count words:',
    });

    const inputText = userInput.text;
    const wordCounter = new WordCounter(inputText);
    const wordCount = wordCounter.countWords();
    console.log("Word count:", wordCount);
}

main();
