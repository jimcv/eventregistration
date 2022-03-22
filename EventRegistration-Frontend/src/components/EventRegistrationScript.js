import { AXIOS } from "../common/AxiosScript";

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
        // this.errors.push(e)
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
  },
};
