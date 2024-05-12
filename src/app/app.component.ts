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
  id: any;
  title!: string;
  description!: string;
  data!: any[];
  isUpdate: boolean = false;

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

  addClick() {
    this.postData({
      title: this.title,
      description: this.description,
    });
    alert('Berhasil tambah data');
  }

  deleteData(id: string) {
    this.tutorialService.deleteData(id).subscribe({
      next: () => this.getAllData(),
      error: (err) => console.log(err),
    });
  }

  delClick(id: string) {
    alert('Yakin Hapus Data!');
    this.deleteData(id);
  }

  getId(id: string) {
    this.tutorialService.getDataById(id).subscribe({
      next: (data) => {
        (this.id = data),
          (this.title = this.id.title),
          (this.description = this.id.description),
          (this.isUpdate = true);
      },
    });
  }

  updateData() {
    const dataToUpdate = {
      id: this.id.id,
      title: this.title,
      description: this.description,
      published: this.id.published,
    };

    this.tutorialService.updateData(this.id.id, dataToUpdate).subscribe({
      next: () => {
        this.getAllData();
        this.title = '';
        this.description = '';
        this.isUpdate = false;
        alert('Berhasil update Data');
      },
      error: (err) => console.log(err),
    });
  }
}
