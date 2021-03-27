import React from 'react';
import { Col, Container, Row, Alert, ProgressBar } from 'react-bootstrap';
import banner from '../../../images/baneruser.png';
import { progressPer } from '../../../utils/constant';
import images4 from '../../../images/cup.png';
import { RadioButton } from '../../../Components/Radio';

function Product() {
  const content = `<Join now for a Chance to win a PLAYSTATION 5>`;
  return (
    <>
      <div className="join-now text-center">
        <Alert.Link className="color-white" href="#">{content}</Alert.Link>
      </div>
      <div className="bg-cover" style={{ "backgroundImage": `url(${banner})` }}>
        <Container className="banner banner-userform">
          <Row>
            <Col md={12}>
              <h2 className="title text-center title-banner-user">WHO IS THE NEXT WINNER OF OUR <br />
                PLAYSTATION 5 COMPETITION?!</h2>
            </Col>
            <Col md={12}>
              <div className="box-form box-form-small full-border">
                <h3 className="title-form title-form-small pb0">Please answer these questions about yourself.</h3>
                <div className="bottom-form-small">
                  <Row className="mb-4">
                    <Col>
                      <ProgressBar
                          variant="info"
                          animated
                          now={progressPer.BANKRUPT_ANSWER}
                          label={
                            <span className="progress-label">
                              50%
                            </span>
                          }
                      />
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col md={12}>
                      <img src={images4} alt="images4" />
                    </Col>
                    <Col>
                      <p className="des-step2">What is your current combined household Superannuation (approximately)?</p>
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col md={6}>
                      <RadioButton
                        classContainer='checkbox-text'
                        defaultChecked=''
                        name="gender"
                        onChange={() => {}}
                      >
                        <span className="change-color-text">Less than $150k</span>
                      </RadioButton>
                    </Col>
                    <Col md={6}>
                      <RadioButton
                        classContainer='checkbox-text'
                        defaultChecked=''
                        name="gender"
                        onChange={() => {}}
                      >
                        <span className="change-color-text">More than $150k - self</span>
                      </RadioButton>
                    </Col>
                    <Col md={12}>
                      <RadioButton
                        classContainer='checkbox-text'
                        defaultChecked=''
                        name="gender"
                        onChange={() => {}}
                      >
                        <span className="change-color-text">More than $150k - self + partner</span>
                      </RadioButton>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="box-middle-user">
        <Container>
          <Row className="list-tabs-user">
            <Col md={4} className="text-center">
              <p className="active-curent"><span className="box-number">01</span>LEAVE YOUR DETAILS</p>
            </Col>
            <Col md={4} className="text-center">
              <p><span className="box-number">02</span>ANSWER THE QUESTIONS</p>
            </Col>
            <Col md={4} className="text-center">
              <p><span className="box-number">03</span>AND YOU'RE DONE!</p>
            </Col>
          </Row>
          <Row>
            
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Product;
