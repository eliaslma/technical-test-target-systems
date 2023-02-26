function generateFibonacciSequence(number) {
    let sequence = [0, 1];
    let i = 2;

    while (sequence[i - 1] + sequence[i - 2] <= number) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
        i++;
    }

    if (sequence.includes(number)) {
        console.log(`${number} faz parte da sequência de Fibonacci.`);
    } else {
        console.log(`${number} não faz parte da sequência de Fibonacci.`);
    }

    return sequence;
}

let number = parseInt(prompt("Digite um número:"));

let sequence = generateFibonacciSequence(number);

console.log(`• Sequência fibonnaci gerada até o limite ${number}: ${sequence}`);
