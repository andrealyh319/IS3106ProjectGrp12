/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;

/**
 *
 * @author Andrea
 */
@Entity
public class Pet implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long petId;

    // pet details
    @Column
    private byte typeOfPet;
    @Column
    private String name;
    @Column
    private String weight;
    @Column
    private int ageInYears;
    @Column
    private int ageInMonths;
    @Column
    private byte gender;
    @Column
    private String breed;

    // addnl info
    @Column
    private byte microchip;
    @Column
    private byte spayedOrNeutered;
    @Column
    private byte houseTrained;
    @Column
    private byte friendlyWithChildren;
    @Column
    private byte friendlyWithDogs;
    @Column
    private byte friendlyWithCats;
    @Column
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date adoptionDate;
    @Column
    private String petDescription;

    // care info
    @Column
    private byte pottyBreakSchedule;
    @Column
    private byte energyLevel;
    @Column
    private byte feedingSchedule;
    @Column
    private byte timeCanBeLeftAlone;
    @Column
    private byte medication;
    @Column
    private String additionalSitterInformation;

    // vet info
    @Column
    private String vetDetails;
    
    @Column(nullable = true)
    @Lob
    @Basic(fetch = FetchType.LAZY)
    private byte[] photos;

    @ManyToOne
    private PetParent parent;

    public Long getPetId() {
        return petId;
    }

    public void setPetId(Long petId) {
        this.petId = petId;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (petId != null ? petId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the petId fields are not set
        if (!(object instanceof Pet)) {
            return false;
        }
        Pet other = (Pet) object;
        if ((this.petId == null && other.petId != null) || (this.petId != null && !this.petId.equals(other.petId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entity.Pet[ id=" + petId + " ]";
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public int getAgeInYears() {
        return ageInYears;
    }

    public void setAgeInYears(int ageInYears) {
        this.ageInYears = ageInYears;
    }

    public int getAgeInMonths() {
        return ageInMonths;
    }

    public void setAgeInMonths(int ageInMonths) {
        this.ageInMonths = ageInMonths;
    }

    public byte getGender() {
        return gender;
    }

    public void setGender(byte gender) {
        this.gender = gender;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public byte getMicrochip() {
        return microchip;
    }

    public void setMicrochip(byte microchip) {
        this.microchip = microchip;
    }

    public byte getSpayedOrNeutered() {
        return spayedOrNeutered;
    }

    public void setSpayedOrNeutered(byte spayedOrNeutered) {
        this.spayedOrNeutered = spayedOrNeutered;
    }

    public byte getHouseTrained() {
        return houseTrained;
    }

    public void setHouseTrained(byte houseTrained) {
        this.houseTrained = houseTrained;
    }

    public byte getFriendlyWithChildren() {
        return friendlyWithChildren;
    }

    public void setFriendlyWithChildren(byte friendlyWithChildren) {
        this.friendlyWithChildren = friendlyWithChildren;
    }

    public byte getFriendlyWithDogs() {
        return friendlyWithDogs;
    }

    public void setFriendlyWithDogs(byte friendlyWithDogs) {
        this.friendlyWithDogs = friendlyWithDogs;
    }

    public byte getFriendlyWithCats() {
        return friendlyWithCats;
    }

    public void setFriendlyWithCats(byte friendlyWithCats) {
        this.friendlyWithCats = friendlyWithCats;
    }

    public Date getAdoptionDate() {
        return adoptionDate;
    }

    public void setAdoptionDate(Date adoptionDate) {
        this.adoptionDate = adoptionDate;
    }

    public String getPetDescription() {
        return petDescription;
    }

    public void setPetDescription(String petDescription) {
        this.petDescription = petDescription;
    }

    public byte getPottyBreakSchedule() {
        return pottyBreakSchedule;
    }

    public void setPottyBreakSchedule(byte pottyBreakSchedule) {
        this.pottyBreakSchedule = pottyBreakSchedule;
    }

    public byte getEnergyLevel() {
        return energyLevel;
    }

    public void setEnergyLevel(byte energyLevel) {
        this.energyLevel = energyLevel;
    }

    public byte getFeedingSchedule() {
        return feedingSchedule;
    }

    public void setFeedingSchedule(byte feedingSchedule) {
        this.feedingSchedule = feedingSchedule;
    }

    public byte getTimeCanBeLeftAlone() {
        return timeCanBeLeftAlone;
    }

    public void setTimeCanBeLeftAlone(byte timeCanBeLeftAlone) {
        this.timeCanBeLeftAlone = timeCanBeLeftAlone;
    }

    public byte getMedication() {
        return medication;
    }

    public void setMedication(byte medication) {
        this.medication = medication;
    }

    public String getAdditionalSitterInformation() {
        return additionalSitterInformation;
    }

    public void setAdditionalSitterInformation(String additionalSitterInformation) {
        this.additionalSitterInformation = additionalSitterInformation;
    }

    public String getVetDetails() {
        return vetDetails;
    }

    public void setVetDetails(String vetDetails) {
        this.vetDetails = vetDetails;
    }

    public byte[] getPhotos() {
        return photos;
    }

    public void setPhotos(byte[] photos) {
        this.photos = photos;
    } 

    public PetParent getParent() {
        return parent;
    }

    public void setParent(PetParent parent) {
        this.parent = parent;
    }

    public byte getTypeOfPet() {
        return typeOfPet;
    }

    public void setTypeOfPet(byte typeOfPet) {
        this.typeOfPet = typeOfPet;
    }

}
