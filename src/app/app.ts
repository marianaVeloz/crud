import { Component} from '@angular/core';
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
export class App {

  tareas: Tarea[] = [];
  nuevaTarea: string = '';

  constructor(private postService: PostService) {}

  // Método GET
  verTareas() {
   this.postService.getTareas().subscribe({
      next: (res) => this.tareas = res,
      error: (err) => console.error('Error al obtener tareas:', err)
    });
  }

  // Método POST
  agregarTarea() {
    if (!this.nuevaTarea.trim()) return;

    const tarea: Tarea = {
      descripcion: this.nuevaTarea
    };

    this.postService.crearTarea(tarea).subscribe({
      next: () => {
        this.nuevaTarea = '';
        this.verTareas();
      },
      error: (err) => console.error('Error al crear tarea:', err)
    });
  }


  // Método DELETE
  eliminarTarea(id: string) {
    this.postService.eliminarTarea(id).subscribe(() => {
      this.verTareas();
    });
  }

  // Método PUT
  actualizarTarea(tarea: Tarea) {
    const tareaActualizada: Tarea = {
      descripcion: tarea.descripcion
    };

    this.postService.actualizarTarea(tarea._id!, tareaActualizada)
      .subscribe({
        next: () => this.verTareas(),
        error: (err) => console.error('Error al actualizar tarea:', err)
      });
  }
  test() {
    alert("FUNCIONA");
  }
}
