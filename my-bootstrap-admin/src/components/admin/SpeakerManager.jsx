import React, { useState, useEffect } from 'react';
import { useAppData } from '../../context/AppDataContext';
import { Card, ListGroup, Button, Form, Alert, Badge, Row, Col } from 'react-bootstrap';
import { Trash2, UserPlus, Save, Users, User, Mic, Plus } from 'lucide-react';

const SpeakerManager = () => {
  const { appData, updateData } = useAppData();
  const [speakers, setSpeakers] = useState(appData.speakers);
  const [newSpeaker, setNewSpeaker] = useState({ name: '', title: '', topic: '' });
  const [error, setError] = useState('');

  // Synchronize with context data
  useEffect(() => {
    setSpeakers(appData.speakers);
  }, [appData.speakers]);

  const handleAdd = () => {
    // Validation
    if (!newSpeaker.name.trim() || !newSpeaker.title.trim()) {
      setError('Name and title are required fields');
      return;
    }

    // Check for duplicate names
    if (speakers.some(s => s.name.toLowerCase() === newSpeaker.name.trim().toLowerCase())) {
      setError('A speaker with this name already exists');
      return;
    }

    // Better ID generation
    const allIds = speakers.map(s => s.id);
    const newId = allIds.length > 0 ? Math.max(...allIds) + 1 : 1;

    const speakerToAdd = {
      id: newId,
      name: newSpeaker.name.trim(),
      title: newSpeaker.title.trim(),
      topic: newSpeaker.topic.trim()
    };

    setSpeakers([...speakers, speakerToAdd]);
    setNewSpeaker({ name: '', title: '', topic: '' });
    setError('');
  };

  const handleRemove = (id) => {
    setSpeakers(speakers.filter(s => s.id !== id));
  };

  const handleSave = async () => {
    try {
      await updateData('speakers', speakers);
      alert('Speakers saved successfully!');
    } catch (error) {
      alert('Error saving speakers. Please try again.');
    }
  };

  return (
    <Card className="border-0 shadow-sm h-100">
      <Card.Header className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <Users size={20} className="me-2" />
          Speaker Management
        </div>
        <Badge bg="primary" className="rounded-pill">
          {speakers.length} speakers
        </Badge>
      </Card.Header>

      <Card.Body>
        {error && <Alert variant="danger" className="mb-4">{error}</Alert>}

        {/* Speakers List */}
        <div className="mb-4" style={{ maxHeight: '300px', overflowY: 'auto' }}>
          {speakers.length > 0 ? (
            <ListGroup className="list-group-flush">
              {speakers.map((s) => (
                <ListGroup.Item key={s.id} className="px-0 border-start-0 border-end-0">
                  <Row className="align-items-center">
                    <Col>
                      <div className="d-flex align-items-start">
                        <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                          <User size={20} className="text-primary" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1 fw-semibold">{s.name}</h6>
                          <div className="d-flex align-items-center text-muted small mb-1">
                            <User size={14} className="me-1" />
                            {s.title}
                          </div>
                          {s.topic && (
                            <div className="d-flex align-items-center text-primary small">
                              <Mic size={14} className="me-1" />
                              {s.topic}
                            </div>
                          )}
                        </div>
                      </div>
                    </Col>
                    <Col xs="auto">
                      <Button
                        variant="link"
                        size="sm"
                        onClick={() => handleRemove(s.id)}
                        className="text-danger p-1"
                        title="Delete speaker"
                      >
                        <Trash2 size={18} />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <div className="text-center py-4 text-muted">
              <Users size={48} className="mb-3 opacity-50" />
              <p className="mb-0">No speakers added yet</p>
              <small>Add your first speaker below</small>
            </div>
          )}
        </div>

        {/* Add New Speaker Form */}
        <div className="border-top pt-4">
          <h6 className="d-flex align-items-center mb-3">
            <Plus size={16} className="me-2 text-success" />
            Add New Speaker
          </h6>

          <Row className="g-2">
            <Col md={6}>
              <Form.Control
                placeholder="Full Name *"
                value={newSpeaker.name}
                onChange={e => setNewSpeaker({...newSpeaker, name: e.target.value})}
                className="mb-2"
              />
            </Col>
            <Col md={6}>
              <Form.Control
                placeholder="Title/Position *"
                value={newSpeaker.title}
                onChange={e => setNewSpeaker({...newSpeaker, title: e.target.value})}
                className="mb-2"
              />
            </Col>
            <Col md={12}>
              <Form.Control
                placeholder="Speaking Topic"
                value={newSpeaker.topic}
                onChange={e => setNewSpeaker({...newSpeaker, topic: e.target.value})}
                className="mb-2"
              />
            </Col>
          </Row>

          <Button
            variant="success"
            className="w-100 mt-2"
            onClick={handleAdd}
            disabled={!newSpeaker.name.trim() || !newSpeaker.title.trim()}
          >
            <UserPlus size={18} className="me-2" />
            Add Speaker
          </Button>
        </div>
      </Card.Body>

      <Card.Footer className="d-flex justify-content-between align-items-center">
        <small className="text-muted">
          {speakers.length} speaker{speakers.length !== 1 ? 's' : ''} configured
        </small>
        <Button variant="primary" onClick={handleSave} className="px-4">
          <Save size={16} className="me-2"/>
          Save Changes
        </Button>
      </Card.Footer>
    </Card>
  );
};
export default SpeakerManager;