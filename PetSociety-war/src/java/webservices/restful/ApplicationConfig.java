/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package webservices.restful;

import java.util.Set;

/**
 *
 * @author cally
 */
@javax.ws.rs.ApplicationPath("webresources")
public class ApplicationConfig extends javax.ws.rs.core.Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        return resources;
    }

    /**
     * Do not modify addRestResourceClasses() method.
     * It is automatically populated with
     * all resources defined in the project.
     * If required, comment out calling this method in getClasses().
     */
    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(webservices.restful.AuthenReqResource.class);
        resources.add(webservices.restful.BankAccountResource.class);
        resources.add(webservices.restful.BookingsResource.class);
        resources.add(webservices.restful.CORSFilter.class);
        resources.add(webservices.restful.CreditCardResource.class);
        resources.add(webservices.restful.ExperienceFormResource.class);
        resources.add(webservices.restful.MeetAndGreetResource.class);
        resources.add(webservices.restful.PetResource.class);
        resources.add(webservices.restful.SafetyFormResource.class);
        resources.add(webservices.restful.UsersResource.class);
    }
}
