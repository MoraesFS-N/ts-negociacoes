import { Negociacao } from './index';
import { Imprimivel } from './Imprimivel';
import { Igualavel } from './Igualavel';

export class Negociacoes implements Imprimivel, Igualavel<Negociacoes>{
    
    private _negociacoes: Array<Negociacao> = [];
    
    adiciona(negociacao: Negociacao): void{
        this._negociacoes.push(negociacao);
    }
    
    paraArray(): Array<Negociacao> {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    paraTexto(): void {
        console.log('Impressão');
        console.log(JSON.stringify(this._negociacoes))
    }

    ehIgual(negociacoes: Negociacoes): boolean{
        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.paraTexto());
    }

}