import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  standalone: true, //
  // template: `<h1>Hello World</h1>` // używa sie raczej tego gdy mamy doczynieniea z maksymalnie 2-3 linjkami kodu
  templateUrl: './header.component.html',
  // styles: ['h1 { color: red;}'], // raczej sie tego nie używa lepsze to poniżej

  styleUrls: ['./header.component.css']


})
export class HeaderComponent {
  // logika dla powyższego komponentu w tym miejscu
}
