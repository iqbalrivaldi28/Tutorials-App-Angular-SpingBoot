import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TutorialsService } from './services/tutorials.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tutorial-app';
  data!: any[];

  constructor(private tutorialService: TutorialsService) {
    this.getAllData();
  }

  getAllData() {
    this.tutorialService
      .getAllTutorial()
      .subscribe((data) => (this.data = data));
  }
}
