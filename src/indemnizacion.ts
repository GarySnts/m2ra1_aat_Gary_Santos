// indemnizacion.ts
class Empleado2 {
    private sueldo: number;
    private años: number;
    private salarioPendiente: number;
    private deudas: number;
    private bono14: number;
    private aguinaldo: number;
    private calIndemnizacion: number;

    constructor(sueldo: number, años: number, salarioPendiente: number, deudas: number) {
        this.sueldo = sueldo;
        this.años = años;
        this.salarioPendiente = salarioPendiente;
        this.deudas = deudas;
        this.bono14 = this.calcularBono14();
        this.aguinaldo = this.calcularAguinaldo();
        this.calIndemnizacion = this.calcularIndemnizacion();
    }

    private calcularBono14(): number {
        return (this.sueldo / 12) * (this.años * 12);
    }

    private calcularAguinaldo(): number {
        return (this.sueldo / 12) * (this.años * 12);
    }

    private calcularIndemnizacion(): number {
        return ((this.sueldo * this.años) + this.bono14 + this.aguinaldo + this.salarioPendiente) - this.deudas;
    }

    public mostrarResultados(): void {
        (document.getElementById('bono14') as HTMLTextAreaElement).value = this.bono14.toFixed(2);
        (document.getElementById('aguinaldo') as HTMLTextAreaElement).value = this.aguinaldo.toFixed(2);
        (document.getElementById('verIndemnizacion') as HTMLTextAreaElement).innerHTML = `La Indemnización es de: Q ${this.calIndemnizacion.toFixed(2)}`;
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
    document.getElementById('obtenerIndemnizacion')?.addEventListener('click', () => {
        const formDatos3 = Empleado2.obtenerDatosFormulario('FormIndemnizacion');
        const sueldo = parseFloat(formDatos3['sueldo']);
        const años = parseFloat(formDatos3['añosTrabajados']);
        const salarioPendiente = parseFloat(formDatos3['salarioPendiente']);
        const deudas = parseFloat(formDatos3['deudasPendientes']);

        const empleado2 = new Empleado2(sueldo, años, salarioPendiente, deudas);
        empleado2.mostrarResultados();
    });
});
