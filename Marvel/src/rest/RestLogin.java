package rest;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import domain.User;

@Path("users")
public class RestLogin {

	private static final List<User> USERS = new ArrayList<User>();

	static {
		User user = new User();
		user.setName("Captain America");
		user.setColor("red");
		user.setPic("../public/assets/images/user1.png");
		USERS.add(user);

		user = new User();
		user.setName("Thor");
		user.setColor("blue");
		user.setPic("../public/assets/images/thor.png");
		USERS.add(user);

		user = new User();
		user.setName("Iron Man");
		user.setColor("#ccff33");
		user.setPic("../public/assets/images/IronMan.png");
		USERS.add(user);

		user = new User();
		user.setName("Deadpool");
		user.setColor("#7F0000");
		user.setPic("../public/assets/images/user3.png");
		USERS.add(user);

		user = new User();
		user.setName("Guardian of the Galaxy");
		user.setColor("#f2e6ff");
		user.setPic("../public/assets/images/user2.png");
		USERS.add(user);
		
		user = new User();
		user.setName("Black Widow");
		user.setColor("#2fe6aa");
		user.setPic("../public/assets/images/user33.png");
		USERS.add(user);
	}

	@GET
	@Path("login")
	@Produces(MediaType.APPLICATION_JSON)
	public User login() {

		boolean randomed = false;
		int randomedCount = 0;
		while (!randomed && randomedCount++ < 30) {
			int index = new Random().nextInt(USERS.size());
			User user = USERS.get(index);
			if (!user.isActive()) {
				randomed = true;
				user.setActive(true);
				return user;
			}
		}
		return null;
	}

	@POST
	@Path("logout/{name}")
	@Produces(MediaType.APPLICATION_JSON)
	public void logout(@PathParam("name") String name) {

		for (User user : USERS) {
			if (user.getName().equals(name)) {
				user.setActive(false);
			}
		}
	}

	@GET
	@Path("all")
	@Produces(MediaType.APPLICATION_JSON)
	public List<User> getAll() {
		return USERS;
	}
}
