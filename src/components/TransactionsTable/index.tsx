import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";
import { AiFillDelete } from 'react-icons/ai';

export function TransactionsTable(){

    const { transactions, deleteTransaction } = useTransactions();

    function handleDeleteTransaction(transactionId: number){   
        deleteTransaction(transactionId);             
    }

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>{new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(transaction.amount)}</td>
                            <td>{transaction.category}</td>
                            <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
                            <td onClick={() => { handleDeleteTransaction(transaction.id) }}><AiFillDelete /></td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </Container>
    )
}