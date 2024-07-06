// src/app/pages/gestion-pool/gestion-pool.component.ts
import { Component, OnInit } from '@angular/core';
//import { PoolService } from 'src/app/services/pool.service';
//import { Pool } from 'src/app/models/pool';

@Component({
  selector: 'app-gestion-pool',
  templateUrl: './gestion-pool.component.html',
  styleUrls: ['./gestion-pool.component.scss']
})
export class GestionPoolComponent implements OnInit {
  // pools: Pool[] = [];
  // pool: Pool = { id: null, type: '', temp: 0, capacity: false };
  isEdit = false;

  constructor() {}

  ngOnInit(): void {
    this.getPools();
  }

  getPools(): void {
    // this.poolService.getPools().subscribe((data: Pool[]) => {
    //   this.pools = data;
    // });
  }

  onSubmit(): void {
    // if (this.isEdit) {
    //   this.poolService.updatePool(this.pool).subscribe(() => {
    //     this.getPools();
    //     this.resetForm();
    //   });
    // } else {
    //   this.poolService.addPool(this.pool).subscribe(() => {
    //     this.getPools();
    //     this.resetForm();
    //   });
    // }
  }

  editPool(/*pool: Pool*/): void {
    //this.pool = { ...pool };
    this.isEdit = true;
  }

  deletePool(id: number): void {
    // this.poolService.deletePool(id).subscribe(() => {
    //   this.getPools();
    // });
  }

  resetForm(): void {
    //this.pool = { id: null, type: '', temp: 0, capacity: false };
    this.isEdit = false;
  }
}
