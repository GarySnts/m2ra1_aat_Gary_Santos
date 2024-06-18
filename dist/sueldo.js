"use strict";
// empleados.ts
class Empleado {
    constructor(salario, bono, comisiones, ahorro, igss, prestamos) {
        this.salario = salario;
        this.bono = bono;
        this.comisiones = comisiones;
        this.ahorro = ahorro;
        this.igss = igss;
        this.prestamos = prestamos;
    }
    calcularTotalGanado() {
        return this.salario + this.bono + this.comisiones;
    }
    calcularTotalDescuento() {
        return this.ahorro + this.igss + this.prestamos;
    }
    calcularSueldoLiquido() {
        return this.calcularTotalGanado() - this.calcularTotalDescuento();
    }
    mostrarResultados() {
        const igssElement = document.getElementById('igss3');
        const verGanadoElement = document.getElementById('verGanado');
        const verDescuentosElement = document.getElementById('verDescuentos');
        const verLiquidoElement = document.getElementById('verLiquido');
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
    static obtenerDatosFormulario(formId) {
        const form = document.getElementById(formId);
        const formData = new FormData(form);
        const datos = {};
        formData.forEach((value, key) => {
            datos[key] = value.toString();
        });
        return datos;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.getElementById('obtenerLiquido')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
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
