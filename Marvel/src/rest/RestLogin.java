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
		user.setColor("#99ccff");
		user.setPic("../public/assets/images/CaptainAmerica.jpg");
		USERS.add(user);

		user = new User();
		user.setName("Thor");
		user.setColor("#ffb3b3");
		user.setPic("../public/assets/images/thor.png");
		USERS.add(user);

		user = new User();
		user.setName("Iron Man");
		user.setColor("#ff7733");
		user.setPic("../public/assets/images/IronMan.png");
		USERS.add(user);

		user = new User();
		user.setName("Deadpool");
		user.setColor("#7F0000");
		user.setPic("../public/assets/images/Deadpool.jpg");
		USERS.add(user);

		user = new User();
		user.setName("wolverine");
		user.setColor("#ffff99");
		user.setPic("../public/assets/images/wolverine.png");
		USERS.add(user);
		
		user = new User();
		user.setName("Black Widow");
		user.setColor("#8080ff");
		user.setPic("../public/assets/images/black-widow.jpg");
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
