import {
    Navbar,
    Container,
    Row, Col,
    ToggleButtonGroup,
    ToggleButton, NavbarBrand
} from 'react-bootstrap';

import styles from './Header.module.css';

const Navibar = () => (
    <Container>
        <Row>
            <Navbar>
                <NavbarBrand className="mx-auto">
                    <span className={styles.navHeaderText}>CryptoPrices</span>
                </NavbarBrand>
            </Navbar>

        </Row>

        <Row className="pt-1">
            <Col>
                <ToggleButtonGroup
                    type="radio"
                    exclusive="true"
                    name="options"
                    defaultValue={1}>

                    <ToggleButton id="tbg-b-1" variant="outline-primary" size="lg"
                        className={`${styles.navButton} shadow-none`} value={1}>
                        <span className={styles.navButtonText}>₽</span>
                    </ToggleButton>

                    <ToggleButton id="tbg-b-2" variant="outline-primary" size="lg"
                        className={`${styles.navButton} shadow-none`} value={2}>
                        <span className={styles.navButtonText}>$</span>
                    </ToggleButton>

                    <ToggleButton id="tbg-b-3" variant="outline-primary" size="lg"
                        className={`${styles.navButton} shadow-none`} value={3}>
                        <span className={styles.navButtonText}>€</span>
                    </ToggleButton>

                    <ToggleButton id="tbg-b-4" variant="outline-primary" size="lg"
                        className={`${styles.navButton} shadow-none`} value={4}>
                        <span className={styles.navButtonText}>£</span>
                    </ToggleButton>

                    <ToggleButton id="tbg-b-5" variant="outline-primary" size="lg"
                        className={`${styles.navButton} shadow-none`} value={5}>
                        <span className={styles.navButtonText}>¥</span>
                    </ToggleButton>
                </ToggleButtonGroup>
            </Col>
        </Row>
    </Container>
)

export default Navibar;