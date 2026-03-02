import { Component, OnInit } from '@angular/core';
import { PostService, Tarea } from './post.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {

  tareas: Tarea[] = [];
  nuevaTarea: string = '';

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.cargarTareas();
  }

  cargarTareas() {
    this.postService.getTareas().subscribe(data => {
      this.tareas = data;
    });
  }

  agregarTarea() {
    if (!this.nuevaTarea.trim()) return;

    const tarea: Tarea = {
      descripcion: this.nuevaTarea
    };

    this.postService.crearTarea(tarea).subscribe(() => {
      this.nuevaTarea = '';
      this.cargarTareas();
    });
  }

  eliminarTarea(id: string) {
    this.postService.eliminarTarea(id).subscribe(() => {
      this.cargarTareas();
    });
  }
}