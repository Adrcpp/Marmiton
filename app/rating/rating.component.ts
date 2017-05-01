import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, 
		 FormArray, FormBuilder } 	from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'rating',
  template: `
	<div class='crop'>
		<div [title]='rating' *ngFor='let index of range; let i = index'>
			<i (click)='onClick(index)' class="ic material-icons" *ngIf="index <= rating ? star[i]='star' : star[i]='star_border'" > {{ star[i] }}</i>
		</div>
	</div>
  `,
  styles:[`
		.crop {
			overflow: hidden;
		}
		 
		div {
			cursor: pointer;
		}
		.ic{
			float:left;
		} 
  `]
})

export class RatingComponent {

    private range: Array<number> = [1, 2, 3, 4, 5];
    @Input() rating: number;
	@Output() ratingClicked: EventEmitter<any> = new EventEmitter<any>();
	private star : any = [];
 
	onClick(value:number): void {
			this.rating = value;
			this.ratingClicked.emit({
				rating: this.rating
			});
	}
}
