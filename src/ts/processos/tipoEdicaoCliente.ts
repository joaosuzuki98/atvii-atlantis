import Processo from "../abstracoes/processo"
import MenuTipoEdicaoCliente from "../menus/menuTipoEdicaoCliente"
import EditarClienteDependente from "./editarClienteDependente"
import EditarClienteTitular from "./editarClienteTitular"

export default class TipoEdicaoCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoEdicaoCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new EditarClienteTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new EditarClienteDependente()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}