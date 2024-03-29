import { Component, ElementRef, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
import { InfoService } from 'src/app/service/info.service';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent {
  currentDate = new Date();
  name = ('Generated :  ' + (this.currentDate));


  @ViewChild('pdfTable', { static: false }) pdfTable: ElementRef;

  public downloadAsPDF() {
    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      },
    };

    const pdfTable = this.pdfTable.nativeElement;
    doc.html(pdfTable.innerHTML,{
      callback: function (doc) {
        doc.save('tableToPdf.pdf');
      }


    });







}
}
