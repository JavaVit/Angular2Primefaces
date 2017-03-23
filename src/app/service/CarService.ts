import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Car} from "../domain/Car";
import 'rxjs/add/operator/toPromise';
/**
 * Created by Vitaliy on 21.03.2017.
 */
@Injectable()
export class CarService {

    constructor(private http: Http) {
    }

    getCarsSmall() {
        return this.http.get('app/data/cars-small.json')
            .toPromise()
            .then(res => <Car[]> res.json().data)
            .then(data => {
                return data;
            });
    }
}
