import { useState } from 'react';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/GlobalStyle';
import { TransactionsProvider } from './/hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
    

  function newTransactionModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <TransactionsProvider>
      <Header newTransactionModal={newTransactionModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal isOpen={modalIsOpen} onRequestClose={closeModal} />

      </TransactionsProvider >
      );
}


