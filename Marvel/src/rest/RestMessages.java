package rest;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import domain.Message;

@Stateless
@Path("messages")
public class RestMessages {

	private List<Message> messages  = new ArrayList<Message>();

	@GET
	@Path("all/{date}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public List<Message> getAfter(@PathParam("date") BigInteger date) {
		List<Message> messagesAfter = new ArrayList<Message>();

		for (Message m : messages) {
			if (m.getDate().compareTo(date) > 0) {
				messagesAfter.add(m);
			}
		}
		//System.out.println(messagesAfter);
		return messagesAfter;
		
		
		
	}
	
	
	@GET
	@Path("all")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public List<Message> getAll() {		
		return messages;
			
	}

	@POST
	@Path("post")
	@Consumes(MediaType.APPLICATION_JSON)
	public void post(Message message) {
		messages.add(message);
		//System.out.println(messages);
		
	}
}
