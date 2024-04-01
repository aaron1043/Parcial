function sumaCuadros(arrayNumeros) {
    let sum = 0;
    let dashes = '';
    let numbers = '';

    for (let num of arrayNumeros) {
        sum += num;
        dashes += '-'.repeat(num.toString().length) + ' + ';
        numbers += `| ${num} ` + `| `;
    }

    console.log(`+ ${dashes}`);
    console.log(numbers);
    console.log(`+ ${'='.repeat(sum.toString().length)} +`);
    console.log(`| ${sum} |`);
    console.log(`+ ${'='.repeat(sum.toString().length)} +`);
}

const arrayNumeros = [1, 23, 453, 3267, 12354, 123456];
sumaCuadros(arrayNumeros);
