import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/core/services/search/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchControl = new FormControl('');

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {

    this.searchControl.valueChanges.subscribe(value => {
      console.log(value);
      this.searchService.updateSearchTerm(value || '');
    });
  }


}
