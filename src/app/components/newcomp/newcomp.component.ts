import { Component, Input, OnInit } from '@angular/core';
import { Observable, filter } from 'rxjs';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent implements OnInit{


  @Input('parentData') public title;
  public isDisabled =false;
  public name ="";
  public test ={
    "text-danger": !this.isDisabled,
    "text-italics": this.isDisabled
  }
  onClick(value){
    alert(value);
    this.title="title changed on button click"
  }

  myObservable = new Observable<number>((obs)=>{
    obs.next(1);
    obs.next(2);
    obs.next(3);
    obs.next(4);
  });

  getEven(): Observable<number>{
    return this.myObservable.pipe(filter((val)=>val%2===0));
  }

  ngOnInit(): void {
    this.getEven().subscribe((val)=>{console.log(val);
    });
    
    this.myObservable.pipe(filter((val)=>val%2===0)).subscribe((val)=>{
      console.log(val);
    });
  }


  // newVariable: string = title;

}
