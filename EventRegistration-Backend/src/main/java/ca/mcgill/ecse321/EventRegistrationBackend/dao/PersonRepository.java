package ca.mcgill.ecse321.EventRegistrationBackend.dao;

import org.springframework.data.repository.CrudRepository;
import ca.mcgill.ecse321.EventRegistrationBackend.model.Person;

public interface PersonRepository extends CrudRepository<Person, String> {

  Person findPersonByName(String name);

}
