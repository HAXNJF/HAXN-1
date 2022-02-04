const iof = 4.46167510330169;
const iofEmPorcentagem = iof / 100;
const taxasParaCalculo = {
    500: {porcentagem: 0.5, valorEstatico: 0},
    1000: {porcentagem: 0.4, valorEstatico: 50},
    5000: {porcentagem: 0.3, valorEstatico: 150},
    10000: {porcentagem: 0.2, valorEstatico: 650},
    15000: {porcentagem: 0.15, valorEstatico: 1150},
    20000: {porcentagem: 0.1, valorEstatico: 1900},
}
const taxaPadrao = {porcentagem: 0.05, valorEstatico: 2900}
const listaChavesParaCalculo = [500, 1000, 5000, 10000, 15000, 20000]
const diasDoAno = 365;
import Finance from 'financejs'


const finance = new Finance();


class simuladorFGTS {


    constructor(taxaMensal) {
        this.taxaMensal = taxaMensal / 100;
        this.taxaAnual = Math.pow((this.taxaMensal + 1), 12) - 1
        this.taxaDiaria = Math.pow((this.taxaAnual + 1), (1 / diasDoAno)) - 1

    }

    _encontraChaveParaCalculo(valorParaCalculo) {
        return listaChavesParaCalculo.find((valor) => {
            return valorParaCalculo <= valor
        })
    }

    _encontraTaxa(valor) {
        let taxaRetorno = taxaPadrao
        const chaveParaCalculo = this._encontraChaveParaCalculo(valor)
        if (chaveParaCalculo) taxaRetorno = taxasParaCalculo[chaveParaCalculo]
        return taxaRetorno
    }


    /*
        FluxoCaixa é um array contendo em dias o valor sacado, se nao houver
        saque naquele dia, entao ele será considerado 0
     */
    calcular({valorDesejado, diferencaEmDiasDoAniversario, numeroSaques}) {
        const fluxoCaixa = this._criaFluxoCaixa({
            diferencaEmDiasDoAniversario: this.ajustarDiferencaEmDias(diferencaEmDiasDoAniversario),
            valorDesejado,
            numeroSaques
        })
        let valorLiquidoPresente = finance.NPV((this.taxaDiaria * 100), ...fluxoCaixa);
        valorLiquidoPresente = this._descontaIOF(valorLiquidoPresente);
        return valorLiquidoPresente;
    }

    ajustarDiferencaEmDias(diferencaEmDiasDoAniversario) {
        if (diferencaEmDiasDoAniversario < 0) return diasDoAno + diferencaEmDiasDoAniversario;
        return diferencaEmDiasDoAniversario
    }

    _criaFluxoCaixa({diferencaEmDiasDoAniversario, valorDesejado, numeroSaques}) {
        let fluxoCaixa = Array(diferencaEmDiasDoAniversario).fill(0)
        let saldoRestante = valorDesejado
        let taxaParaCalculo;
        let valorPorSaque;
        for (let i = 0; i < numeroSaques; i++) {
            taxaParaCalculo = this._encontraTaxa(saldoRestante)
            valorPorSaque = saldoRestante * taxaParaCalculo.porcentagem + taxaParaCalculo.valorEstatico;
            saldoRestante -= valorPorSaque
            fluxoCaixa.push(Math.round(valorPorSaque * 100) / 100)
            fluxoCaixa = this._adicionaDiasSemFluxoDoAno({fluxoCaixa})
        }
        //this._removeUltimaSequenciaDeDias(fluxoCaixa, numeroSaques, diferencaEmDiasDoAniversario)
        return fluxoCaixa
    }


    _adicionaDiasSemFluxoDoAno({fluxoCaixa}) {
        const emptyArray = Array(diasDoAno - 1).fill(0)
        fluxoCaixa = fluxoCaixa.concat(emptyArray)
        return fluxoCaixa;
    }

    _removeUltimaSequenciaDeDias(fluxoCaixa, numeroSaques, diferencaEmDiasDoAniversario) {
        fluxoCaixa.splice(((numeroSaques - 1) * diasDoAno) + diferencaEmDiasDoAniversario, fluxoCaixa.length)
    }


    _descontaIOF(valor) {
        return valor * (1 - iofEmPorcentagem)
    }
}


export default simuladorFGTS
