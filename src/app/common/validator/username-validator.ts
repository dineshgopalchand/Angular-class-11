import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

export class UsernameValidator {
    static cannotContainsSpace(controlName: AbstractControl): ValidationErrors | null {
        // const errors: any = {};
        console.log('form cannotContainsSpace', controlName.value);
        if ((controlName.value as string).indexOf(' ') !== -1) {
            return { cannotContainsSpace: true };
            // errors.cannotContainsSpace = true;
        }
        return null;
    }
    static checkUsernameOnServer(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        console.log(control.value);
        return new Promise((resolve, reject) => {
            // here somme API operation have to get performed
            // setTimeout is just replica to show the API is going to take 3 sec to get the response
            setTimeout(() => {
                console.log('inside setTimeout');
                if (control.value === 'dinesh123') {
                    resolve({ checkUsernameOnServer: true });
                } else {
                    resolve(null);
                }
            }, 3000);
            // resolve({ checkUsernameOnServer: true });
            // console.log('resolved');
        });
        // return null;
    }



}
