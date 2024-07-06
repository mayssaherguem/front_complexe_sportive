import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { DialogErrorService } from 'src/app/services/dialog-error.service';
import { DialogMessageService } from 'src/app/services/dialog-message.service';
import { environment } from 'src/environments/environment';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-gestion-adhérents',
  templateUrl: './gestion-adhérents.component.html',
  styleUrls: ['./gestion-adhérents.component.scss']
})
export class GestionAdhérentsComponent implements OnInit, AfterViewInit {

  settings = {};
  issetting=false;
  selectedRow;
  source: LocalDataSource = new LocalDataSource();

  currentRoute;

  constructor(private _http:HttpClient, private sanitizer: DomSanitizer, public dialog_error: DialogErrorService, private dialog_msg: DialogMessageService, private route: ActivatedRoute) 
  {
    this.route.url.subscribe(url => {
      console.log('URL:', url)
      this.currentRoute = url[0]?.path;
      console.log('Current Route:', this.currentRoute);
    })
  }

  ngAfterViewInit()
  {
    this.getMembers();
  }

  ngOnInit(): void {
  }

  getPaymentColor(value)
    {
      if(value == "non payé"){return "linear-gradient(-90deg,#ff3e72, #ff6f8d )";}
      else if(value == "payé"){return "linear-gradient(-90deg, #00d68f,#2ce69b )";}
    }

  getMembers()
  {
    this.settings = 
    {
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
          title:"Nom & Prénom",
        },
        date_birth:{
          type:'text',
          title:"Date de Naissance",
        },
        email:{
          type:'text',
          title:"Email",
        },
        phone:{
          type:'text',
          title:"Téléphone",
        },
        duree_abonnement:{
          type:'text',
          title:"Durée Abonnement",
        },
        date_creation:{
          type:'text',
          title:"Date Création",
        },
        date_échéance:{
          type:'text',
          title:"Date Echéance",
        },
        montant:{
          type:'text',
          title:"Montant",
        },
        payment:{
          type: 'html',
          title:"Paiement",
          width:'10%',
          valuePrepareFunction: ((payment, row)=> {
            //console.log(row.etat_projet);
            return this.sanitizer.bypassSecurityTrustHtml(`<div class="d-flex justify-content-center" style="text-align:center;border-radius:5px;padding:5px 5px;background:${this.getPaymentColor(row.payment)}"> ${payment}  </div>`);
          }),
        },
        
      }
    };

    this.issetting=true;

    let baseUrl = "http://localhost:8088/getList_players";
      let h = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')}
      let body = new URLSearchParams();
      this._http.post(/*baseUrl,*/body.toString(),h)
      //.pipe(retry(3),catchError(this.dialog_error.handleError.bind(this)))
      .subscribe((next : any) =>
      {
        console.log(next);
        this.selectedRow = next.data;
        this.source.load(next.data);
        this.source.setPaging(1,14, true);
      })
  }



  data = [
    {
      name: 'adherent1',
      date_birth: '07/05/1995',
      email: 'adherent1@gmail.com',
      phone: '21212121',
      duree_abonnement : '3mois',
      date_creation: '01/02/2024',
      date_échéance: '01/05/2024', 
      montant: '300',
      payment: 'payé'
    },
    {
      name: 'adherent2',
      date_birth: '07/05/1995',
      email: 'adherent2@gmail.com',
      phone: '52525252',
      duree_abonnement : '1an',
      date_creation: '01/06/2023',
      date_échéance: '01/06/2024', 
      montant: '300',
      payment: 'non payé'
    },
  ]

  current="Gestion Adherents"
  toggleMenu(event)
  {

  }

}
