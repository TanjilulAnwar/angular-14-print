import { Component, VERSION } from '@angular/core';
import { PrintService } from './service/print.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor( public printService : PrintService){

  }

  print(){
    let src = "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80"
    let width = 256
    let height = 256
let data = `<html><body>
<img src="${src}" alt="error" width="${width}" height="${height}"/>
</body></html>`

this.printService.printMe(data)

  }
}
