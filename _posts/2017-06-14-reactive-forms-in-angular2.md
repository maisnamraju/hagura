---
layout: post
title:  "Reactive forms in Angular Part 1"
date:   2017-07-14 11:34:56 +0530
---

Reactive forms are a new approach to handling forms in angular. They offer a more event driven approach to forms. It provides the ability to control data by using a mix of a template and an model; it also allows you to follow the reactive programming patterns ( not forced upon) you.


#### Importing
```
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ...,
    ReactiveFormsModule
  ],
  declarations: [...],
  bootstrap: [...]
})
export class AppModule {}

```

#### Form Data Structure
The Data inside the form will have the following 

```
	{
		name: string,
		courses: [{
			id: string,
			name:string
		},...],
		address: {
			address1: string,
			address2: string
		}
	}
```

#### FormGroup, FormArray and FormControl
These three elements are the fundamental parts of the reactive form module. This is how the above data structure would look like once coded into a reactive form.

```
	FormGroup 
		FormControl
		FormArray
				FormGroup
					FormControl
		FormGroup
			FormControl
			FormControl
```
At the lowest level what we have is the FormControl which translates to a single property or  input on the form; The FormControl can be inserted into FormArrays and FormGroups depending on the necessity. Finally, the entire stack of FormControl, FormGroups and FormArrays need to be enclosed inside a FormGroup which completes the form. 

The data inside the form can be rewritten into a FormGroup with the configuration below. 

```
const form = new FormGroup({
	name: new FormControl('',Validators.required),
	courses: new FormArray([new FormGroup({
		id: new FormControl('', Validators.required),
		name: new FormControl('',Validators.required)
	})]),
	address: new FormGroup({
		address1: new FormControl(''),
		address2: new FormControl('')
	})
})
```

#### FormBuilder

The above code can be shortened by using the FormBuilder which shortens our code. 

```
const form = this.fb.group({
	name: ['',Validators.required],
	courses: this.fb.array([
				this.fb.group({
					id: ['',Validators.required],
					name: ['', Validators.required]
				})
			]),
	address: this.fb.group({
		address1: [''],
		address2: ['']
	})		
})
```

(Validators are a bunch of methods that you attach to your FormControls to validate your input [You could read more about them over here ](https://angular.io/api/forms/Validators)) You can chain a number of validators in your code. 

```
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
    selector: 'form-component',
    template: './form.component.html'
})

export class FormComponent implements OnInit {
	public form: FormGroup;
	
	constructor(
		private fb: FormBuilder
	){
	}
	
	get course() {
		return this.fb.group({
							id: ['',Validators.required],
							name: ['', Validators.required]
						});
	}
	
	ngOnInit() {
		this.form = this.fb.group({
			name: ['',Validators.required],
			courses: this.fb.array([
						this.course()
					]),
			address: this.fb.group({
				address1: [''],
				address2: ['']
			})		
		});
	}
	
	submit(data) {
	
	
	}
}

```
And our actual template file 

```
	<form novalidate (ngSubmit)="submit(form.valid)" [formGroup]="form">
		 <input formControlName="name" type="text" />
        <span *ngIf="form.get('name').hasError('required') && form.get('name').touched">Enter Name </span>
        <div formArrayName="courses">
	        <div *ngFor="course of courses; index as i " formGroupName="{{i}}">
	        		<div>
	        			<input formControlName="id" type="text" />
		    			<span class="error" *ngIf="!course?.required">Please enter the course id</span>
					</div>
	    		   <div>
	        			<input formControlName="name" type="text" />
	        			<span class="error" *ngIf="!course?.required">Please enter the course name</span>
	        		</div>
	        		<div>
	        			<button (click)="add" [disabled]="course.invalid"></button>
	        		</div>
	        </div>
	     </div>
	     <div formGroup="address">
	     		<input formControlName="address1" type="text" />
				<input formControlName="address2" type="text" />
	     </div>
	</form>
```
[(continued in part 2)](http://blog.maisnamraju.com/2017/07/14/reactive-forms-in-angular2.html)
