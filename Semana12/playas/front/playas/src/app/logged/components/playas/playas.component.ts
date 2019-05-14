import { Component, OnInit, ViewChild} from '@angular/core';
import { PlayaService } from '../../services/playa.service';
import { MatTableDataSource, MatPaginator, MatSort} from '@angular/material';


const ELEMENT_DATA = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-playas',
  templateUrl: './playas.component.html',
  styleUrls: ['./playas.component.css']
})
export class PlayasComponent implements OnInit {
 

  paginator;
  @ViewChild(MatPaginator) set matSort(content: MatPaginator) {
    this.paginator = content;
    if (this.paginator){
       this.playas.paginator = this.paginator;
    }
  }
  sort;
  @ViewChild(MatSort) set content(content: MatSort) {
    this.sort = content;
    if (this.sort){
       this.playas.sort = this.sort;
    }
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  playas = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _sPlaya:PlayaService) { }

  ngOnInit() {
    
  }

  applyFilter(filterValue: string) {
    this.playas.filter = filterValue.trim().toLowerCase();

    if (this.playas.paginator) {
      this.playas.paginator.firstPage();
    }
  }

}
