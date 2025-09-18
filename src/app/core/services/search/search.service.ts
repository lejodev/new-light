import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchTerm = new BehaviorSubject<string>(''); // This saves the current   serach term
  currentSearchTerm = this.searchTerm.asObservable(); // This is a Subscriber. Any component can "suubscribe" to this value emmitted by the BehaviorSubject

  constructor() { }

  updateSearchTerm(term: string): void {
    this.searchTerm.next(term)
  }
}
