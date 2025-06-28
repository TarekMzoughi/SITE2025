import React, { useState, useEffect } from 'react';
import { useAppData } from '../../context/AppDataContext';
import { Card, ListGroup, Button, Form, Accordion, Alert, Badge, Row, Col, Spinner } from 'react-bootstrap';
import { Trash2, Save, PlusCircle, Calendar, Clock, Plus, CalendarDays } from 'lucide-react';

const ScheduleManager = () => {
  const { appData, isLoading, error: apiError, updateData } = useAppData();
  const [schedule, setSchedule] = useState(appData?.schedule || {});
  const [newDay, setNewDay] = useState('');
  const [sessionInputs, setSessionInputs] = useState({});
  const [localError, setLocalError] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  // Synchronize with context data
  useEffect(() => {
    if (appData?.schedule) {
      setSchedule(appData.schedule);
    }
  }, [appData?.schedule]);

  // Initialize session inputs for each day
  useEffect(() => {
    const inputs = {};
    Object.keys(schedule || {}).forEach(day => {
      inputs[day] = { time: '', event: '' };
    });
    setSessionInputs(inputs);
  }, [schedule]);

  const handleAddSession = (day) => {
    const sessionInput = sessionInputs[day];
    if (!sessionInput?.time || !sessionInput?.event) {
      setLocalError('Please fill in both time and event fields');
      return;
    }

    const daySessions = schedule[day] || [];
    const allIds = Object.values(schedule || {}).flat().map(s => s.id);
    const newId = allIds.length > 0 ? Math.max(...allIds) + 1 : 1;

    const updatedSessions = [...daySessions, {
      id: newId,
      time: sessionInput.time.trim(),
      event: sessionInput.event.trim()
    }];

    setSchedule({ ...schedule, [day]: updatedSessions });
    setSessionInputs(prev => ({ ...prev, [day]: { time: '', event: '' } }));
    setLocalError('');
  };

  const handleRemoveSession = (day, sessionId) => {
    const updatedSessions = (schedule[day] || []).filter(s => s.id !== sessionId);
    setSchedule({ ...schedule, [day]: updatedSessions });
  };

  const handleAddDay = () => {
    if (!newDay.trim()) {
      setLocalError('Please enter a day name');
      return;
    }

    if (schedule[newDay.trim()]) {
      setLocalError('This day already exists');
      return;
    }

    const dayName = newDay.trim();
    setSchedule({ ...schedule, [dayName]: [] });
    setSessionInputs(prev => ({ ...prev, [dayName]: { time: '', event: '' } }));
    setNewDay('');
    setLocalError('');
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await updateData('schedule', schedule);
      alert('Schedule saved successfully!');
    } catch (error) {
      setLocalError('Error saving schedule. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const updateSessionInput = (day, field, value) => {
    setSessionInputs(prev => ({
      ...prev,
      [day]: { ...(prev[day] || {}), [field]: value }
    }));
  };

  if (isLoading) {
    return (
      <Card className="border-0 shadow-sm">
        <Card.Body className="text-center py-5">
          <Spinner animation="border" variant="primary" />
          <p className="mt-3">Loading schedule data...</p>
        </Card.Body>
      </Card>
    );
  }

  if (apiError) {
    return (
      <Card className="border-0 shadow-sm">
        <Card.Body className="text-center py-5">
          <Alert variant="danger">
            Failed to load schedule data: {apiError.message}
          </Alert>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-sm">
      <Card.Header className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <CalendarDays size={20} className="me-2" />
          Program Schedule Management
        </div>
        <Badge bg="secondary" className="rounded-pill">
          {Object.keys(schedule || {}).length} days
        </Badge>
      </Card.Header>

      <Card.Body>
        {(localError || apiError) && <Alert variant="danger" className="mb-4">{localError || apiError.message}</Alert>}

        <Accordion defaultActiveKey="0" className="mb-4">
          {Object.entries(schedule || {}).map(([day, sessions], index) => (
            <Accordion.Item eventKey={index.toString()} key={day} className="border rounded-3 mb-3">
              <Accordion.Header>
                <div className="d-flex align-items-center w-100">
                  <Calendar size={18} className="me-2 text-primary" />
                  <span className="fw-semibold">{day}</span>
                  <Badge bg="primary" className="ms-auto me-3 rounded-pill">
                    {(sessions || []).length} session{(sessions || []).length !== 1 ? 's' : ''}
                  </Badge>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <ListGroup className="mb-4">
                  {(sessions || []).map((session) => (
                    <ListGroup.Item key={session.id} className="border-0 bg-light rounded-3 mb-2">
                      <Row className="align-items-center">
                        <Col>
                          <div className="d-flex align-items-center">
                            <div className="bg-primary bg-opacity-10 rounded-3 p-2 me-3">
                              <Clock size={16} className="text-primary" />
                            </div>
                            <div>
                              <div className="fw-semibold text-primary">{session.time}</div>
                              <div className="text-dark">{session.event}</div>
                            </div>
                          </div>
                        </Col>
                        <Col xs="auto">
                          <Button
                            variant="link"
                            size="sm"
                            onClick={() => handleRemoveSession(day, session.id)}
                            className="text-danger p-1"
                            title="Delete session"
                          >
                            <Trash2 size={18} />
                          </Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                  {(sessions || []).length === 0 && (
                    <ListGroup.Item className="text-center text-muted border-0 bg-light rounded-3">
                      <Clock size={24} className="mb-2 opacity-50" />
                      <div>No sessions scheduled for this day</div>
                      <small>Add your first session below</small>
                    </ListGroup.Item>
                  )}
                </ListGroup>

                <div className="border-top pt-3">
                  <h6 className="d-flex align-items-center mb-3">
                    <Plus size={16} className="me-2 text-success" />
                    Add Session to {day}
                  </h6>
                  <Row className="g-2">
                    <Col md={4}>
                      <Form.Control
                        placeholder="Time (e.g., 10:00-11:00)"
                        value={(sessionInputs[day] || {}).time || ''}
                        onChange={e => updateSessionInput(day, 'time', e.target.value)}
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Control
                        placeholder="Event Name"
                        value={(sessionInputs[day] || {}).event || ''}
                        onChange={e => updateSessionInput(day, 'event', e.target.value)}
                      />
                    </Col>
                    <Col md={2}>
                      <Button
                        variant="success"
                        className="w-100"
                        onClick={() => handleAddSession(day)}
                        disabled={!(sessionInputs[day]?.time) || !(sessionInputs[day]?.event)}
                      >
                        <Plus size={16} />
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        <div className="border-top pt-4">
          <h6 className="d-flex align-items-center mb-3">
            <PlusCircle size={16} className="me-2 text-info" />
            Add New Day
          </h6>
          <Row className="g-2">
            <Col md={8}>
              <Form.Control
                placeholder="Day name (e.g., October 27, 2025)"
                value={newDay}
                onChange={e => setNewDay(e.target.value)}
              />
            </Col>
            <Col md={4}>
              <Button
                variant="info"
                className="w-100"
                onClick={handleAddDay}
                disabled={!newDay.trim()}
              >
                <PlusCircle size={16} className="me-2" />
                Add Day
              </Button>
            </Col>
          </Row>
        </div>
      </Card.Body>

      <Card.Footer className="d-flex justify-content-between align-items-center">
        <small className="text-muted">
          {Object.keys(schedule || {}).length} day{Object.keys(schedule || {}).length !== 1 ? 's' : ''} with {Object.values(schedule || {}).flat().length} total sessions
        </small>
        <Button variant="primary" onClick={handleSave} className="px-4" disabled={isSaving}>
          {isSaving ? (
            <>
              <Spinner as="span" animation="border" size="sm" className="me-2" />
              Saving...
            </>
          ) : (
            <>
              <Save size={16} className="me-2"/>
              Save Schedule
            </>
          )}
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ScheduleManager;