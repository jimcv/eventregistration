<template>
  <div id="eventregistration">
    <h2>People</h2>
    <table>
      <!-- v-bind:key should be a unique attribute for each instances -->
      <!-- see https://v2.vuejs.org/v2/guide/list.html -->
      <tr v-for="person in persons" v-bind:key="person.name">
        <td>{{ person.name }}</td>
        <td>
          <ul>
            <li v-for="event in person.events" v-bind:key="event.name">
              {{ event.name }}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          <input type="text" v-model="newPerson" placeholder="Person Name" />
        </td>
        <td>
          <button v-bind:disabled="!newPerson" @click="createPerson(newPerson)">
            Create Person
          </button>
          <b-button @click="testStates()">Try Vuex States</b-button>
        </td>
      </tr>
    </table>
    <p>
      <span v-if="errorPerson" style="color: red">{{ errorPerson }}</span>
    </p>

    <hr />
    <h2>Events</h2>
    <table>
      <tr>
        <th>Event Name</th>
        <th>Date</th>
        <th>Start</th>
        <th>End</th>
        <!--<th>Edit</th>-->
      </tr>
      <tr v-for="event in events" v-bind:key="event.name">
        <td>{{ event.name }}</td>
        <td>{{ event.eventDate | formatDate }}</td>
        <td>{{ event.startTime | formatTime }}</td>
        <td>{{ event.endTime | formatTime }}</td>
        <!--<td>
          <button v-on:click="updateEvent(event.name)">Edit</button>
        </td>-->
      </tr>
      <tr>
        <td>
          <input type="text" v-model="newEvent.name" placeholder="Event Name" />
        </td>
        <td>
          <input
            type="date"
            v-model="newEvent.eventDate"
            placeholder="YYYY-MM-DD"
          />
        </td>
        <td>
          <input type="time" v-model="newEvent.startTime" placeholder="HH:mm" />
        </td>
        <td>
          <input type="time" v-model="newEvent.endTime" placeholder="HH:mm" />
        </td>
        <td>
          <button
            v-bind:disabled="!newEvent.name"
            v-on:click="
              createEvent(
                newEvent.name,
                newEvent.eventDate,
                newEvent.startTime,
                newEvent.endTime
              )
            "
          >
            Create
          </button>
        </td>
      </tr>
    </table>
    <span v-if="errorEvent" style="color: red">{{ errorEvent }}</span>
    <hr />

    <h2>Registrations</h2>
    <label
      >Person:
      <select v-model="selectedPerson">
        <option disabled value="">Please select one</option>
        <option v-for="person in persons">
          {{ person.name }}
        </option>
      </select>
    </label>
    <label
      >Event:
      <select v-model="selectedEvent">
        <option disabled value="">Please select one</option>
        <option v-for="event in events">
          {{ event.name }}
        </option>
      </select>
    </label>
    <button
      v-bind:disabled="!selectedPerson || !selectedEvent"
      @click="registerEvent(selectedPerson, selectedEvent)"
    >
      Register
    </button>
    <br />
    <span v-if="errorRegistration" style="color: red">{{
      errorRegistration
    }}</span>
    <hr />
  </div>
</template>

<script src="./EventRegistrationScript.js"></script>

<style scoped>
#eventregistration {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background: #f2ece8;
}
</style>
