import { DiaryEntry } from '../diaryEntry';
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
  success: Boolean = false;
  modalDiaryEntry?: DiaryEntry;

  diaryEntries: DiaryEntry[] = [];

  currentDate: Date = new Date();
  currentDateString = this.currentDate.toLocaleDateString();
  currentDiaryEntry: DiaryEntry = {
    date: '',
    notes: '',
  };
  encodedCurrentDateString = encodeURIComponent(this.currentDateString);

  diaryForm: FormGroup = this.formBuilder.group({
    date: [this.encodedCurrentDateString],
    notes: [''],
  });

  constructor(
    public formBuilder: FormBuilder,
    public diaryService: DiaryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDiary();
    this.getDiaryEntries();
  }

  getDiary(): void {
    this.diaryService.get(this.encodedCurrentDateString).subscribe((diary) => {
      this.diaryForm.setValue({
        date: diary?.date || this.encodedCurrentDateString,
        notes: diary?.notes || '',
      });
    });
  }

  getDiaryEntries(): void {
    this.diaryService.getAll().subscribe((diaries) => {
      if (Array.isArray(diaries)) {
        this.diaryEntries = diaries;
      }
    });
  }

  setModalDiaryEntry(entry?: DiaryEntry): void {
    this.modalDiaryEntry = entry;
  }

  submitForm() {
    this.diaryService.create(this.diaryForm.value).subscribe(
      () => {
        this.getDiaryEntries();
        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 3000);
      },
      (error) => {
        console.error(error);
        this.error = 'Unable to create the diaryEntry. Please try again.';
      }
    );
  }
}
