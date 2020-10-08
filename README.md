# algoritmos-javascript

Nesse repositório possui alguns algoritmos simples para algumas questões de lógica. AINDA EM CONSTRUÇÂO...

## Iniciar os algoritmos

Existem duas formas de executar um algoritmo, pelo navegador a ferramenta DevTools, ou pelo [Node.js](https://nodejs.org):

- Para a primeira opção, abra o DevTool com F12, e cole o código na aba console;
- Para a segunda opção, após instalar o Node.js

Na pasta de preferência, clone o projeto utilizando linha de comando:
```shell
$ mkdir <nome da pastar>
$ git clone https://github.com/ThiagoFelipeg3/algoritmos-javascript.git
$ cd <nome da pastar>
$ node <nome do arquivo .js onde esta o altogitmo>
```

## Questões de Lógica
1) Considere a seqüência numérica: 1, 2, 1, 2, 3, 2, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 2,...
Nessa seqüência qual a posição ocupada pelo numero 50 quando este aparecer pela primeira vez?

2) Algoritmo para verificar CPF incorreto:
Depois do nome do arquivo passa os numeros dos CPFs:

```
$ cd <pasta do projeto>
$ node 2_questao.js 123456789 97563682414 22434456464 43115837100 12345754611
```