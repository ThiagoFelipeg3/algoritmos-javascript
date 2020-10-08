console.table(
    process.argv.map((val, index) => {
        if (index > 1) {
            return {
                'CPF': val,
                'Valido': validaCpf(val)
            };
        }
    }).filter(Boolean)
);


function validaCpf(cpf) {
    cpf = tirarMascaraCpf(cpf);

    if (cpf.length != 11) {
        return false;
    }

    if (!temNumerosDiferentes(cpf)) {
        return false;
    }

    return validandoDigitosCpf(cpf);
}

function validandoDigitosCpf(cpf) {
    const [PRIMEIRO_DIGITO, SEGUNDO_DIGITO] = cpf.substring(9).split('');

    primeiroDigitoVerificador = calcularDigitoVerificador(
        cpf.substring(0,9),
        10
    );
    if (primeiroDigitoVerificador != PRIMEIRO_DIGITO) {
        return false;
    }

    segundoDigitoVerificador = calcularDigitoVerificador(
        cpf.substring(0,10),
        11
    );
    if (segundoDigitoVerificador != SEGUNDO_DIGITO) {
        return false;
    }

    return true;
}

function calcularDigitoVerificador(valores, multiplicador) {
    soma = valores.split('').reduce(
        (acumulador, valorAtual) => acumulador + valorAtual * multiplicador--,
        0
    );

    return soma % 11 < 2 ? 0 : 11 - soma % 11;
}

function temNumerosDiferentes(cpf) {

    for (i = 0; i < cpf.length - 1; i++) {
        if (cpf.charAt(i) != cpf.charAt(i + 1)) {
            return true;
        }
    }
    return false;
}

function tirarMascaraCpf(cpf) {
    return cpf.replace(/[^\d]+/g,'');
}