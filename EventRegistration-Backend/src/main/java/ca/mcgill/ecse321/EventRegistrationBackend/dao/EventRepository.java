package ca.mcgill.ecse321.EventRegistrationBackend.dao;

import org.springframework.data.repository.CrudRepository;
import ca.mcgill.ecse321.EventRegistrationBackend.model.Event;

public interface EventRepository extends CrudRepository<Event, String> {

  Event findEventByName(String name);

}
