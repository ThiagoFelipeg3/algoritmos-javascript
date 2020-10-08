/**
* 13) Considere a seqüência numérica:
* 1, 2, 1, 2, 3, 2, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 2,...
* Nessa seqüência qual a posição ocupada pelo numero 50 quando este aparecer pela primeira vez?
*/

iterar([]);

function iterar(array, value = 2, numberSearch = 50) {

    for(var i = 1; i <= value; i++) {
        array.push(i);
    }

    tamanhoArray = array.length-2;

    for (var j = tamanhoArray;; j--) {
        if (array[j] <= 1) {
            break;
        }
        array.push(array[j]);
    }

    if (array.includes(numberSearch)) {
        console.table(
            [
                {
                    'Posição': array.indexOf(numberSearch)+1,
                    'Valor encontrado': numberSearch,
                    'Tamanho do Array': array.length
                }
            ],
        );
        return;
    };

    iterar(array, ++value, numberSearch);
}