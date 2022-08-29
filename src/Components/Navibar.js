import { Navbar, Container, Row, Col, ToggleButtonGroup, ToggleButton, NavbarBrand } from 'react-bootstrap';

const Navibar = () => (
    <Container className="pb-3">
        <Row>
            <Navbar>
                <NavbarBrand className="mx-auto">
                    <span class="h2">CryptoPrices</span>
                </NavbarBrand>
            </Navbar>

        </Row>

        <Row className="pt-1">
            <Col>
                <ToggleButtonGroup
                    type="radio"
                    exclusive
                    name="options"
                    defaultValue={1}>

                    <ToggleButton id="tbg-b-1" variant="outline-primary" size="lg" className="nav-button shadow-none" value={1}>
                        <span class="nav-button-text">₽</span>
                    </ToggleButton>

                    <ToggleButton id="tbg-b-2" variant="outline-primary" size="lg" className="nav-button shadow-none" value={2}>
                        <span class="nav-button-text">$</span>
                    </ToggleButton>

                    <ToggleButton id="tbg-b-3" variant="outline-primary" size="lg" className="nav-button shadow-none" value={3}>
                        <span class="nav-button-text">€</span>
                    </ToggleButton>

                    <ToggleButton id="tbg-b-4" variant="outline-primary" size="lg" className="nav-button shadow-none" value={4}>
                        <span class="nav-button-text">£</span>
                    </ToggleButton>

                    <ToggleButton id="tbg-b-5" variant="outline-primary" size="lg" className="nav-button shadow-none" value={5}>
                        <span class="nav-button-text">₽</span>
                    </ToggleButton>
                </ToggleButtonGroup>
            </Col>
        </Row>
    </Container>
)

export default Navibar;