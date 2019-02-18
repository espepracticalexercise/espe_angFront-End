import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RestService } from "../rest.service";

@Component({
  selector: "app-formflight",
  templateUrl: "./formflight.component.html",
  styleUrls: ["./formflight.component.css"]
})
export class FormflightComponent implements OnInit {
  flight: FormGroup ;

  constructor(
    private rest: RestService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.flight = this.formBuilder.group({
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      place_flight: ["", Validators.required],
      date_flight: ["", Validators.required]
    });
  }
  get f() {
    return this.flight.controls;
  }
  addProduct() {
    this.rest.addProduct(this.flight.value).subscribe(
      result => {
        this.router.navigate(["/home"]);
      },
      err => {
        console.log(this.flight);
        console.log(err);
      }
    );
  }
}
