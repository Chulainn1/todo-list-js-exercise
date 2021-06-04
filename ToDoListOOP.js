function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Laundry", "Gather clothes, wash, dry and fold them");

const task2 = newTask("Code", "Finish Week_2 of the LHL course work")

const task3 = newTask("Exercise", "Go for a 20 min recovery run, then perform Friday workout")

const tasks = [task1, task2, task3];

task1.logState();
task1.markCompleted();
task1.logState();

console.log(tasks)

