/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import java.io.Serializable;
import java.util.ArrayList;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.OneToOne;
import javax.validation.constraints.Size;

/**
 *
 * @author rachelrphy
 */
@Entity
public class BankAccount implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bankAccId;
    @Column(nullable = false)
    @Size(min = 8, max = 17)
    private String bankAccNum;
    @Column(nullable = false)
    private String bankName;
    @Column(nullable = false)
    @Size(max = 40)
    private String accName;

    //relationship with transactions
    @OneToMany(mappedBy = "bankAcc")
    private List<Payment> transactions;

    public BankAccount(String bankAccNum, String bankName, String accName) {
        this.bankAccNum = bankAccNum;
        this.bankName = bankName;
        this.accName = accName;
        this.transactions = new ArrayList<>();
    }

    public BankAccount() {
        this.transactions = new ArrayList<>();
    }

    public Long getBankAccId() {
        return bankAccId;
    }

    public void setBankAccId(Long bankAccId) {
        this.bankAccId = bankAccId;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (getBankAccId() != null ? getBankAccId().hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the bankAccId fields are not set
        if (!(object instanceof BankAccount)) {
            return false;
        }
        BankAccount other = (BankAccount) object;
        if ((this.getBankAccId() == null && other.getBankAccId() != null) || (this.getBankAccId() != null && !this.bankAccId.equals(other.bankAccId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entity.BankAccount[ id=" + getBankAccId() + " ]";
    }

    /**
     * @return the transactions
     */
    public List<Payment> getTransactions() {
        return transactions;
    }

    /**
     * @param transactions the transactions to set
     */
    public void setTransactions(List<Payment> transactions) {
        this.transactions = transactions;
    }

    /**
     * @return the bankAccNum
     */
    public String getBankAccNum() {
        return bankAccNum;
    }

    /**
     * @param bankAccNum the bankAccNum to set
     */
    public void setBankAccNum(String bankAccNum) {
        this.bankAccNum = bankAccNum;
    }

    /**
     * @return the bankName
     */
    public String getBankName() {
        return bankName;
    }

    /**
     * @param bankName the bankName to set
     */
    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    /**
     * @return the accName
     */
    public String getAccName() {
        return accName;
    }

    /**
     * @param accName the accName to set
     */
    public void setAccName(String accName) {
        this.accName = accName;
    }
}
