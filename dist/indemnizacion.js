"use strict";
// indemnizacion.ts
class Empleado2 {
    constructor(sueldo, años, salarioPendiente, deudas) {
        this.sueldo = sueldo;
        this.años = años;
        this.salarioPendiente = salarioPendiente;
        this.deudas = deudas;
        this.bono14 = this.calcularBono14();
        this.aguinaldo = this.calcularAguinaldo();
        this.calIndemnizacion = this.calcularIndemnizacion();
    }
    calcularBono14() {
        return (this.sueldo / 12) * (this.años * 12);
    }
    calcularAguinaldo() {
        return (this.sueldo / 12) * (this.años * 12);
    }
    calcularIndemnizacion() {
        return ((this.sueldo * this.años) + this.bono14 + this.aguinaldo + this.salarioPendiente) - this.deudas;
    }
    mostrarResultados() {
        document.getElementById('bono14').value = this.bono14.toFixed(2);
        document.getElementById('aguinaldo').value = this.aguinaldo.toFixed(2);
        document.getElementById('verIndemnizacion').innerHTML = `La Indemnización es de: Q ${this.calIndemnizacion.toFixed(2)}`;
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
    (_a = document.getElementById('obtenerIndemnizacion')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        const formDatos3 = Empleado2.obtenerDatosFormulario('FormIndemnizacion');
        const sueldo = parseFloat(formDatos3['sueldo']);
        const años = parseFloat(formDatos3['añosTrabajados']);
        const salarioPendiente = parseFloat(formDatos3['salarioPendiente']);
        const deudas = parseFloat(formDatos3['deudasPendientes']);
        const empleado2 = new Empleado2(sueldo, años, salarioPendiente, deudas);
        empleado2.mostrarResultados();
    });
});
