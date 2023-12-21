import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-appartment',
  templateUrl: './detail-appartment.component.html',
  styleUrls: ['./detail-appartment.component.css']
})
export class DetailAppartmentComponent {
  id!: number;

  constructor(private Act:ActivatedRoute) { }
  ngOnInit(){
this.id=this.Act.snapshot.params['id'];
console.log(this.id);
  }

}
