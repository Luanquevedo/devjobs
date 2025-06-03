import { Component , EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  searchText: string = '';
  searchLocation: string = '';
  searchModel: boolean = false;

  @Output() onSearch = new EventEmitter <{ title:string; employer:string; location: string; model: boolean;}>

  search() {
    const filters = {
      title: this.searchText.trim().toLowerCase(),
      employer: this.searchText.trim().toLowerCase(),
      location: this.searchLocation.trim().toLowerCase(),
      model: this.searchModel
    }

    this.onSearch.emit(filters);
  }
}
