/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import enumeration.ServiceEnum;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.Size;

/**
 *
 * @author Andrea
 */
@Entity
public class PetSitter extends User implements Serializable {

    private static final long serialVersionUID = 1L;
    //@Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    //private Long sitterId;

    @Column(nullable = false)
    private String serviceAddress;
    @Column(nullable = false)
    @Size(max = 30)
    private String region;
    @Column(nullable = false)
    private String preference;
    @Column(nullable = false)
    private List<Date> schedule;
    @Column(nullable = false)
    private List<BigDecimal> rates;
    @Column(nullable = false)
    private ServiceEnum service;
    
    //relationships
    @OneToOne(optional = true)
    private AuthenticationRequest authenReq;
    @OneToOne(optional = true)
    private ExperienceForm expForm;
    @OneToOne(optional = true)
    private SafetyForm safetyForm;
    @OneToMany(mappedBy="sitter")
    private List<BookingRequest> bookings;
    @OneToMany(mappedBy="sitter")
    private List<MeetAndGreetRequest> mgRequests;
    
    

    public PetSitter() {
    }

    public String getServiceAddress() {
        return serviceAddress;
    }

    public void setServiceAddress(String serviceAddress) {
        this.serviceAddress = serviceAddress;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getPreference() {
        return preference;
    }

    public void setPreference(String preference) {
        this.preference = preference;
    }

    public List<Date> getSchedule() {
        return schedule;
    }

    public void setSchedule(List<Date> schedule) {
        this.schedule = schedule;
    }

    public List<BigDecimal> getRates() {
        return rates;
    }

    public void setRates(List<BigDecimal> rates) {
        this.rates = rates;
    }

    public ServiceEnum getService() {
        return service;
    }

    public void setService(ServiceEnum service) {
        this.service = service;
    }

    /**
     * @return the bookings
     */
    public List<BookingRequest> getBookings() {
        return bookings;
    }

    /**
     * @param bookings the bookings to set
     */
    public void setBookings(List<BookingRequest> bookings) {
        this.bookings = bookings;
    }

    /**
     * @return the mgRequests
     */
    public List<MeetAndGreetRequest> getMgRequests() {
        return mgRequests;
    }

    /**
     * @param mgRequests the mgRequests to set
     */
    public void setMgRequests(List<MeetAndGreetRequest> mgRequests) {
        this.mgRequests = mgRequests;
    }

    public AuthenticationRequest getAuthenReq() {
        return authenReq;
    }

    public void setAuthenReq(AuthenticationRequest authenReq) {
        this.authenReq = authenReq;
    }

    public ExperienceForm getExpForm() {
        return expForm;
    }

    public void setExpForm(ExperienceForm expForm) {
        this.expForm = expForm;
    }

    public SafetyForm getSafetyForm() {
        return safetyForm;
    }

    public void setSafetyForm(SafetyForm safetyForm) {
        this.safetyForm = safetyForm;
    }

}