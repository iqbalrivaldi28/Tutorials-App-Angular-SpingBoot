import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TutorialsService } from './services/tutorials.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title!: string;
  description!: string;
  data!: any[];

  constructor(private tutorialService: TutorialsService) {
    this.getAllData();
  }

  getAllData() {
    this.tutorialService
      .getAllTutorial()
      .subscribe((data) => (this.data = data));
  }

  postData(body: any) {
    this.tutorialService.postData(body).subscribe({
      next: () => {
        this.getAllData(), (this.title = '');
        this.description = '';
      },
      error: (err) => console.log(err),
    });
  }

  addData() {
    this.postData({
      title: this.title,
      description: this.description,
    });
    alert('Berhasil tambah data');
  }
}
