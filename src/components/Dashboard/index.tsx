import { Summary } from "../Summary";
import { TableTransactions } from "../TableTransactions/TableTransactions";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TableTransactions />
        </Container>
    )
}