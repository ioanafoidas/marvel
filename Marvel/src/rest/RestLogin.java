package rest;

import java.util.ArrayList;
import java.util.List;

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

		user = new User();
		user.setName("Thor");
		user.setColor("blue");
		user.setPic("c:\\pic1.gif");
		USERS.add(user);

		user = new User();
		user.setName("Iron Man");
		user.setColor("#ccff33");
		user.setPic("c:\\pic1.gif");
		USERS.add(user);

		user = new User();
		user.setName("Deadpool");
		user.setColor("#7F0000");
		user.setPic("c:\\pic1.gif");
		USERS.add(user);

		user = new User();
		user.setName("Guardian of the Galaxy");
		user.setColor("#f2e6ff");
		user.setPic("c:\\pic1.gif");
		USERS.add(user);
	}

	@GET
	@Path("user")
	@Produces(MediaType.APPLICATION_JSON)
	public User login() {

		for (User user : USERS) {
			if (!user.isActive()) {
				user.setActive(true);
				return user;
			}
		}
		return null;
	}

	@GET
	@Path("users")
	@Produces(MediaType.APPLICATION_JSON)
	public List<User> getAll() {
		return USERS;
	}
}
