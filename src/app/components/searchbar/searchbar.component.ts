import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IPicture } from 'src/app/interfaces/IPicture';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
  @Input()
  public images: IPicture[] | undefined;

  @Output()
  public onTagSearch = new EventEmitter<string>();

  public searchValue: string | undefined;

  public onInputEntry(input: string): void {
    this.searchValue = input.toString().trim();
    if (this.searchValue.length > 0) {
      this.onTagSearch.emit(this.searchValue);
    } else {
      this.onTagSearch.emit('empty-search');
    }
  }

  public clearSearchValue(): void {
    this.onTagSearch.emit('empty-search');
    this.searchValue = undefined;
  }
}
