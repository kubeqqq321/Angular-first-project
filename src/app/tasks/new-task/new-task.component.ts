import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData, Task } from '../task/task.modal';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter();
  // @Output() taskAdded = new EventEmitter<{
  //   title: string;
  //   summary: string;
  //   date: string;
  // }>();'
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  // jest to alternatywa podejścia opartego na konstruktorze
  private taskService = inject(TasksService);

  // Użycie Signal() dla tego co powyżej
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDueDate = signal('');

  onCancle() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDueDate,
      },
      this.userId,
    );
    this.onCancle();
  }
}
