interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }
  getCoffeeBreak() {
    return 'Getting a coffee break';
  }
  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }
  getCoffeeBreak() {
    return 'Cannot have a break';
  }
  workTeacherTasks() {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }

  return new Director();
}

/* console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500')); */

function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: DirectorInterface | TeacherInterface) {
  let result: string = '';
  if (isDirector(employee)) {
    result = employee.workDirectorTasks();
  } else {
    result = employee.workTeacherTasks();
  }
  return result;
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
