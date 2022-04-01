import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EstadioService } from 'src/app/core/services/estadio.service';
import { CompetenciaService } from 'src/app/shared/services/competencia.service';
import { EquipoService } from 'src/app/shared/services/equipo.service';
import { PaisService } from 'src/app/shared/services/pais.service';

@Component({
  selector: 'app-registrarcompetencia',
  templateUrl: './registrarcompetencia.component.html',
  styleUrls: ['./registrarcompetencia.component.scss']
})
export class RegistrarcompetenciaComponent implements OnInit {
  @Input() editData: any;
  paises = [];
  equipos = [];
  photo64 = null;
  isEdit = false;
  editcomplete:any;
  estados=[{id:1,Estado:'Disponible'},{id:2,Estado:'Remodelación'}];
  tipos=[{id:1,Estado:'Liga'},{id:2,Estado:'Eliminatoria'},{id:3,Estado:'Copa'},{id:4,Estado:'Super Copa'},{id:5,Estado:'Cuadrangular'},{id:6,Estado:'Triangular'}];
  RegistroForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    fecha_inaguracion: new FormControl('', [Validators.required]),
    anio: new FormControl('', [Validators.required]),
    id_country: new FormControl('', [Validators.required]),
    id_campeon: new FormControl('', [Validators.required]),
    id_estado: new FormControl(2, [Validators.required]),
    foto: new FormControl('photo', ),
    id_tipo_competencia: new FormControl('', ),

    capacidad: new FormControl('', [Validators.required, Validators.min(1)]),
  });
  constructor(private formBuilder: FormBuilder,private competenciaService:CompetenciaService, private estadioService:EstadioService, private paisService: PaisService, private equipoService: EquipoService) { 
    
  }
  

  ngOnInit(): void {
    this.init();
  }

  init(){
    this.getcountries();
    this.getEquipos();
    this.RegistroForm.patchValue(this.editData);
    this.editcomplete=this.editData;
    this.isEdit = false;
    if (this.editData) {
      this.isEdit = true;
      this.photo64= this.editData.photo;
      delete this.editData['photo'];

      this.editData.nombre = this.editData.nombre;
      this.editData.fecha_inaguracion=this.editData.fecha_inaguracion;
      this.editData.anio = this.editData.anio;
      this.editData.id_country = this.editData.id_country;
      this.editData.id_campeon = this.editData.id_campeon;
      this.editData.anio=this.editData.anio;
      this.editData.foto = this.editData.foto;
      this.editData.id_tipo_competencia = this.editData.id_tipo_competencia
      this.RegistroForm.patchValue(this.editData)
    }
  }
  onFileChange(event) {

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.photo64 = reader.result;

    };
  }

  getcountries() {
    this.paisService.getpaises()
      .subscribe((data) => { this.paises = data.data;console.log(this.paises); });
  }

  getEquipos() {
    this.equipoService.getAllteams()
      .subscribe((data) => { this.equipos = data.data;console.log(this.equipos); });
  }

  formatDate(date: Date) {
    const isoDateString = date.toISOString();
    const isoDate = new Date(isoDateString);
    const mySQLDateString = isoDate.toJSON().slice(0, 19).replace('T', ' ');
    return mySQLDateString
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.RegistroForm.controls[controlName].hasError(errorName);
  }

  submit(form) {

    if(!this.editData){
      this.competenciaService.createCompetencia(this.RegistroForm.value).subscribe(
        resp=>{
                let respueta:any = resp;
                
                if(respueta.status!=true){
                 alert('Error enviando');
                  return;
                }
                alert(respueta.msg);
    
            },
            error=> {
             alert(error.error.msg);
           }
      );
    }else{
      form.id=this.editData.id_competencia;
      this.competenciaService.updateCompetencia(this.RegistroForm.value).subscribe(
        resp=>{
                let respueta:any = resp;
                
                if(respueta.status!=true){
                 alert('Error enviando');
                  return;
                }
                alert(respueta.msg);
    
            },
            error=> {
             alert(error.error.msg);
           }
      );
    }
  }

  deleteCompetencia(){
      this.competenciaService.deleteCompetencia({"id": this.editData.id_competencia}).subscribe(
        resp=>{
                let respueta:any = resp;
                
                if(respueta.status!=true){
                 alert('Error enviando');
                  return;
                }
                alert(respueta.msg);
    
            },
            error=> {
             alert(error.error.msg);
           }
      );
  }

}
