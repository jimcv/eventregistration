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
      this.$store.commit("increment");
      if (this.$store.getters.getLoginStatus === false) {
        this.$store.commit("login");
      } else {
        this.$store.commit("logout");
      }
      console.log(this.$store.getters.getCount);
      console.log(this.$store.getters.getLoginStatus);
    }
  }
};
