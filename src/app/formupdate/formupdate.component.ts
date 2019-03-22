import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formupdate',
  templateUrl: './formupdate.component.html',
  styleUrls: ['./formupdate.component.css']
})
export class FormupdateComponent implements OnInit {

  flight: FormGroup;
  flightdata: any = { first_name: '', last_name: '', place_flight: '', date_flight: '' };
  constructor(
    private rest: RestService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.flightdata = data;
    });
  }

  updateProduct() {
    this.rest.updateProduct(this.route.snapshot.params['id'], this.flightdata).subscribe((result) => {
      this.router.navigate(['/list/']);
    }, (err) => {
      console.log(err);
    });
  }

}
