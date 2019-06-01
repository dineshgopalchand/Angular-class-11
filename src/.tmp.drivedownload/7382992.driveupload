import { ParamsData } from '../helper/param-data';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NotFoundError } from '../errors/not-found-error';
import { BadInputError } from '../errors/bad-input-error';
import { AppError } from '../errors/app-error';
export class DataService {
    constructor(protected url: string, protected http: HttpClient) {

    }
    getAll() {
        return this.http.get(this.url)
            .pipe(catchError(this.errorHandler));
    }

    getAllWithParam(qParams: ParamsData) {
        let param = '?';
        for (const key in qParams) {
            if (qParams.hasOwnProperty(key)) {
                const element = qParams[key];
                param += key + '=' + qParams[key] + '&';
            }
        }
        return this.http.get(this.url + param)
            .pipe(catchError(this.errorHandler));
        // return this.http.get(this.url, { params: qParams });

    }
    create(userData) {
        return this.http.post(this.url, userData)
            .pipe(catchError(this.errorHandler));
    }
    delete(data) {
        return this.http.delete(this.url + data.id)
            .pipe(catchError(this.errorHandler));
    }
    update(data) {
        return this.http.put(this.url + data.id, data)
            .pipe(catchError(this.errorHandler));
    }
    protected errorHandler = (error: Response) => {
        // console.log('inside error', error);
        // console.warn('inside error', error);
        // console.error('inside error', error);
        if (error.status === 404) {
            return throwError(new NotFoundError(error));
        } else
            if (error.status === 400) {
                return throwError(new BadInputError(error));
            }
        return throwError(new AppError(error));
    }

}
