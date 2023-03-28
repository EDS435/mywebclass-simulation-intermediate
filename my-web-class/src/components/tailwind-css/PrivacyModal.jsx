import { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'

const PrivacyModal = ({ onAgree }) => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const agreed = localStorage.getItem('privacyPolicyAgreed') === 'true'
    if (!agreed) {
      setShowModal(true)
    }
  }, [])

  const handleAgree = () => {
    localStorage.setItem('privacyPolicyAgreed', 'true')
    setShowModal(false)
    onAgree()
  }

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-lg font-bold">Privacy Policy</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="mb-2">Please read our <a href="privacy.html" target="_blank" className="text-blue-500 hover:underline">Privacy Policy</a> carefully before using our website.</p>
        <p className="mb-2">Do you agree to our Privacy Policy?</p>
      </Modal.Body>
      <Modal.Footer className="flex justify-end">
        <Button variant="outline-secondary" onClick={() => setShowModal(false)} className="w-full md:w-auto mr-2">
          Disagree
        </Button>
        <Button variant="primary" onClick={handleAgree} className="w-full md:w-auto">
          Agree
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PrivacyModal