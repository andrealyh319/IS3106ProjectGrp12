/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package webservices.restful;

import entity.BankAccount;
import java.util.ArrayList;
import javax.ejb.EJB;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.POST;
import javax.ws.rs.core.MediaType;
import session.BankAccSessionBeanLocal;

/**
 * REST Web Service
 *
 * @author Andrea
 */
@Path("bankAccount")
@RequestScoped
public class BankAccountResource {

    @EJB
    private BankAccSessionBeanLocal bankAccountSessionBean;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public BankAccount createNewBankAccount(BankAccount bankAccount) {
        bankAccount.setTransactions(new ArrayList<>());
        bankAccountSessionBean.addNewBankAcc(bankAccount);
        return bankAccount;
    }
}
