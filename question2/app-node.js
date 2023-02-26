/*  
    Obs: Necessário instalação do NodeJS
    Ao contrário de browsers, que expõem uma função chamada prompt para entrada de dados, o NodeJS não a implementa.
*/

const readline = require("readline");

function generateFibonacciSequence(limit) {
    const sequence = [0, 1];
    let currentIndex = 2;

    while (sequence[currentIndex - 1] + sequence[currentIndex - 2] <= limit) {
        // adiciona a proxima sequencia a soma dos dois numeros anterios
        sequence[currentIndex] = sequence[currentIndex - 1] + sequence[currentIndex - 2];
        currentIndex++;
    }

    if (sequence.includes(limit)) {
        console.log(`${limit} faz parte da sequência Fibonnaci`);
    } else {
        console.log(`${limit} não faz parte da sequência Fibonacci`);
    }

    return sequence;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Entre com um número: ", (number) => {
    const limit = parseInt(number);

    const fibonacciSequence = generateFibonacciSequence(limit);

    console.log(`• Sequência fibonnaci gerada até o limite ${limit}: ${fibonacciSequence}`);

    rl.close();
});
