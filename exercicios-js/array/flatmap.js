const escola = [{
    nome: 'Turma m1',
    alunos: [{
        nome:'Gustavo',
        nota: 8.1
    }, {
        nome:'Ana',
        nota: 9.3
    }]
}, {
    nome:'Turma m2',
    alunos: [{
        nome:'Rebeca',
        nota: 8.9
    },{
        nome:'Roberto',
        nota: 7.3
    }]
}]

const getnotadoaluno = aluno => aluno.nota
const getnotasdaturma = turma => turma.alunos.map(getnotadoaluno)

const notas1 = escola.map(getnotasdaturma)
console.log(notas1) 

console.log([]. concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getnotasdaturma)
console.log(notas2)