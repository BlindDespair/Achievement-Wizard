import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AccountAchievement, Achievement, CategoryGroup} from '../../../shared/achievements.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-achievements-search-results',
  templateUrl: './achievements-search-results.component.html',
  styleUrls: ['./achievements-search-results.component.scss']
})
export class AchievementsSearchResultsComponent implements OnInit, OnDestroy {

  @Output() searchOpened: EventEmitter<any>;
  @Input() categoryGroups: CategoryGroup[];
  @Input() accountAchievements: AccountAchievement[];
  @Input() searching: Observable<any>;
  searchingSubscription: Subscription;
  searchingRequest: string;
  foundAchievements: Achievement[];

  constructor() {
    this.searchOpened = new EventEmitter();
    this.foundAchievements = [];
  }

  ngOnInit() {
    this.searchOpened.emit();
    this.searchingSubscription = this.searching.subscribe(
      e => {
        this.searchingRequest = e.target.value;
        this.foundAchievements = [];
        return Observable.from(this.categoryGroups)
          .subscribe(
            categoryGroups => {
              return Observable.from(categoryGroups.categories)
                .subscribe(
                  categories => Observable.from(categories.achievements)
                    .filter(achievements => achievements.name.toLocaleLowerCase().indexOf(this.searchingRequest.toLocaleLowerCase()) !== -1 && this.searchingRequest.length > 2)
                    .subscribe(
                      achievement => {
                        if (this.foundAchievements.indexOf(achievement) === -1) {
                          this.foundAchievements.push(achievement);
                        }
                        return console.log(this.foundAchievements);
                      })
                );
            }
          );
      }
    );
  }

  ngOnDestroy() {
    this.searchingSubscription.unsubscribe();
  }
}
