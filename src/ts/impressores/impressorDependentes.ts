import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ImpressorDependentes implements Impressor {
    private dependentes: Cliente[];

    constructor(dependentes: Cliente[]) {
        this.dependentes = dependentes;
    }

    imprimir(): string {
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
