import {
    Container,
    Row, Col
} from 'react-bootstrap';

import TopTitle from './ui/TopTitle';
import CurrencySwitch from './ui/CurrencySwitch';

const Header = () => (
    <Container>
        <TopTitle text="CryptoPrices" />

        <Row className="pt-1">
            <Col>
                <CurrencySwitch />
            </Col>
        </Row>
    </Container>
)

export default Header;