import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
  public searchValue: string | undefined;

  public onTagSearch = new EventEmitter<string>();

  public onInputEntry(input: string): void {
    this.searchValue = input.toString().trim();
    if (this.searchValue.length > 0) {
      this.onTagSearch.emit(this.searchValue);
    }
  }

  public clearSearchValue(): void {
    this.searchValue = undefined;
  }
}
