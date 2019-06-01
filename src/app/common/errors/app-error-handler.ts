import { ErrorHandler } from '@angular/core';
import { AppError } from './app-error';
import { environment } from 'src/environments/environment.prod';

export class AppErrorHandler implements ErrorHandler {
    handleError(error: AppError) {
        // do something with the exception
        //   alert(error);
        if (environment.production) {
            console.log(error);
        }

    }
}
