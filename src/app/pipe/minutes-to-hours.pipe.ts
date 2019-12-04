import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'minutesToHours',
    pure: true
})
export class MinutesToHoursPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (value) {
            const hours = Math.floor(value / 60);
            const minutes = value - hours * 60;

            let newValue = hours ? `${hours} hour` : '';
            newValue += hours > 1 ? `s` : '';
            newValue += hours > 0 && minutes > 0 ? ` and ` : '';
            newValue += minutes ? `${minutes} minute` : '';
            newValue += minutes > 1 ? `s` : '';
            value = newValue;
        }
        return value;
    }
}
