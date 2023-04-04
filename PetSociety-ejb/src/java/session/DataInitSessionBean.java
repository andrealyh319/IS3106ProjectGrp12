/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package session;

import entity.AuthenticationRequest;
import entity.BankAccount;
import entity.BookingRequest;
import entity.CreditCard;
import entity.PetParent;
import entity.PetSitter;
import entity.Rating;
import entity.Report;
import entity.Staff;
import entity.User;
import enumeration.RequestStatusEnum;
import enumeration.ServiceEnum;
import enumeration.UserStatusEnum;
import error.EntityAlreadyExistsException;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.ejb.LocalBean;
import javax.ejb.Singleton;
import javax.ejb.Startup;

/**
 *
 * @author rachelang
 */
@Singleton
@LocalBean
@Startup
public class DataInitSessionBean {

    @EJB
    private RatingSessionBeanLocal ratingSessionBean;

    @EJB
    private ReportSessionBeanLocal reportSessionBean;

    @EJB
    private AuthenticationReqSessionBeanLocal authenticationReqSessionBean;

    @EJB
    private PetSitterSessionBeanLocal petSitterSessionBean;

    @EJB
    private UserSessionBeanLocal userSessionBean;

    @EJB
    private BookingSessionBeanLocal bookingSessionBean;

    @EJB
    private PetParentSessionBeanLocal petParentSessionBean;

    @EJB
    private CreditCardSessionBeanLocal creditCardSessionBean;

    @EJB
    private BankAccSessionBeanLocal bankAccountSessionBean;

    @EJB(name = "StaffSessionBeanLocal")
    private StaffSessionBeanLocal staffSessionBeanLocal;

    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")
    @PostConstruct
    public void postConstruct() {
        List<Staff> staffs = staffSessionBeanLocal.retrieveAllStaff();
        if (staffs.isEmpty()) {
            staffInit();
        }
        List<User> users = userSessionBean.retrieveAllUsers();
        if (users.isEmpty()) {
            usersInit();
        }
    }

    private void staffInit() {
        Staff staff1 = new Staff();
        staff1.setFirstName("staff1");
        staff1.setLastName("s1");
        staff1.setUsername("staff1");
        staff1.setPassword("password");
        try {
            staffSessionBeanLocal.createStaff(staff1);
        } catch (EntityAlreadyExistsException ex) {
            Logger.getLogger(DataInitSessionBean.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    private void usersInit() {
        //create new user, bank acc and cred card
        CreditCard cc = new CreditCard();
        cc.setCcName("first");
        cc.setCcNum("1234567891012134");
        cc.setCvv(123);
        cc.setExpDate("03/2026");
        cc.setPayments(new ArrayList<>());

        BankAccount acc = new BankAccount();
        acc.setAccName("first");
        acc.setBankAccNum("123456789101112");
        acc.setBankName("UOB");
        acc.setTransactions(new ArrayList<>());

        bankAccountSessionBean.addNewBankAcc(acc);
        creditCardSessionBean.addNewCreditCard(cc);

        PetParent p = new PetParent();
        p.setAge(21);
        p.setBillingAddress("8 Apple Street");
        p.setBookings(new ArrayList<>());
        p.setContactNum("91234567");
        p.setEmergencyContact("92345678");
        p.setEmail("parent@gmail.com");
        p.setPassword("password");
        p.setFirstName("first");
        p.setLastName("last");
        p.setUsername("username");
        p.setStatus(UserStatusEnum.APPROVED);
        p.setRatingsForUsers(new ArrayList<>());
        p.setRatingsUserMade(new ArrayList<>());
        p.setReportsAgainstUser(new ArrayList<>());
        p.setReportsUserMade(new ArrayList<>());
        p.setMgRequests(new ArrayList<>());
        p.setCc(cc);
        p.setBankAcc(acc);

        petParentSessionBean.createNewParent(p);

        PetSitter s = new PetSitter();
        s.setAge(21);
        s.setBillingAddress("123 Orange Lane");
        s.setServiceAddress("123 Orange Lane");
        s.setRegion("central");
        s.setRate(new BigDecimal(20));
        s.setFirstName("first");
        s.setLastName("last");
        s.setService(ServiceEnum.BOARDING);
        s.setEmail("petsitter1@mail.com");
        s.setUsername("petsitter");
        s.setPassword("password");
        s.setContactNum("12345678");
        s.setEmergencyContact("87654321");
        s.setPreference("preference");
        s.setStatus(UserStatusEnum.PENDING);
        BankAccount acc1 = new BankAccount();
        acc1.setAccName("sitteracc1");
        acc1.setBankAccNum("88888888");
        acc1.setBankName("DBS");
        bankAccountSessionBean.addNewBankAcc(acc1);
        s.setBankAcc(acc1);
        CreditCard cc1 = new CreditCard();
        cc1.setCcName("SitterCard1");
        cc1.setCcNum("1616161616161616");
        cc1.setCvv(123);
        cc1.setExpDate("12/28");
        creditCardSessionBean.addNewCreditCard(cc1);
        s.setCc(cc1);
        // assuming schedule is empty (no unavail dates)
        petSitterSessionBean.createNewSitter(s);

        AuthenticationRequest aReq = new AuthenticationRequest();
        aReq.setCreatedDate(new Date());
        aReq.setResolved(Boolean.FALSE);
        aReq.setSitter(s);
        try {
            File file = new File("test.pdf");
            FileInputStream fis = new FileInputStream(file);
            byte[] data = new byte[(int) file.length()];
            try {
                fis.read(data);
            } catch (IOException ex) {
                Logger.getLogger(DataInitSessionBean.class.getName()).log(Level.SEVERE, null, ex);
            }
            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            data = bos.toByteArray();
            aReq.setDocument(data);
            authenticationReqSessionBean.createAuthenticationReq(aReq, s.getUserId());
        } catch (FileNotFoundException ex) {
            System.out.println("test pdf cannot be converted to bytes!");
        }

        Report report = new Report();
        report.setReportDescription("This is a test report. Test test test test test test test test test test");
        report.setReported(s);
        report.setReporter(p);
        reportSessionBean.createReport(report, s.getUserId(), p.getUserId());

        if (p.getBookings().isEmpty()) {
            //create new booking
            BookingRequest b = new BookingRequest();
            b.setCost(BigDecimal.ONE);
            b.setCreated(new Date());
            b.setDescription("Hello there! This is a new booking");
            b.setEndDate(new Date());
            b.setNumPets(2);
            b.setParent(p);
            b.setSitter(s);
            b.setStartDate(new Date());
            b.setStatus(RequestStatusEnum.PENDING);
            bookingSessionBean.createNewBooking(b, p.getUserId(), s.getUserId(), "once");

            Rating rating = new Rating();
            rating.setRated(s);
            rating.setRater(p);
            rating.setComment("This is a test rating.");
            rating.setReq(b);
            rating.setStars(3);
            ratingSessionBean.createNewRating(rating, p.getUserId(), s.getUserId());
        }
    }
}
