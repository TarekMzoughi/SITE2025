
const BASE_URL = 'http://localhost:8083/api/public';

class MainApiService {
  constructor() {
    this.baseURL = BASE_URL;
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Get all site data in one call
  async getSiteData() {
    return this.request('/site-data');
  }

  // Get site configuration
  async getSiteConfig() {
    return this.request('/config');
  }

  // Get speakers
  async getSpeakers() {
    return this.request('/speakers');
  }

  // Get sessions/schedule
  async getSessions() {
    return this.request('/sessions');
  }

  // Submit registration
  async submitRegistration(registration, paymentProofFile) {
    if (paymentProofFile) {
      // If there's a file, use FormData
      const formData = new FormData();
      formData.append('registration', JSON.stringify(registration));
      formData.append('paymentProof', paymentProofFile);

      return fetch(`http://localhost:8083/api/registrations`, {
        method: 'POST',
        body: formData,
      }).then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      });
    } else {
      // No file, use regular JSON
      return this.request('/register', {
        method: 'POST',
        body: JSON.stringify(registration),
      });
    }
  }

  // Check registration status
  async getRegistrationStatus() {
    return this.request('/registration-status');
  }

  // Get public statistics
  async getPublicStats() {
    return this.request('/stats');
  }
}

export default new MainApiService();
