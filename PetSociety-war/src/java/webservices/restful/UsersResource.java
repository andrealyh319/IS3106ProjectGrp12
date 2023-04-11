/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package webservices.restful;

import entity.PetParent;
import entity.PetSitter;
import entity.User;
import enumeration.RegionEnum;
import enumeration.ServiceEnum;
import enumeration.UserStatusEnum;
import java.util.List;
import javax.ejb.EJB;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.Path;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.core.MediaType;
import session.PetParentSessionBeanLocal;
import session.PetSitterSessionBeanLocal;
import session.UserSessionBeanLocal;

/**
 * REST Web Service
 *
 * @author Andrea
 */
@Path("users")
@RequestScoped
public class UsersResource {

    @EJB
    private UserSessionBeanLocal userSessionBean;

    @EJB
    private PetParentSessionBeanLocal petParentSessionBeanLocal;

    @EJB
    private PetSitterSessionBeanLocal petSitterSessionBeanLocal;

    // no longer using this API as not creating user, only either PP or PS
    /* @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public User createNewUser(User user) {
        user.setStatus(UserStatusEnum.PENDING);
        userSessionBean.createNewUser(user);
        return user;
    } */
    // create petparent type user
    @POST
    @Path("/petparent")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Produces(MediaType.APPLICATION_JSON)
    public User createNewPetParent(@FormParam("user") User user,
            @FormParam("petParent") PetParent petParent) {
        user.setStatus(UserStatusEnum.PENDING);
        userSessionBean.createNewParent(user, petParent);
        return user;
    }

    // create petsitter type user
    @POST
    @Path("/petsitters")
    @Produces(MediaType.MULTIPART_FORM_DATA)
    @Consumes(MediaType.APPLICATION_JSON)
    public User createNewPetSitter(@FormParam("user") User user,
            @FormParam("petSitter") PetSitter petSitter) {

        user.setStatus(UserStatusEnum.PENDING);
        // Convert enums
        //petSitter.setRegion(RegionEnum.valueOf(@FormParam("region") region));
        //petSitter.setService(ServiceEnum.valueOf(@FormParam("service")));

        userSessionBean.createNewSitter(user, petSitter);
        return user;
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> getAllUsers() {
        return userSessionBean.retrieveAllUsers();
    }

}
