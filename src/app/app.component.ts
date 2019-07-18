import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker'
import { DataService } from './service/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
        this.dataService.getProducts().subscribe((data) => {
            console.log("products", data);
            this.Products = data;
        })
    }

    // ngOnInit() {
    //     this.dataService.getProducts().then((data) => {
    //         console.log("products", data);
    //         this.Products = data;
    //     })
    //         .catch((err) => console.log("error", err))
    // }
}
