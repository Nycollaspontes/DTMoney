import Modal from 'react-modal';
import  {Container , ButtonModal , RadioBox } from  './styles';
import closeImg from '../../assets/close.svg'

import incomeSvg from '../../assets/income.svg'
import outcomeSvg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';


interface NewTransacitionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransacitionModalProps) {
    const {createTransaction} = useTransactions()


    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
  async  function handleNewTransaction(event:FormEvent) {
        event.preventDefault(); //prevent form from submitting
       await  createTransaction({
            title,
            amount, 
            type,
            category
        })
        
        setTitle('');
        setAmount(0);
        setCategory('');

        onRequestClose();

    }

    return (
        <Modal
            
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container
            onSubmit={handleNewTransaction}
            >
                <button
                    type="button"
                    onClick={onRequestClose}
                    className="react-modal-close"
                >
                    <img src={closeImg} alt="Fechar" />
                </button>


                <h2>Cadastrar Transacao</h2>
                <input
                    placeholder="Titulo"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input
                    type="numeric"
                    placeholder="Preço"
                    value={amount}
                    onChange={(event) => setAmount(Number(event.target.value))}
                />
                <ButtonModal>
                    <RadioBox
                        
                        type="button"
                        onClick={() =>  setType('deposit')} 
                        isActive={type === 'deposit'}
                        colorActive="green"
                    >
                        <img src={incomeSvg} alt="Entrada" />
                        <span> Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        colorActive='red'>


                        <img src={outcomeSvg} alt="Saida" />
                        <span>Saida</span>

                    </RadioBox>
                </ButtonModal>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />


                <button type="submit">
                    Cadastrar
                </button>


            </Container>
        </Modal>
    )
}