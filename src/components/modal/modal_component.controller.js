import AbstractController from "$services/abstract-controller_service.services";
import SimuladorFGTS from "$business/simuladorFGTS"

const simuladorFGTS = new SimuladorFGTS(1.99);

class modalComponentController extends AbstractController {

    constructor(scope) {
        super(scope)
        this.numeroSaques = 5
    }

    changeActive() {
        if (this.scope.buttonActive == true) {
            this.scope.buttonActive = false;
            this.scope.simuleRealize = false;
        } else {
            this.scope.buttonActive = true;
        }
    }

    simular({valorDesejado, diferencaEmDiasDoAniversario, numeroSaques}) {
        this.numeroSaques = numeroSaques || this.numeroSaques;
        this.scope.simuleRealize = true;
        this.scope.valorDisponivel = simuladorFGTS.calcular({
            valorDesejado,
            diferencaEmDiasDoAniversario,
            numeroSaques: this.numeroSaques
        })
    }

}


export default modalComponentController
