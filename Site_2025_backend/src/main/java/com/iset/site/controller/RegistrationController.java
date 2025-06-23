package com.iset.site.controller;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.iset.site.entity.Registration;
import com.iset.site.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/registrations")
public class RegistrationController {

    private final RegistrationService registrationService;
    private final ObjectMapper objectMapper;
    private static final String UPLOAD_DIR = "uploads/payment-proofs/";

    @Autowired
    public RegistrationController(RegistrationService registrationService , ObjectMapper objectMapper, ObjectMapper objectMapper1) {
        this.registrationService = registrationService;
        this.objectMapper = objectMapper1;
    }
    @PostMapping
    public ResponseEntity<Registration> createRegistration(
            @RequestPart("registration") String registrationJson,
            @RequestPart(value = "paymentProof", required = false) MultipartFile file) {
        try {
            // <-- CHANGE 5: Add this block to convert the String to an object
            Registration registration = objectMapper.readValue(registrationJson, Registration.class);

            // 1. Handle the file upload (this logic remains the same)
            if (file != null && !file.isEmpty()) {
                Files.createDirectories(Paths.get(UPLOAD_DIR));
                String originalFileName = file.getOriginalFilename() != null ? file.getOriginalFilename() : "file";
                String uniqueFileName = UUID.randomUUID().toString() + "_" + originalFileName.replaceAll("\\s+", "_");
                Path filePath = Paths.get(UPLOAD_DIR + uniqueFileName);
                Files.write(filePath, file.getBytes());
                registration.setPaymentProofPath(filePath.toString());
            }

            // 2. Save the complete registration object (this logic remains the same)
            Registration savedRegistration = registrationService.saveRegistration(registration);
            return ResponseEntity.ok(savedRegistration);

        } catch (IOException e) {
            e.printStackTrace();
            // This will now catch errors from file I/O or from bad JSON
            return ResponseEntity.badRequest().build(); // More specific error than 500
        }
    
    }



    @GetMapping
    public List<Registration> getAllRegistrations() {
        return registrationService.getAllRegistrations();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Registration> getRegistrationById(@PathVariable Long id) {
        Registration registration = registrationService.getRegistrationById(id);
        if (registration != null) {
            return ResponseEntity.ok(registration);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Registration> updateRegistration(@PathVariable Long id, @RequestBody Registration registrationDetails) {

        Registration updatedRegistration = registrationService.updateRegistration(id, registrationDetails);
        if (updatedRegistration != null) {
            return ResponseEntity.ok(updatedRegistration);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRegistration(@PathVariable Long id) {
        registrationService.deleteRegistration(id);
        return ResponseEntity.noContent().build();
    }
}