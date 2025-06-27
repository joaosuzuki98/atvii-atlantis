import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import verificaCliente from "../utils/verificaCliente";
import EditarDocumentoCliente from "./editarDocumentosCliente";

export default class EditarClienteTitular extends Processo {
    processar(): void {
        console.log('Editando cliente...')

        let doc = this.entrada.receberTexto('Digite o número de qualquer documento cadastrado:')
        let armazem = Armazem.InstanciaUnica
        let titular = verificaCliente(armazem.Clientes, doc)

        if (!titular) {
            console.log('Titular não encontrado')
            return 
        }        
        console.log('Deixe em branco caso não queira mudar')
        let nome = this.entrada.receberTexto('Qual o novo nome do cliente?')
        let nomeSocial = this.entrada.receberTexto('Qual o novo nome social do cliente?')
        let dataNascimento = this.entrada.receberData('Qual a nova data de nascimento do cliente?')

        if (nome) titular.Nome = nome
        if (nomeSocial) titular.NomeSocial = nomeSocial
        if (dataNascimento) titular.DataNascimento = dataNascimento

        let editarDoc = this.entrada.receberTexto('Deseja editar algum documento? (s/n)').toLowerCase()
        if (editarDoc === 's') {
            let editarDocumento = new EditarDocumentoCliente(titular)
            editarDocumento.processar()
        }

        console.log('Finalizando o cadastro do cliente...')
    }
}