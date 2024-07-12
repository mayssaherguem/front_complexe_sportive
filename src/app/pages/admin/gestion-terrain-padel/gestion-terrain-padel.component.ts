import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { GetFromBackendService } from 'src/app/services/getFromBackend.service';

@Component({
  selector: 'app-gestion-terrain-padel',
  templateUrl: './gestion-terrain-padel.component.html',
  styleUrls: ['./gestion-terrain-padel.component.scss']
})
export class GestionTerrainPadelComponent implements OnInit {

  constructor(private fromBack : GetFromBackendService) { }

  ngOnInit(): void {
    this.getPaddel()
  }
  source: LocalDataSource = new LocalDataSource();
  issetting = true;
  settings={

  }; 
  data=[]

  getPaddel()
  {
    this.settings = {
      defaultStyle: true,
      
      actions: {
        columnTitle: 'Actions',
        position: 'right',
        add: true,
        edit: true,
        delete: true,
        width: '30%',
      },
      add:
      {
        addButtonContent: '<img src="assets/nebular-icons-master/src/icons/update/add-plus-icon.svg" width="30" height="30" >',
        createButtonContent: '<img src="assets/nebular-icons-master/src/icons/update/approve-accept-icon.svg" width="30" height="30">',
        cancelButtonContent: '<img src="assets/nebular-icons-master/src/icons/update/remove-cross-icon.svg" width="30" height="30">',
        confirmCreate : true,
      },
      edit:
      {
         editButtonContent: '<img src="assets/nebular-icons-master/src/icons/update/edit-round-icon.svg" width="30" height="30" >',
         saveButtonContent: '<img src="assets/nebular-icons-master/src/icons/update/approve-accept-icon.svg" width="30" height="30">',
         cancelButtonContent: '<img src="assets/nebular-icons-master/src/icons/update/remove-cross-icon.svg"  width="30" height="30">',
         confirmSave : true,
      },
      delete:
      {
         deleteButtonContent: '<img src="assets/nebular-icons-master/src/icons/update/trash.png" width="30" height="30">',
         confirmDelete: true,
      },

      columns: {
        name:{
          type:'text',
          title:"Nom",
        },
        dispo:{
          type:'text',
          title:"Disponibilité",
        }
       
      }
    };


    this.fromBack.getPadel_all().subscribe(next => {
      console.log(next);
      this.source.load(next);
      this.source.setPaging(1,14, true);
    })
  }
}
