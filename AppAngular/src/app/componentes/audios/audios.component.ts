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
arquivoNome: string | undefined;
audioId:number | undefined;

visibilidadeTabela: boolean =  true;
visibilidadeFormulario: boolean = false;

modalRef: BsModalRef | undefined;


  constructor(private audioService: AudiosService,
    private modalService: BsModalService  ) { }

  ngOnInit(): void {
    this.audioService.SelecionarTodos().subscribe(resultado =>{
    this.audios = resultado;

    });

  }

  ExibirFormularioCadastro():void{
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;
    this.tituloFormulario = "Novo Audio"
    this.formulario = new FormGroup({
      ArquivoNome: new  FormControl(null),
      Tipo: new FormControl(null),
      OperadorNome: new FormControl(null),
      DataCriacao: new FormControl(null)
    });
  }

  ExibirFormulrioAtualizacao(audioId: any):void {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

      this.audioService.SelecionarPK(audioId).subscribe((resultado) => {
      this.tituloFormulario = `Atualizar  ${resultado.arquivoNome}`;


      this.formulario = new FormGroup({
        audioId: new FormControl(resultado.audioId),
        ArquivoNome: new FormControl(resultado.arquivoNome),
        Tipo: new FormControl(resultado.tipo),
        OperadorNome: new FormControl(resultado.operadorNome),
        DataCriacao: new FormControl(resultado.dataCriacao)

      });
    });
  }

  EnviarFormulario():void{
    const audio : Audio = this.formulario.value;

    if(audio.audioId > 0) {

      this.audioService.AtualizarAudio(audio).subscribe((resultado) => {
      this.visibilidadeFormulario = false;
      this.visibilidadeTabela = true;
      alert("Audio atualizado com sucesso");
        this.audioService.SelecionarTodos().subscribe((registros) => {
        this.audios = registros;
      });
      });

    }
    else{

    this.audioService.SalvarAudio(audio).subscribe((resultado) => {
      this.visibilidadeFormulario = false;
      this.visibilidadeTabela = true;
      alert("Audio incluido com sucesso");
      this.audioService.SelecionarTodos().subscribe((registros) => {
        this.audios = registros;
      });
    });
  }
  }

  Voltar():void{
    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
  }

  ExibirConfirmacaoExclusao(audioId: number | undefined, arquivoNome: string | undefined, conteudoModal:TemplateRef<any>):void{
    this.modalRef = this.modalService.show(conteudoModal);
    this.audioId = audioId;
    this.arquivoNome = arquivoNome;

  }

  ExcluirAudio(audioId: any){
    this.audioService.ExcluirAudio(audioId).subscribe(resultado => {
      this.modalRef?.hide();
      alert("Audio exluído com sucesso!");
      this.audioService.SelecionarTodos().subscribe(registros =>{
        this.audios = registros;
      });
    });
  }
}
