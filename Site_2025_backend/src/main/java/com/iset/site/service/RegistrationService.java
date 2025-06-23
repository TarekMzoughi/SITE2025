package com.iset.site.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iset.site.entity.Registration;
import com.iset.site.repository.RegistrationRepository;

import java.util.List;

@Service
public class RegistrationService {
    private final RegistrationRepository registrationRepository;

    @Autowired
    public RegistrationService(RegistrationRepository registrationRepository) {
        this.registrationRepository = registrationRepository;
    }

    public Registration saveRegistration(Registration registration) {
        return registrationRepository.save(registration);
    }

    public List<Registration> getAllRegistrations() {
        return registrationRepository.findAll();
    }

    public Registration getRegistrationById(Long id) {
        return registrationRepository.findById(id).orElse(null);
    }

    public void deleteRegistration(Long id) {
        registrationRepository.deleteById(id);
    }

    public Registration updateRegistration(Long id, Registration registrationDetails) {
        Registration registration = registrationRepository.findById(id).orElse(null);
        if (registration != null) {
            registration.setFullName(registrationDetails.getFullName());
            registration.setInstitution(registrationDetails.getInstitution());
            registration.setPosition(registrationDetails.getPosition());
            registration.setEmail(registrationDetails.getEmail());
            registration.setPhone(registrationDetails.getPhone());
            registration.setWithArticle(registrationDetails.isWithArticle());
            registration.setWithAccompanying(registrationDetails.isWithAccompanying());
            registration.setAccompanyingPersons(registrationDetails.getAccompanyingPersons());
            registration.setPaymentMethod(registrationDetails.getPaymentMethod());
            registration.setWithAccommodation(registrationDetails.isWithAccommodation());
            registration.setPaymentAmount(registrationDetails.getPaymentAmount());
            registration.setPaymentProofPath(registrationDetails.getPaymentProofPath());
            
            return registrationRepository.save(registration);
        }
        return null;
    }
}