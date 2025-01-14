/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import enumeration.AdditionalServiceEnum;
import enumeration.FreqEnum;
import enumeration.PetEnum;
import java.io.Serializable;
import java.sql.Time;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Min;

/**
 *
 * @author chels
 */
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class DropInSearch extends Search implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date time;
    @Column(nullable = true)
    private AdditionalServiceEnum additionalService;
    @Column(nullable = false)
    private FreqEnum frequencyEnum;
    @Column(nullable = false)
    @Min(0)
    private int numOfVisits;
    
    public DropInSearch() {
      
    }
    
    public DropInSearch(Time time, AdditionalServiceEnum additionalService, FreqEnum frequencyEnum, int numOfVisits, Long id, Date startDate, Date endDate, int numPets, PetEnum petType, int dogSize, double rate, PetParent parent) {
        super(id, startDate, endDate, numPets, petType, dogSize, rate, parent);
        this.time = time;
        this.additionalService = additionalService;
        this.frequencyEnum = frequencyEnum;
        this.numOfVisits = numOfVisits;
    }

    public int getNumOfVisits() {
        return numOfVisits;
    }

    public void setNumOfVisits(int numOfVisits) {
        this.numOfVisits = numOfVisits;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public AdditionalServiceEnum getAdditionalService() {
        return additionalService;
    }

    public void setAdditionalService(AdditionalServiceEnum additionalService) {
        this.additionalService = additionalService;
    }

    public FreqEnum getFrequencyEnum() {
        return frequencyEnum;
    }

    public void setFrequencyEnum(FreqEnum frequencyEnum) {
        this.frequencyEnum = frequencyEnum;
    }
    
}
