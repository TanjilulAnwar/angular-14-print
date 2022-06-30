import { Component, VERSION } from '@angular/core';
import { PrintService } from './service/print.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(public printService: PrintService) {}

  printImage() {
    let src =
      'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80';
    let width = 256;
    let height = 256;
    let data = `<html><body>
<img src="${src}" alt="error" width="${width}" height="${height}"/>
</body></html>`;

    this.printService.print(data);
  }

  printInvoice() {
    let logo =
      'https://sb.kaleidousercontent.com/67418/800x533/e96e173801/logos_transparent.png';
    let companyName = 'Furniture Inc.';

    let data = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>A simple, clean, and responsive HTML invoice template</title>
    
        <style>
          .invoice-box {
            max-width: 800px;
            margin: auto;
            padding: 30px;
            border: 1px solid #eee;
            font-size: 16px;
            line-height: 24px;
            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
            color: #555;
          }
    
          .invoice-box table {
            width: 100%;
            line-height: inherit;
            text-align: left;
          }
    
          .invoice-box table td {
            padding: 5px;
            vertical-align: top;
          }
    
          .invoice-box table tr td:nth-child(2) {
            text-align: right;
          }
    
          .invoice-box table tr.top table td {
            padding-bottom: 20px;
          }
    
          .invoice-box table tr.top table td.title {
            font-size: 45px;
            line-height: 45px;
            color: #333;
          }
    
          .invoice-box table tr.information table td {
            padding-bottom: 40px;
          }
    
          .invoice-box table tr.heading td {
            background: #eee;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
          }
    
          .invoice-box table tr.details td {
            padding-bottom: 20px;
          }
    
          .invoice-box table tr.item td {
            border-bottom: 1px solid #eee;
          }
    
          .invoice-box table tr.item.last td {
            border-bottom: none;
          }
    
          .invoice-box table tr.total td:nth-child(2) {
            border-top: 2px solid #eee;
            font-weight: bold;
          }
    
          @media only screen and (max-width: 600px) {
            .invoice-box table tr.top table td {
              width: 100%;
              display: block;
              text-align: center;
            }
    
            .invoice-box table tr.information table td {
              width: 100%;
              display: block;
              text-align: center;
            }
          }
    
          /** RTL **/
          .invoice-box.rtl {
            direction: rtl;
            font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
          }
    
          .invoice-box.rtl table {
            text-align: right;
          }
    
          .invoice-box.rtl table tr td:nth-child(2) {
            text-align: left;
          }
        </style>
      </head>
    
      <body>
        <div class="invoice-box">
          <table cellpadding="0" cellspacing="0">
            <tr class="top">
              <td colspan="2">
                <table>
                  <tr>
                    <td class="title">
                      <img src="${logo}" style="width: 100%; max-width: 300px" />
                    </td>
    
                    <td>
                      Invoice #: 123<br />
                      Created: January 1, 2015<br />
                      Due: February 1, 2015
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
    
            <tr class="information">
              <td colspan="2">
                <table>
                  <tr>
                    <td>
                    ${companyName}<br />
                      12345 Sunny Road<br />
                      Sunnyville, CA 12345
                    </td>
    
                    <td>
                      Acme Corp.<br />
                      John Doe<br />
                      john@example.com
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
    
            <tr class="heading">
              <td>Payment Method</td>
    
              <td>Check #</td>
            </tr>
    
            <tr class="details">
              <td>Check</td>
    
              <td>1000</td>
            </tr>
    
            <tr class="heading">
              <td>Item</td>
    
              <td>Price</td>
            </tr>
    
            <tr class="item">
              <td>Executive Table</td>
    
              <td>$3000.00</td>
            </tr>
    
            <tr class="item">
              <td>Kitchen Counter</td>
    
              <td>$7500.00</td>
            </tr>
    
            <tr class="item last">
              <td>Revolving Chair</td>
    
              <td>$100.00</td>
            </tr>
    
            <tr class="total">
              <td></td>
    
              <td>Total: $385.00</td>
            </tr>
          </table>
        </div>
      </body>
    </html>`;

    this.printService.print(data);
  }
}
