// Create a new task
// A new task will be created as incomplete
const newTask = function(title, description) {
  const task = {
    title,
    description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markComplete: function() {
      this.complete = true;
    }
  };
  return task;
};

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out the litter box");
const task2 = newTask("Do Landry", "😨");
const tasks = [task1, task2];

task1.logState();
task1.markComplete();
task1.logState();

console.log(tasks);
