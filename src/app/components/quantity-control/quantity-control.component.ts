
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'quantity-control',
		styleUrls: ["quantity-control-component.css"],
	templateUrl: 'quantity-control-component.html'
})
export class QuantityControlComponent implements OnInit {
    @Input() quantity: number;
    @Output() onChange = new EventEmitter<number>();
    constructor() { }

    ngOnInit() { }
    plusOne = () =>{
        if (this.quantity < 1000){
            this.quantity++;
            this.onChange.emit(this.quantity);
        }
    };
    minusOne = () => {
        if (this.quantity > 1){
            this.quantity--;
            this.onChange.emit(this.quantity);
        }
    }
}
