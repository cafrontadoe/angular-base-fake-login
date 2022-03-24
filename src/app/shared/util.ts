import { formatDate } from '@angular/common';
import { NgForm } from '@angular/forms';

// Funciones reutilizables.
export class UtilFunctions {

    
    static getActualDay(): any {
        const date = new Date();
        return {
            year: date.getFullYear(),
            day: date.getDate(),
            month: date.getMonth() + 1
        };
    }

    static getBeforeDay(): any {
        const date = new Date();
        date.setDate(date.getDate() - 1);

        return {
            year: date.getFullYear(),
            day: date.getDate(),
            month: date.getMonth() + 1
        };
    }

    static resetForm(form: NgForm): void {
        form.reset();
        // for (const obj in form.form.controls) {
        //     if (obj) {
        //         form.form.controls[obj].reset();
        //     }
        // }

    }

    static deleteElement(arrayList: any[], index: number): any[] {
        arrayList.splice(index, 1);
        return arrayList;
      }



    static formatiarFechaParaBackend(fechaSinFormato: any): string {
        const d = new Date(fechaSinFormato);
        return  formatDate(d, 'dd/MM/yyyy', 'en-ES');
    }

    
}
