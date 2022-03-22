import { AXIOS } from "../common/AxiosScript";
import { COUNT_STATE } from "../common/StateScript";

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
      errorEvent: ""
    };
  },
  // upon creation, do something
  created: function() {
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
        // this.errors.push(e)
      });
  },
  methods: {
    createPerson: function(personName) {
      COUNT_STATE.commit("increment");
      console.log(COUNT_STATE.state.count);
    }
  }
};
