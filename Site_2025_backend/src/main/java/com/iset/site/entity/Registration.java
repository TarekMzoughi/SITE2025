package com.iset.site.entity;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.List;

@Entity
@Table(name = "registrations")
public class Registration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String fullName;
    private String institution;
    private String position;
    private String email;
    private String phone;
    
    private boolean withArticle;
    private boolean withAccompanying;
    
    @ElementCollection
    private List<String> accompanyingPersons;
    
    private String paymentMethod;
    private boolean withAccommodation;
    private double paymentAmount;
    private String paymentProofPath;
    
    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getInstitution() {
        return institution;
    }

    public void setInstitution(String institution) {
        this.institution = institution;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public boolean isWithArticle() {
        return withArticle;
    }

    public void setWithArticle(boolean withArticle) {
        this.withArticle = withArticle;
    }

    public boolean isWithAccompanying() {
        return withAccompanying;
    }

    public void setWithAccompanying(boolean withAccompanying) {
        this.withAccompanying = withAccompanying;
    }

    public List<String> getAccompanyingPersons() {
        return accompanyingPersons;
    }

    public void setAccompanyingPersons(List<String> accompanyingPersons) {
        this.accompanyingPersons = accompanyingPersons;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public boolean isWithAccommodation() {
        return withAccommodation;
    }

    public void setWithAccommodation(boolean withAccommodation) {
        this.withAccommodation = withAccommodation;
    }

    public double getPaymentAmount() {
        return paymentAmount;
    }

    public void setPaymentAmount(double paymentAmount) {
        this.paymentAmount = paymentAmount;
    }

    public String getPaymentProofPath() {
        return paymentProofPath;
    }

    public void setPaymentProofPath(String paymentProofPath) {
        this.paymentProofPath = paymentProofPath;
    }
}