import { Prestations } from '../interface/prestations';
import { States } from '../enums/states.enum';

export class Prestation implements Prestations{
id: number;
typePresta: string;
client:string;
tjmHt = 1200;
nbJours = 1;
tva = 20;
state = States.OPTION;
comment: string;

totalHt():number {
  return this.tjmHt * this.nbJours;
}


totalTtc():number {
  if(this.tva<=0){
    return this.totalHt();
  }
  return this.totalHt() *(1+this.tva/100);
}
}
