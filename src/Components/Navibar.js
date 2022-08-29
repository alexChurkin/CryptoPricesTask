import { Navbar, Container, Row, Col, ToggleButtonGroup, ToggleButton, NavbarBrand } from 'react-bootstrap';

const Navibar = () => (
    <>
        <Container>
            <Row>
                <Col>
                    <span class="navbar-brand h1">CryptoPrices</span>
                </Col>
            </Row>

            <Row>
                <Col>
                    <ToggleButtonGroup
                        type="radio"
                        exclusive
                        name="options"
                        defaultValue={1}>

                        <ToggleButton id="tbg-radio-1" variant="outline-primary" className="shadow-none" value={1}>
                            ₽
                        </ToggleButton>
                        <ToggleButton id="tbg-radio-2" variant="outline-primary" className="shadow-none" value={2}>
                            $
                        </ToggleButton>
                        <ToggleButton id="tbg-radio-3" variant="outline-primary" className="shadow-none" value={3}>
                            €
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Col>
            </Row>
        </Container>
    </>
)

export default Navibar;