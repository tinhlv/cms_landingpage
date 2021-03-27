import React, { useState } from 'react';
import { Col, Container, Row, Alert, Button } from 'react-bootstrap';
import banner from '../../../images/baneruser.png';
import Input from '../../../Components/Input';
import Radio from '../../../Components/Radio';
import Select from '../../../Components/Select';
import { valid } from '../../../utils/constant';
import onlyChar from '../../../utils/onlyChar';
import { checkName, checkEmail } from '../../../utils/validateForm';
import Feedback from '../../../Components/Feedback';
import { useHistory } from 'react-router-dom';

const date = [
  {
    value: 'day1',
    label: 1
  },
  {
    value: 'day2',
    label: 2
  },
  {
    value: 'day3',
    label: 3
  },
  {
    value: 'day4',
    label: 4
  },
  {
    value: 'day5',
    label: 5
  },
  {
    value: 'day6',
    label: 6
  },
];

const month = [
  {
    value: 'day1',
    label: 1
  },
  {
    value: 'day2',
    label: 2
  },
  {
    value: 'day3',
    label: 3
  },
  {
    value: 'day4',
    label: 4
  },
  {
    value: 'day5',
    label: 5
  },
  {
    value: 'day6',
    label: 6
  },
];

const year = [
  {
    value: 'day1',
    label: 2001
  },
  {
    value: 'day2',
    label: 2002
  },
  {
    value: 'day3',
    label: 2003
  },
  {
    value: 'day4',
    label: 2004
  },
  {
    value: 'day5',
    label: 2005
  },
  {
    value: 'day6',
    label: 2006
  },
]

function Product() {
  const history = useHistory();
  const onClickNext = () => {
    nextStep();
  };
  const nextStep = () => {
    history.push({
        pathname: `/send-price`
    });
};
  const [firstname, setFirstname] = useState(
    localStorage.getItem('firstname') || ''
  );
  const [firstnameValid, setFirstnameValid] = useState(valid.NON_VALID);
  const [lastname, setLastname] = useState(
    localStorage.getItem('lastname') || ''
  );
  const checkLastnameValid = (value) => {
    const test = checkName(value);
    setLastnameValid(Number(test));
    return test;
  };
  const [lastnameValid, setLastnameValid] = useState(valid.NON_VALID);
    const checkFirstnameValid = (value) => {
      const test = checkName(value);
      setFirstnameValid(Number(test));
      return test;
  };
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [emailValid, setEmailValid] = useState(valid.NON_VALID);
  const checkEmailValid = (value) => {
    const test = checkEmail(value);
    setEmailValid(Number(test));
    return test;
};
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
              <div className="box-form">
                <h3 className="title-form">Please Fill In Your Details First.</h3>
                <Row>
                  <Col className="pr-2">
                    <Radio
                      name="mr"
                      classContainer="custom-check text-center"
                    >
                      Mr
                    </Radio>
                  </Col>
                  <Col className="pl-2">
                    <Radio
                      name="mrs"
                      classContainer="custom-check text-center"
                    >
                      Mrs
                    </Radio>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-2">
                    <Input
                        defaultValue={firstname}
                        onFocus={() => setFirstnameValid(valid.NON_VALID)}
                        onKeyDown={onlyChar}
                        onChange={(e) => setFirstname(e.target.value)}
                        onBlur={(e) => checkFirstnameValid(e.target.value)}
                        invalid={firstnameValid === valid.INVALID}
                        placeholder="Firstname"
                    >
                    </Input>
                    <Feedback
                        show={firstnameValid === valid.INVALID}
                        className="text-center mb-2"
                    >
                        Firstname is invalid
                    </Feedback>
                  </Col>
                  <Col className="pl-2">
                    <Input
                      defaultValue={lastname}
                      onFocus={() => setLastnameValid(valid.NON_VALID)}
                      onKeyDown={onlyChar}
                      onBlur={(e) => checkLastnameValid(e.target.value)}
                      onChange={(e) => setLastname(e.target.value)}
                      invalid={lastnameValid === valid.INVALID}
                      placeholder="Lastname"
                    >
                    </Input>
                    <Feedback
                      show={lastnameValid === valid.INVALID}
                      className="text-center mb-2"
                    >
                      Lastname is invalid
                    </Feedback>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Input
                        inputMode="email"
                        defaultValue={email}
                        onFocus={() => setEmailValid(valid.NON_VALID)}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={(e) => checkEmailValid(e.target.value)}
                        invalid={emailValid === valid.INVALID}
                        placeholder="Email"
                    >
                    </Input>
                    <Feedback
                      show={emailValid === valid.INVALID}
                      className="text-center mb-2"
                    >
                      Email is invalid
                    </Feedback>
                  </Col>
                </Row>
                <Row className="custom-option">
                  <Col className="pr-3">
                    <Select
                      inputMode='numeric'
                      options={date}
                      defaultValue=''
                      onChange={() => {}}
                    >
                      DD
                    </Select>
                  </Col>
                  <Col className="pl-3">
                    <Select
                      inputMode='numeric'
                      options={month}
                      defaultValue=''
                      onChange={() => {}}
                    >
                      MM
                    </Select>
                  </Col>
                  <Col className="pl-3">
                    <Select
                      inputMode='numeric'
                      options={year}
                      defaultValue=''
                      onChange={() => {}}
                    >
                      YYYY
                    </Select>
                  </Col>
                </Row>
                <Button className="btn btn-submit-form" onClick={onClickNext} type="submit">CONTINUE</Button>
                <p className="note-form text-center">I agree that the competition's host and it's <a className="link-text" href="https://0.0.0.0:3000">sponsors</a> may contact me by email, phone, text or post with more interesting offers. Please check our <a className="link-text" href="https://0.0.0.0:3000">privacy policy</a> to see which data we are gathering and sharing. Participation is free of charge!</p>
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
