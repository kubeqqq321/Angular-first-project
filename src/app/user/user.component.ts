import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.modal';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // <!--         input - dane -->
  // <!--          output - funkcje -->
  // ! -> dodanie tego oznajmia że do zmiennnej zostanie przypisana jakaś wartość pomimo tego że nie jest ona zainicjalizowana
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // ||
  // object type
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>();

  // selected = output<string>(); // częściej używane jest jednak dekorator @Output

  get imagePath() {
    return '/assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

  // alternatywny sposób akceptowania danych wejściowych niz te w przypadku dekoratora @Input()
  //SIGNAL SĄ DO ODCZYTU I NIE MOŻNA ICH ZMIENIĆ Z POZIOMU KOMPONENTU
  // avatar = input.required<string>();
  // name = input.required<string>();

  // używane zazwyczaj z Signal();
  // imagePath = computed(() => {
  //   return '/assets/users/' + this.avatar;
  // })

  // ---------------------------------------------------------------------------

  //to było do wcześniejszej częsci kursu zostawiam to w razie czego.
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => '/assets/users/' + this.selectedUser().avatar)
  //
  // // selectedUser = DUMMY_USERS[randomIndex];
  // // get imagePath(){
  // //   return '/assets/users/' + this.selectedUser.avatar;
  // // }
  //
  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  //   // this.selectedUser = DUMMY_USERS[randomIndex];
  // }
}
