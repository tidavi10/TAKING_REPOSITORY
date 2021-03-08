import React from 'react';
import { FiAlertCircle, FiXCircle, FiCheckCircle, FiX } from 'react-icons/fi';

import { Container, Toast } from './styles';

function ToastContainer() {
  return <Container>
      <Toast hasDescription>
          <FiAlertCircle size={20} />

          <div>
              <strong>Houve um erro</strong>
              <p>Não foi possível logar. Verifique seus dados por favor.</p>
          </div>

          <button type="button">
            <FiX size={18} />
          </button>
      </Toast>

      <Toast type="success" hasDescription={false}>
          <FiCheckCircle size={20} />

          <div>
              <strong>Houve um erro</strong>
          </div>

          <button type="button">
            <FiX size={18} />
          </button>
      </Toast>

      <Toast type="error" hasDescription>
          <FiXCircle size={20} />

          <div>
              <strong>Houve um erro</strong>
              <p>Não foi possível logar. Verifique seus dados por favor.</p>
          </div>

          <button type="button">
            <FiX size={18} />
          </button>
      </Toast>
  </Container>;
}

export default ToastContainer;