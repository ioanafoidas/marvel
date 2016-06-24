package rest;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import domain.User;

@Path("login")
public class RestLogin {

	private static final List<User> USERS = new ArrayList<User>();

	static {
		User user = new User();
		user.setName("Captain America");
		user.setColor("red");
		user.setPic("c:\\pic1.gif");
		USERS.add(user);
	}

	@GET
	@Path("user")
	@Produces(MediaType.APPLICATION_JSON)
	public User login() {

		return USERS.get(0);
	}

	@GET
	@Path("users")
	@Produces(MediaType.APPLICATION_JSON)
	public List<User> getAll() {
		return USERS;
	}
}
