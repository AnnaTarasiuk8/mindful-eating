import { DiaryEntry } from './../diaryEntry';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DiaryService } from '../diary.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css'],
})
export class DiaryComponent implements OnInit {
  error?: String;

  diaryEntries: DiaryEntry[] = [];

  currentDate: Date = new Date();
  currentDateString = this.currentDate.toLocaleDateString();
  currentDiaryEntry: DiaryEntry = {
    date: "",
    notes: ""
  };

  diaryForm: FormGroup = this.formBuilder.group({
    date: [this.currentDate.toLocaleDateString()],
    notes: [''],
  });
  constructor(
    public formBuilder: FormBuilder,
    public diaryService: DiaryService,
    private router: Router
    ) {}

  ngOnInit(): void {

    this.currentDiaryEntry = {
      date: "",
      notes: ""
    };
    this.getDiaryEntries();
    // console.log(this.diaryEntries);


    this.currentDiaryEntry.date = this.currentDate.toLocaleDateString();
    // this.diaryForm.setValue(
    //   {
    //     date: this.currentDiaryEntry.date,
    //     notes: "testing123"
    //   }
    //   );


  }

  getDiaryEntries(): void {
    this.diaryService.getAll().subscribe((diaryEntries) => {
      console.log("111", diaryEntries)
      this.diaryEntries = diaryEntries;
      this.currentDiaryEntry = diaryEntries[diaryEntries.length-1];
      console.log("2222", this.currentDiaryEntry)
      this.diaryForm.setValue({
        date: this.currentDiaryEntry.date,
        notes: this.currentDiaryEntry.notes
      });
    });
    // console.log(this.diaryEntries);
  }

  submitForm() {
    console.log("Form submitted", this.diaryForm.value);
    this.diaryService.create(this.diaryForm.value).subscribe(
      (diary) => {
        console.log("Diary updated", diary);
        this.getDiaryEntries()
        // this.router.navigateByUrl('/habits');
      },
      (error) => {
        this.error = 'Unable to create the diaryEntry. Please try again.';
      }
    );
  }
}
