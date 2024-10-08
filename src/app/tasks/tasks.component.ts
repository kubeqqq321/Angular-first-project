import { Component, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.modal';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [UserComponent, TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // ? -> nie inicjalizjąc zmiennej mówimy że jest to okej i dlatego tego nie trzeba robic
  // ! -> Mówimy że tu sie musi pojawić jakaś wartość i będzie ona napewno
  // | -> tworzy coś takiego jak union-type typ zmiennej może być wówczas string lub undefind
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  // private tasksService: TasksService;
  // constructor(tasksService: TasksService) {
  //   this.tasksService = tasksService;
  // }
  // || stworzenie tego co powyżej w konstruktorze jest równoznaczne z tym co jest poniżej
  constructor(private tasksService: TasksService) {}

  // jest to alternatywa do używania ?
  // @Input() name: string | undefined;

  get selectedUserTask() {
    return this.tasksService.getUserTasks(this.userId);
  }

  addNewTask() {
    this.isAddingTask = true;
  }

  // onCompleteTask(id: string) {
  //   this.tasksService.removeTask(id);
  // }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
