/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package session;

import entity.Report;
import entity.Staff;
import error.EntityAlreadyExistsException;
import error.InvalidLoginCredentialsException;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 *
 * @author rachelang
 */
@Stateless
public class StaffSessionBean implements StaffSessionBeanLocal {

    @PersistenceContext(unitName = "PetSociety-ejbPU")
    private EntityManager em;

    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")

    @Override
    public Long createStaff(Staff staff) throws EntityAlreadyExistsException {
        List<Staff> allStaffs = retrieveAllStaff();
        for (Staff s : allStaffs) {
            if (s.getUsername().equals(staff.getUsername())) {
                throw new EntityAlreadyExistsException("Staff with this username already exists!");
            }
        }
        em.persist(staff);
        return staff.getStaffId();
    }

    @Override
    public List<Staff> retrieveAllStaff() {
        Query q = em.createQuery("Select s FROM Staff s");
        return q.getResultList();
    }

    @Override
    public Staff staffLogin(String username, String password) throws InvalidLoginCredentialsException {
        List<Staff> allStaff = retrieveAllStaff();
        for (Staff s : allStaff) {
            if (s.getUsername().equals(username)) {
                if (s.getPassword().equals(password)) {
                    return s;
                }
                else {
                    throw new InvalidLoginCredentialsException("Wrong username or password!");
                }
            }
        }
        throw new InvalidLoginCredentialsException("Wrong username or password!");
    }
}
