"use strict";
// Como podemos melhorar o esse código usando TS? 
var profissao;
(function (profissao) {
    profissao[profissao["Atriz"] = 0] = "Atriz";
    profissao[profissao["Padeiro"] = 1] = "Padeiro";
})(profissao || (profissao = {}));
;
var pessoa1 = {
    nome: 'maria',
    idade: 29,
    profissao: profissao.Atriz
};
var pessoa2 = {
    nome: 'Roberto',
    idade: 19,
    profissao: profissao.Padeiro
};
var pessoa3 = {
    nome: 'laura',
    idade: 32,
    profissao: profissao.Atriz
};
var pessoa4 = {
    nome: 'carlos',
    idade: 19,
    profissao: profissao.Padeiro
};
