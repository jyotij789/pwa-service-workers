import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker'
import { DataService } from './service/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    Address: any;
    getCall: boolean;
    title = 'sw';
    Products: any = [];
    constructor(updates: SwUpdate, public dataService: DataService) {
        updates.available.subscribe((event) => {
            console.log("event", event)
            updates.activateUpdate().then((activate) => {
                console.log("activate", activate)
                document.location.reload();
            })
        })
    }


    ngOnInit() {
        console.log("AppComponent called");
    }
    getEmployee() {
        this.Products = [];
        this.getCall = true;
        this.dataService.getProducts().subscribe((data) => {
            console.log("products", data);
            if (data.status_code == 200 && data.success == true) {
                this.Products = data.customer_proile;

            }
            else {
                alert("somthing went wrong");
            }
        })
    }
    setEmployee() {
        this.Address = [];
        this.getCall = false;
        let body = {
            "email": "a@gmail.com",
            "pass": "a123",
        };
        this.dataService.setEmployee(body).subscribe((data) => {
            console.log("employee", data)
            if (data.status_code == 200 && data.success == true) {
                this.Address = data.customer_address;
            }
            else {
                alert("somthing went wrong");
            }
        })
    }
}
