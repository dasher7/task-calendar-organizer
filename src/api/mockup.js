import moment from "moment";

export const mockupAPI = {
  tasks: [
    {
      id: 1,
      title: "My Awesome Task Mock Up Title",
      description: "My Awesome Task Mock Up Description",
      scheduled_time: 11,
      scheduled_period: "AM",
      creation_date: null,
      completed: false,
      deleted: false
    },
    {
      id: 2,
      title: "Remember Me To Do Something",
      description: "That Something Must Be very Important",
      scheduled_time: 6,
      scheduled_period: "PM",
      creation_date: null,
      completed: false,
      deleted: false
    },
    {
      id: 3,
      title: "Order Pizza",
      description: "NOT ANANAS",
      scheduled_time: 7,
      scheduled_period: "PM",
      creation_date: null,
      completed: false,
      deleted: false
    },
    {
      id: 4,
      title: "Chill With Fellas",
      description: "Some Awesome Fellas",
      scheduled_time: 11,
      scheduled_period: "PM",
      creation_date: null,
      completed: false,
      deleted: false
    },
    {
      id: 5,
      title: "Wash, You Don't Want To Stink",
      description: "It's Even Hot",
      scheduled_time: 7,
      scheduled_period: "AM",
      creation_date: null,
      completed: false,
      deleted: false
    },
    {
      id: 6,
      title: "Finish This PWA",
      description: "Make It Look Awesome",
      scheduled_time: 11,
      scheduled_period: "AM",
      creation_date: null,
      completed: false,
      deleted: false
    }
  ],

  getAllTasks: function() {
    return this.tasks;
  },

  getTaskById: function(id) {
    return this.tasks.filter(el => el.id === id);
  },

  getMaximumId: function() {
    const sortedArray = this.tasks.sort((a, b) => {
      return a.id - b.id;
    });
    return sortedArray[sortedArray.length - 1].id;
  },

  deleteTaskById: function(id) {
    return this.tasks.filter(el => el.id !== id);
  },

  createTask: function(title, description, scheduled_time, scheduled_period) {
    const newTask = {
      id: this.getMaximumId() + 1,
      title: title,
      description: description,
      scheduled_time: scheduled_time,
      scheduled_period: scheduled_period,
      creation_date: moment().format("MMMM Do YYYY, h:mm:ss a"),
      completed: false,
      deleted: false
    };
    this.tasks.push(newTask);
  }
};

export default mockupAPI;
