import React, { useState, useEffect } from 'react';
import { useAppData } from '../../context/AppDataContext';
import { Card, Form, Button, Image, Spinner, Alert, Row, Col } from 'react-bootstrap';
import { Save, Settings, Globe, Calendar, Image as ImageIcon, Upload, Info, Shield } from 'lucide-react';

const GeneralSettings = () => {
  const { appData, updateData } = useAppData();
  const [siteName, setSiteName] = useState(appData.siteName);
  const [registrationStartDate, setRegistrationStartDate] = useState(appData.registrationStartDate);
  const [registrationEndDate, setRegistrationEndDate] = useState(appData.registrationEndDate);
  const [logo, setLogo] = useState(appData.logoUrl);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  // Synchronize with context data
  useEffect(() => {
    setSiteName(appData.siteName);
    setRegistrationStartDate(appData.registrationStartDate);
    setRegistrationEndDate(appData.registrationEndDate);
    setLogo(appData.logoUrl);
  }, [appData.siteName, appData.registrationStartDate, appData.registrationEndDate, appData.logoUrl]);

  const handleLogoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Please select a valid image file');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('Image file size must be less than 5MB');
        return;
      }

      setLogo(URL.createObjectURL(file));
      setError('');
    }
  };

  const handleSave = async () => {
    // Validation
    if (!siteName.trim()) {
      setError('Site name is required');
      return;
    }

    setIsSaving(true);
    setError('');

    try {
      await Promise.all([
        updateData('siteName', siteName.trim()),
        updateData('registrationStartDate', registrationStartDate.trim()),
        updateData('registrationEndDate', registrationEndDate.trim()),
        updateData('logoUrl', logo)
      ]);
      alert('Settings saved successfully!');
    } catch (error) {
      setError('Error saving settings. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Card className="border-0 shadow-sm">
      <Card.Header className="d-flex align-items-center">
        <Settings size={20} className="me-2" />
        Site & Registration Configuration
      </Card.Header>
      <Card.Body>
        {error && <Alert variant="danger" className="mb-4">{error}</Alert>}

        <Form>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="d-flex align-items-center">
                  <Globe size={16} className="me-2 text-primary" />
                  Site Name *
                </Form.Label>
                <Form.Control
                  type="text"
                  value={siteName}
                  onChange={(e) => setSiteName(e.target.value)}
                  placeholder="Enter your site name"
                  required
                  className="form-control-lg"
                />
                <Form.Text className="text-muted">
                  This will appear in the navigation and page titles
                </Form.Text>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="d-flex align-items-center">
                  <Calendar size={16} className="me-2 text-success" />
                  Registration Start Date
                </Form.Label>
                <Form.Control
                  type="date"
                  value={registrationStartDate}
                  onChange={(e) => setRegistrationStartDate(e.target.value)}
                  className="form-control-lg"
                />
                <Form.Text className="text-muted">
                  When registration opens
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-4">
                <Form.Label className="d-flex align-items-center">
                  <Calendar size={16} className="me-2 text-danger" />
                  Registration End Date
                </Form.Label>
                <Form.Control
                  type="date"
                  value={registrationEndDate}
                  onChange={(e) => setRegistrationEndDate(e.target.value)}
                  className="form-control-lg"
                />
                <Form.Text className="text-muted">
                  When registration closes
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-4">
            <Form.Label className="d-flex align-items-center">
              <ImageIcon size={16} className="me-2 text-primary" />
              Site Logo
            </Form.Label>
            <div className="p-4 border border-2 border-dashed rounded-3 bg-light">
              <Row className="align-items-center">
                <Col md={3} className="text-center">
                  <div className="position-relative d-inline-block">
                    <Image
                      src={logo}
                      roundedCircle
                      width="80"
                      height="80"
                      className="border border-3 border-white shadow-sm"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjhGOUZBIiByeD0iNDAiLz4KPHBhdGggZD0iTTQwIDI1QzUyLjUgMjUgNjMgMzUuNSA2MyA0OEM2MyA2MC41IDUyLjUgNzEgNDAgNzFDMjcuNSA3MSAxNyA2MC41IDE3IDQ4QzE3IDM1LjUgMjcuNSAyNSA0MCAyNVoiIGZpbGw9IiNFNUU3RUIiLz4KPHRleHQgeD0iNDAiIHk9IjUyIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkxPR088L3RleHQ+Cjwvc3ZnPgo=';
                      }}
                    />
                    <div className="position-absolute bottom-0 end-0 bg-primary rounded-circle p-1">
                      <Upload size={12} className="text-white" />
                    </div>
                  </div>
                </Col>
                <Col md={9}>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleLogoChange}
                    className="mb-2"
                  />
                  <div className="d-flex align-items-center text-muted small">
                    <Info size={14} className="me-2" />
                    Upload an image file (max 5MB). Supported: JPG, PNG, GIF, SVG
                  </div>
                </Col>
              </Row>
            </div>
          </Form.Group>
        </Form>
      </Card.Body>

      <Card.Footer className="d-flex justify-content-between align-items-center">
        <small className="text-muted">
          <Shield size={14} className="me-1" />
          Changes are saved automatically to browser storage
        </small>
        <Button
          variant="primary"
          onClick={handleSave}
          disabled={isSaving}
          className="px-4"
        >
          {isSaving ? (
            <>
              <Spinner as="span" animation="border" size="sm" className="me-2" />
              Saving...
            </>
          ) : (
            <>
              <Save size={18} className="me-2" />
              Save Settings
            </>
          )}
        </Button>
      </Card.Footer>
    </Card>
  );
};
export default GeneralSettings;