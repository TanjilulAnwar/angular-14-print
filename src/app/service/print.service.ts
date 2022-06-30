import { Injectable } from '@angular/core';

@Injectable()
export class PrintService {
  constructor() {}

  printMe(data) {
    var frame1 = document.createElement('iframe');
    frame1.name = 'frame1';
    frame1.style.position = 'absolute';
    frame1.style.top = '-1000000px';
    document.body.appendChild(frame1);
    var frameDoc = frame1.contentWindow;
    frameDoc.document.open();
    frameDoc.document.write(data);

    frameDoc.document.close();
    setTimeout(function () {
      window.frames['frame1'].focus();
      window.frames['frame1'].print();
      document.body.removeChild(frame1);
    });
  }
}
