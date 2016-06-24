package rest;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.Singleton;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import domain.Message;

@Path("messages")
public class RestMessages {

	private List<Message> messages;

	@GET
	@Path("all/{date}")
	@Consumes({ MediaType.APPLICATION_JSON, MediaType.TEXT_PLAIN })
	@Produces(MediaType.APPLICATION_JSON)
	public List<Message> getAfter(@PathParam("date") Date date) {
		List<Message> messagesAfter = new ArrayList<Message>();

		for (Message m : messages) {
			if (m.getDate().compareTo(date) > 0) {
				messagesAfter.add(m);
			}
		}
		return messagesAfter;
	}

	@POST
	@Path("post")
	@Consumes(MediaType.APPLICATION_JSON)
	public void post(Message message) {
		messages.add(message);
	}
}
