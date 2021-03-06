import { AXIOS } from "../common/AxiosScript";
import { COUNT_STATE, LOGIN_STATE } from "../common/StateScript";

function PersonDto(name) {
  this.name = name;
  this.events = [];
}

function EventDto(name, date, start, end) {
  this.name = name;
  this.eventDate = date;
  this.startTime = start;
  this.endTime = end;
}

export default {
  name: "eventregistration",
  data() {
    return {
      persons: [],
      newPerson: "",
      errorPerson: "",
      response: [],
      // event
      events: [],
      errorEvent: "",
      newEvent: {
        name: "",
        eventDate: "2017-12-08",
        startTime: "09:00",
        endTime: "11:00",
      },
      // register
      selectedPerson: "",
      selectedEvent: "",
      errorRegistration: "",
    };
  },
  // upon creation, do something
  created: function () {
    // Initializing persons from backend
    AXIOS.get("/persons")
      .then(response => {
        // JSON responses are automatically parsed.
        this.persons = response.data;
      })
      .catch(e => {
        this.errorPerson = e;
      });
    // Initializing events
    AXIOS.get("/events")
      .then(response => {
        this.events = response.data;
      })
      .catch(e => {
        this.errorEvent = e;
      });
  },
  methods: {
    createPerson: function (personName) {
      AXIOS.post("/persons/".concat(personName), {}, {})
        .then(response => {
          // JSON responses are automatically parsed.
          this.persons.push(response.data);
          this.errorPerson = "";
          this.newPerson = "";
        })
        .catch(e => {
          let errorMsg = e.response.data.message;
          console.log(errorMsg);
          this.errorPerson = errorMsg;
        });
    },
    createEvent: function (name, date, startTime, endTime) {
      AXIOS.post(
        "/events/".concat(name),
        {},
        {
          params: {
            date: date,
            startTime: startTime,
            endTime: endTime,
          },
        }
      )
        .then(response => {
          this.events.push(response.data);
          this.errorEvent = "";
        })
        .catch(e => {
          let errorMsg = e.response.data.message;
          console.log(errorMsg);
          this.errorEvent = errorMsg;
        });
    },
    registerEvent: function (personName, eventName) {
      AXIOS.post(
        "/register",
        {},
        {
          params: {
            pname: personName,
            ename: eventName,
          },
        }
      )
        .then(response => {
          let indexOfPerson = this.persons.map(x => x.name).indexOf(personName);
          let indexOfEvent = this.events.map(x => x.name).indexOf(eventName);
          let person = this.persons[indexOfPerson];
          let event = this.events[indexOfEvent];
          person.events.push(event);
          this.selectedPerson = "";
          this.selectedEvent = "";
          this.errorRegistration = "";
        })
        .catch(e => {
          let errorMsg = e.response.data.message;
          console.log(errorMsg);
          this.errorRegistration = errorMsg;
        });
    },
    testStates: function () {
      COUNT_STATE.commit("increment");
      if (!LOGIN_STATE.state.isLoggedIn) {
        LOGIN_STATE.commit("login");
      } else {
        LOGIN_STATE.commit("logout");
      }
      console.log(COUNT_STATE.state.count);
      console.log(LOGIN_STATE.state.isLoggedIn);
    },
  },
};
