// service -> usługe można określić jako inna klasa, która wykonuje jakies operacje lub zarządza danymi, które mogą być
// wykorzytywane przez jeden lub więcej komponentów

import { NewTaskData } from './task/task.modal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.dummyTasks = JSON.parse(tasks);
    }

    window.addEventListener('beforeunload', () => {
      localStorage.setItem('tasks', JSON.stringify(this.dummyTasks));
    });
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.dummyTasks));
  }

  getUserTasks(userId: string) {
    return this.dummyTasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.dummyTasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.dummyTasks = this.dummyTasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }
}
