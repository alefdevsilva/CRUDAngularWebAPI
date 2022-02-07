import { AudiosService } from './../../audios.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Audio } from 'src/app/Audio';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-audios',
  templateUrl: './audios.component.html',
  styleUrls: ['./audios.component.css']
})
export class AudiosComponent implements OnInit {

formulario:any;
tituloFormulario: string | undefined;
audios: Audio[] | undefined;


  constructor(private audioService: AudiosService ) { }

  ngOnInit(): void {
    this.audioService.SelecionarTodos().subscribe(resultado =>{
    this.audios = resultado;

    });


    this.tituloFormulario = "Novo Audio"
    this.formulario = new FormGroup({
      ArquivoNome: new  FormControl(null),
      Tipo: new FormControl(null),
      OperadorNome: new FormControl(null),
      DataCriacao: new FormControl(null)
    });
  }

  EnviarFormulario():void{
    const audio : Audio = this.formulario.value;
    this.audioService.SalvarAudio(audio).subscribe(resultado => {
      alert("Audio incluido com sucesso");
    });
  }

}
