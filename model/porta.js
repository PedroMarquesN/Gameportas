export default class Porta{
    #numero
    #temPresente
    #selecionada
    #aberta

    constructor(numero, temPresente= false, selecionada=false, aberta=false)
    {
        this.#numero = numero
        this.#temPresente = temPresente
        this.#selecionada = selecionada
        this.#aberta = aberta
    }

    get metodoNumero() {
        return this.#numero
    }

    get metodoTemPresente(){
        return this.#temPresente
    }

    get metodoSelecionada(){
        return this.#selecionada
    }

    get metodoAberta(){
        return this.#aberta
    }
    desmarcar(){
        const selecionada = false
        return new Porta(this.metodoNumero,this.metodoTemPresente,selecionada, this.metodoAberta)
    }
    alternarSeleção(){
        const selecionada = !this.metodoSelecionada
        return new Porta(this.metodoNumero,this.metodoTemPresente,selecionada, this.metodoAberta)
    }
    abrir(){
        const aberta = true
        return new Porta(this.metodoNumero,this.metodoTemPresente,this.metodoSelecionada, aberta)
    }

}