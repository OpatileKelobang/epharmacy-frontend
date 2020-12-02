import { Component, OnInit } from '@angular/core';
import { PharmacyService } from 'src/app/services/pharmacy.service';

@Component({
  selector: 'app-pharmacy-list',
  templateUrl: './pharmacy-list.component.html',
  styleUrls: ['./pharmacy-list.component.css']
})
export class PharmacyListComponent implements OnInit {

  pharmacies = [];

  constructor(private pharmacyService: PharmacyService) { }

  ngOnInit(): void {
    this.listPharmacies();
  }

  listPharmacies() {
    this.pharmacyService.getPharmacyList().subscribe(
      (data: any[]) => {
        this.pharmacies = data;
      }
    )
  }

}
