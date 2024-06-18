// empleados.ts
class Empleado {
    private salario: number;
    private bono: number;
    private comisiones: number;
    private ahorro: number;
    private igss: number;
    private prestamos: number;

    constructor(salario: number, bono: number, comisiones: number, ahorro: number, igss: number, prestamos: number) {
        this.salario = salario;
        this.bono = bono;
        this.comisiones = comisiones;
        this.ahorro = ahorro;
        this.igss = igss;
        this.prestamos = prestamos;
    }

    private calcularTotalGanado(): number {
        return this.salario + this.bono + this.comisiones;
    }

    private calcularTotalDescuento(): number {
        return this.ahorro + this.igss + this.prestamos;
    }

    public calcularSueldoLiquido(): number {
        return this.calcularTotalGanado() - this.calcularTotalDescuento();
    }

    public mostrarResultados(): void {
        const igssElement = document.getElementById('igss3') as HTMLTextAreaElement;
        const verGanadoElement = document.getElementById('verGanado') as HTMLTextAreaElement;
        const verDescuentosElement = document.getElementById('verDescuentos') as HTMLTextAreaElement;
        const verLiquidoElement = document.getElementById('verLiquido') as HTMLTextAreaElement;

        // Limpiar los contenidos anteriores
        igssElement.value = '';
        verGanadoElement.value = '';
        verDescuentosElement.value = '';
        verLiquidoElement.value = '';

        igssElement.value = this.igss.toFixed(2);
        verGanadoElement.value = `El total ganado es: Q ${this.calcularTotalGanado().toFixed(2)}`;
        verDescuentosElement.value = `El total de descuento es: Q ${this.calcularTotalDescuento().toFixed(2)}`;
        verLiquidoElement.value = `El total de sueldo líquido es: Q ${this.calcularSueldoLiquido().toFixed(2)}`;
    }
    public static obtenerDatosFormulario(formId: string): { [key: string]: string } {
        const form = document.getElementById(formId) as HTMLFormElement;
        const formData = new FormData(form);
        const datos: { [key: string]: string } = {};
        formData.forEach((value, key) => {
            datos[key] = value.toString();
        });
        return datos;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('obtenerLiquido')?.addEventListener('click', () => {
        const formDatos2 = Empleado.obtenerDatosFormulario('FormEmpleados2');
        const salario = parseFloat(formDatos2['salario']);
        const bono = parseFloat(formDatos2['bonificacion']);
        const comisiones = parseFloat(formDatos2['comisiones']);

        const formDatos3 = Empleado.obtenerDatosFormulario('FormEmpleados3');
        const ahorro = parseFloat(formDatos3['ahorro']);
        const igss = parseFloat(salario * (4.83 / 100));
        const prestamos = parseFloat(formDatos3['prestamos']);

        const empleado = new Empleado(salario, bono, comisiones, ahorro, igss, prestamos);
        empleado.mostrarResultados();
    });
});
