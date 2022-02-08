package ca.mcgill.ecse321.EventRegistrationBackend.model;

import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class RegistrationManager {
  // Composition: Person
  private Set<Person> persons;
  // cascade: used for compositions
  @OneToMany(cascade = {CascadeType.ALL})
  public Set<Person> getPersons() {
    return this.persons;
  }

  public void setPersons(Set<Person> personss) {
    this.persons = personss;
  }

  // Composition: Registration
  private Set<Registration> registrations;

  @OneToMany(cascade = {CascadeType.ALL})
  public Set<Registration> getRegistrations() {
    return this.registrations;
  }

  public void setRegistrations(Set<Registration> registrationss) {
    this.registrations = registrationss;
  }

  // Composition: Event
  private Set<Event> events;

  @OneToMany(cascade = {CascadeType.ALL})
  public Set<Event> getEvents() {
    return this.events;
  }

  public void setEvents(Set<Event> eventss) {
    this.events = eventss;
  }

  // Primary key
  private int id;

  public void setId(int value) {
    this.id = value;
  }

  @Id
  public int getId() {
    return this.id;
  }
}
