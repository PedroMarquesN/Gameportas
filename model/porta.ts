export default class PortaModel{
    protected numero:number
    protected temPresente:boolean
    protected selecionada:boolean
    protected aberta: boolean

    constructor(numero:number, temPresente= false, selecionada=false, aberta=false)
    {
        this.numero = numero
        this.temPresente = temPresente
        this.selecionada = selecionada
        this.aberta = aberta
    }

    get metodoNumero() {
        return this.numero
    }

    get metodoTemPresente(){
        return this.temPresente
    }

    get metodoSelecionada(){
        return this.selecionada
    }

    get metodoAberta(){
        return this.aberta
    }
    desmarcar(){
        const selecionada = false
        return new PortaModel(this.metodoNumero,this.metodoTemPresente,selecionada, this.metodoAberta)
    }
    alternarSelecao(){
        const selecionada = !this.metodoSelecionada
        return new PortaModel(this.metodoNumero,this.metodoTemPresente,selecionada, this.metodoAberta)
    }
    abrir(){
        const aberta = true
        return new PortaModel(this.metodoNumero,this.metodoTemPresente,this.metodoSelecionada, aberta)
    }

}