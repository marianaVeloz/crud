import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../put-item/api.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-item',
  standalone: true,   // 👈 MUY IMPORTANTE
  imports: [CommonModule, ReactiveFormsModule],  // 👈 AQUÍ se importa
  templateUrl: './put-item.html',
  styleUrls: ['./put-item.css']
})
export class EditItemComponent implements OnInit {

  editForm: FormGroup;
  itemId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['']
    });
  }

  ngOnInit(): void {
    this.itemId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.itemId) {
      this.apiService.getItemById(this.itemId).subscribe(data => {
        this.editForm.patchValue(data);
      });
    }
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      this.apiService.updateItem(this.itemId, this.editForm.value).subscribe({
        next: () => {
          alert('Registro actualizado correctamente');
          this.router.navigate(['/lista']);
        },
        error: (err) => console.error(err)
      });
    }
  }
}
