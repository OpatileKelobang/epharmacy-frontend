import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.listItems();
  }

  listItems() {
    this.itemsService.getItemsList().subscribe(
      (data: any[]) => {
        this.items = data;
      }
    )
  }

}
