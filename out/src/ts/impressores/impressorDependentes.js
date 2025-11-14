"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImpressorDependentes {
    constructor(dependentes) {
        this.dependentes = dependentes;
    }
    imprimir() {
        if (this.dependentes.length === 0) {
            return `Dependentes: Nenhum`;
        }
        let impressao = `Dependentes:\n`;
        this.dependentes.forEach((dependente, index) => {
            impressao += `  -> Dependente ${index + 1}:\n`;
            impressao += `     - Nome: ${dependente.Nome}\n`;
            impressao += `     - Nome social: ${dependente.NomeSocial}\n`;
            impressao += `     - Data de nascimento: ${dependente.DataNascimento.toLocaleDateString()}\n`;
            impressao += `     - Data de cadastro: ${dependente.DataCadastro.toLocaleDateString()}\n`;
        });
        return impressao;
    }
}
exports.default = ImpressorDependentes;
