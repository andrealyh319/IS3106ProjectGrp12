import React, { useState, useEffect } from 'react';
import { Navigate, useParams, useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBTypography,
  MDBCardImage,
  MDBTextArea,
  MDBRadio
}
  from 'mdb-react-ui-kit';
import { MDBCard } from 'mdbreact';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Api from "../../helpers/Api";
import moment from 'moment-timezone';
import './style.css';
import Form from 'react-bootstrap/Form';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faDog } from '@fortawesome/free-solid-svg-icons';

import '../../loading.css';
import GeneralDetails from '../../components/SignUp/SignUpForms/GeneralDetails';
import BankDetails from '../../components/SignUp/SignUpForms/BankDetails';
import OnboardUserSelection from '../../components/SignUp/SignUpForms/OnboardUserSelection';
import ServiceSelection from '../../components/SignUp/SitterSignUp/ServiceSelection';


function SignUp(props) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { page } = useParams();

  const redirect5 = () => {
    let path = `/SignUp/ExpForm`;
    navigate(path);
  }

  const redirect6 = () => {
    let path = `/SignUp/SafetyForm`;
    navigate(path);
  }

  const redirect7 = () => {
    let path = `/SignUp/Authentication`;
    navigate(path);
  }

  const redirectToSignIn = () => {
    let path = `/SignIn`;
    navigate(path);
  }

  // for user, its attributes
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [billingAddress, setBillingAddress] = useState("");
  // removed status as it is now set in the backend

  let bankAcc = {};
  let cc = {};

  // creating just user without its associated stuff first
  let user = {};

  // new plan: never creating user until we get the roles. so we must still have user in fe and separate
  // pp and ps entities in order to pass to new BE
  const handleRegistrationOfUser = (e) => {
    e.preventDefault();

    bankAcc = {
      bankAccNum: bankAccNum,
      bankName: bankName,
      accName: accName,
    }
    console.log(bankAcc);

    cc = {
      ccNum: ccNum,
      expDate: expDate,
      ccName: ccName,
      cvv: cvv,
    }

    console.log(cc);

    user = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      contactNum: contactNum,
      email: email,
      password: password,
      age: age,
      emergencyContact: emergencyContact,
      profilePicture: profilePicture,
      billingAddress: billingAddress,
      bankAcc: bankAcc,
      cc: cc,
    }
    /* Api.createNewUser(user)
       .then((data) => {
         navigate("/LoggedInHomepage");
       }) */
  }

  // relationships
  // for bankAcc
  const [bankAccNum, setBankAccNum] = useState("");
  const [bankName, setBankName] = useState("");
  const [accName, setAccName] = useState("");

  const handleCreationOfBankAcc = (e) => {
    e.preventDefault();
    Api.createAndAssociateNewBankAccount(bankAcc)
      .then((data) => {
        Navigate("/LoggedInHomepage");
      })
  }

  // for cc
  const [ccNum, setCcNum] = useState("");
  const [expDate, setExpDate] = useState("");
  const [ccName, setCcName] = useState("");
  const [cvv, setCvv] = useState("");

  const now = new Date;
  const until = new Date(now.getFullYear() + 10, now.getMonth());

  // creating cc
  const handleCreationOfCc = (e) => {
    e.preventDefault();
    Api.createAndAssociateNewCreditCard(cc)
      .then((data) => {
        navigate("/LoggedInHomepage");
      })
  }

  bankAcc = {
    bankAccNum: bankAccNum,
    bankName: bankName,
    accName: accName,
  }

  cc = {
    ccNum: ccNum,
    expDate: expDate,
    ccName: ccName,
    cvv: cvv,
  }

  // creating final user with its related fields:
  user = {
    firstName: firstName,
    lastName: lastName,
    username: username,
    contactNum: contactNum,
    email: email,
    password: password,
    age: age,
    emergencyContact: emergencyContact,
    profilePicture: profilePicture,
    billingAddress: billingAddress,
    bankAcc: bankAcc,
    cc: cc,
  }

  // handle original creation of user within FE
  const handleCompleteUserCreation = (e) => {
    e.preventDefault();
    handleRegistrationOfUser(e);
    handleCreationOfCc(e);
    handleCreationOfBankAcc(e);
  }


  // pet parent attributes
  const [searches, setSearches] = useState([]);
  const [mgRequests, setMgRequests] = useState([]);
  const [bookings, setBookings] = useState([]);

  const petParent = {
    firstName: firstName,
    lastName: lastName,
    username: username,
    contactNum: contactNum,
    email: email,
    password: password,
    age: age,
    emergencyContact: emergencyContact,
    profilePicture: profilePicture,
    billingAddress: billingAddress,
    bankAcc: bankAcc,
    cc: cc,
    searches: searches,
    mgRequests: mgRequests,
    bookings: bookings,
    daysDisabled: 0,
  };

  // creation of petparent
  const handleCreationOfParent = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(user);
    console.log(petParent);
    setIsLoading(true);
    let data = new FormData();
    let image = petParent.profilePicture;
    data.append("image", image);
    //console.log(data.get("image"));
    if (image !== null) { // not sure if profilePicture is initially null if unset TT
      Api.uploadImage( data ).then((response) => {
        //console.log(response);
        return response.json();
      }).then((response) => {
        petParent.profilePicture = response.data.image.url; // supposed to set pp to the url generated
        console.log(petParent.profilePicture);
      }).catch(err => console.log(err));
    }
    Api.createNewParent(petParent)
      .then((data) => {
        navigate("/CreatePet");
      })
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  // PET SITTER
  let petSitter = {};
  let authenReq = {};
  let expForm = {};
  let safetyForm = {};

  const today = new Date(moment().toDate());
  //const tomorrow = new Date();
  //tomorrow.setDate(tomorrow.getDate() + 1);

  // Attributes
  const [serviceAddress, setServiceAddress] = useState("");
  const [region, setRegion] = useState("");
  const [petPreference, setPetPreference] = useState("");
  const [maxWeightPreference, setMaxWeightPreference] = useState("");
  const [maxNumPets, setMaxNumPets] = useState("");
  const [schedule, setSchedule] = useState([today]);
  const [rate, setRate] = useState("");
  const [service, setService] = useState("");
  // setting serviceEnum as string, and converting to enum later in the BE

  // Relationships
  // authenReq
  const [createdDate, setCreatedDate] = useState(moment().toDate());
  //const [userId, setUserId] = useState(0);
  const [documents, setDocuments] = useState(null);

  // expForm
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [headline, setHeadline] = useState("");
  const [experience, setExperience] = useState("");

  // safetyForm
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");

  // Frontend Creation of Sitter
  const handleRegistrationOfSitter = (e) => {
    e.preventDefault();

    petSitter = {
      user,
      petSitterAttributes: {
        serviceAddress: serviceAddress,
        region: region,
        petPreference: petPreference,
        maxWeightPreference: maxWeightPreference,
        maxNumPets: maxNumPets,
        schedule: schedule,
        rate: rate,
        service: service,
        authenReq: authenReq,
        expForm: expForm,
        safetyForm: safetyForm,
        bookings: bookings,
        mgRequests: mgRequests
      }
    }

    authenReq = {
      createdDate: createdDate,
      //petSitter: userId,
      documents: documents,
    }
    console.log(authenReq);

    expForm = {
      yearsOfExperience: yearsOfExperience,
      headline: headline,
      experience: experience,
    }
    console.log(expForm);

    safetyForm = {
      q1: q1,
      q2: q2,
      q3: q3,
    }
    console.log(safetyForm);
  }

  // Backend Creation of authenReq, expForm, safetyForm 
  const handleCreationOfAuthenReq = (e) => {
    e.preventDefault();

    Api.createAndAssociateNewAuthenReq(authenReq)
      .then((data) => {
        navigate("/LoggedInHomepage");
      })
  }

  const handleCreationOfExperienceForm = (e) => {
    e.preventDefault();

    Api.createAndAssociateNewExperienceForm(expForm)
      .then((data) => {
        navigate("/LoggedInHomepage");
      })
  }

  const handleCreationOfSafetyForm = (e) => {
    e.preventDefault();

    Api.createAndAssociateNewSafetyForm(safetyForm)
      .then((data) => {
        navigate("/LoggedInHomepage");
      })
  }

  // Frontend Creation of Sitter 
  const handleCompletePetSitterCreation = (e) => {
    handleCompleteUserCreation(e);
    handleCreationOfAuthenReq(e);
    handleCreationOfExperienceForm(e);
    handleCreationOfSafetyForm(e);
    handleRegistrationOfSitter(e);
  }

  // Backend Creation of Sitter
  const handleCreationOfSitter = (e) => {
    e.preventDefault();

    Api.createNewSitter(user, petSitter)
      .then((data) => {
        navigate("/LoggedInHomepage");
      })
  }

  const handleCreationOfBESitter = (e) => {
    handleCompletePetSitterCreation(e);
    handleCreationOfSitter(e);
  }

  function handleDayClick(day, { selected }) {
    if (selected) {
      setSchedule(schedule.filter(selectedDay => selectedDay.getTime() !== day.getTime()));
    } else {
      setSchedule([...schedule, day]);
    }
  }

  const footer =
    schedule && schedule.length > 0 ? (
      <p>You have selected {schedule.length} day(s).</p>
    ) : (
      <p>Please pick your free days.</p>
    );

  const [reportsAgainstUser, setReportsAgainstUser] = useState(null);
  const [reportsUserMade, setReportsUserMade] = useState(null);
  const [ratingsForUsers, setRatingsForUsers] = useState(null);
  const [ratingsUserMade, setRatingsUserMade] = useState(null);


  // just storing user attributes first and setting values in FRONTEND USER only
  if (page === "1") {
    return (
      <>
        <GeneralDetails
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          username={username}
          setUsername={setUsername}
          contactNum={contactNum}
          setContactNum={setContactNum}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          age={age}
          setAge={setAge}
          emergencyContact={emergencyContact}
          setEmergencyContact={setEmergencyContact}
          profilePicture={profilePicture}
          setProfilePicture={setProfilePicture}
          billingAddress={billingAddress}
          setBillingAddress={setBillingAddress}
          handleCompleteUserCreation={handleCompleteUserCreation}
        />
      </>
    );
  }

  // UI: cc and bankacc details 
  else if (page === "2") {
    return (
      <>
        <BankDetails
          bankAccNum={bankAccNum}
          setBankAccNum={setBankAccNum}
          bankName={bankName}
          setBankName={setBankName}
          accName={accName}
          setAccName={setAccName}
          ccNum={ccNum}
          setCcNum={setCcNum}
          expDate={expDate}
          setExpDate={setExpDate}
          ccName={ccName}
          setCcName={setCcName}
          cvv={cvv}
          setCvv={setCvv}
          handleCompleteUserCreation={handleCompleteUserCreation}
        />
      </>
    );
  }

  else if (page === "3") {
    return (
      <>
       <OnboardUserSelection 
       handleCreationOfParent={handleCreationOfParent}
       isLoading={isLoading}/> 
      </>
    )
  }

  // Pet Sitter Pages 
  else if (page === "Sitter") {
    return (
      <>
        <ServiceSelection />
      </>
    )
  }

  else if (page === "ExpForm") {
    return (
      <>
        <form onSubmit={handleCompletePetSitterCreation}>
          <MDBContainer fluid className='bg-dark'>
            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
              <MDBCol>

                <MDBCard className='my-4' style={{ backgroundColor: '#e8e6f2' }}>
                  <MDBRow className='g-0'>
                    <MDBCol md='6' className="d-none d-md-block">
                      <MDBCardImage src='https://images.unsplash.com/photo-1557199582-14cd70bc6d39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' alt="Sample photo" className="rounded-start" fluid />
                    </MDBCol>

                    <MDBCol md='6'>

                      <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                        <h3 className="mb-2 text-uppercase fw-bold">EXPERIENCE FORM</h3>
                        <h6 style={{ fontSize: 12 }} className="mb-3">We would like to get to know you and your experiences better.</h6>
                        <MDBRow>
                          <h5>Years of Experience</h5>
                          <MDBCol md="2">
                            <MDBInput wrapperClass='mb-4' label='Years' id='inputYearsOfExperience' type='text'
                              value={yearsOfExperience}
                              onChange={(e) => setYearsOfExperience(e.target.value)} />
                          </MDBCol>
                        </MDBRow>

                        <MDBRow>
                          <h5>Testimonials</h5>
                        </MDBRow>

                        <MDBRow>
                          <MDBCol md='12'>
                            <h6>Headline</h6>
                            <MDBInput wrapperClass='mb-4' label='Headline' id='inputHeadline' type='text'
                              value={headline}
                              onChange={(e) => setHeadline(e.target.value)} />
                          </MDBCol>
                        </MDBRow>

                        <MDBRow>
                          <h6>Description</h6>
                          <MDBCol md='12'>

                            <MDBTextArea className="mb-4" label='Describe your experience' rows={4}
                              value={experience}
                              onChange={(e) => setExperience(e.target.value)} />
                          </MDBCol>
                        </MDBRow>

                        <MDBBtn color='dark' className='mb-4' size='lg'
                          type='submit'
                          onClick={redirect6}>Next</MDBBtn>

                      </MDBCardBody>

                    </MDBCol>
                  </MDBRow>

                </MDBCard>

              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </form>
      </>
    )
  }

  else if (page === "SafetyForm") {
    return (
      <>
        <form onSubmit={handleCompletePetSitterCreation}>
          <MDBContainer fluid className='bg-dark'>
            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
              <MDBCol>

                <MDBCard className='my-4' style={{ backgroundColor: '#e8e6f2' }}>
                  <MDBRow className='g-0'>
                    <MDBCol md='6' className="d-none d-md-block">
                      <MDBCardImage src='https://images.unsplash.com/photo-1557199582-14cd70bc6d39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' alt="Sample photo" className="rounded-start" fluid />
                    </MDBCol>

                    <MDBCol md='6'>

                      <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                        <h3 className="mb-2 text-uppercase fw-bold">SAFETY FORM</h3>
                        <h6 style={{ fontSize: 12 }} className="mb-3">We would like to get to know you and your experiences better.</h6>
                        <MDBRow>
                          <h6>I have another job apart from being a Pet Sitter.</h6>
                          <MDBCol md='12'>

                            <MDBTextArea className="mb-4" label='Answer' rows={2}
                              value={q1}
                              onChange={(e) => setQ1(e.target.value)} />
                          </MDBCol>
                        </MDBRow>

                        <MDBRow>
                          <h6>Are you vaccinated against most types of animal-related diseases?</h6>
                          <MDBCol md='12'>

                            <MDBTextArea className="mb-4" label='Answer' rows={2}
                              value={q2}
                              onChange={(e) => setQ2(e.target.value)} />
                          </MDBCol>
                        </MDBRow>

                        <MDBRow>
                          <h6>Do you have any past criminal records?</h6>
                          <MDBCol md='12'>

                            <MDBTextArea className="mb-4" label='Answer' rows={2}
                              value={q3}
                              onChange={(e) => setQ3(e.target.value)} />
                          </MDBCol>
                        </MDBRow>

                        <MDBBtn color='dark' className='mb-4' size='lg' type='submit'
                          onClick={redirect7}>Next</MDBBtn>

                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </form>
      </>
    )
  }

  else if (page === "Authentication") {
    return (
      <>
        <MDBContainer fluid className='bg-dark'>
          <form onSubmit={handleCreationOfBESitter}>
            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
              <MDBCol>

                <MDBCard className='my-4' style={{ backgroundColor: '#e8e6f2' }}>
                  <MDBRow className='g-0'>
                    <MDBCol md='6' className="d-none d-md-block">
                      <MDBCardImage src='https://images.unsplash.com/photo-1557199582-14cd70bc6d39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' alt="Sample photo" className="rounded-start" fluid />
                    </MDBCol>

                    <MDBCol md='6'>

                      <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                        <h3 className="mb-2 fw-bold">Last step!</h3>
                        <h6 style={{ fontSize: 12 }} className="mb-3">The privacy and security of our community is very important.
                          We’re identifying ways to help make our community as secure as possible for everyone.That’s why when you
                          become a Pet Sitter with PetSociety, we may need to verify your personal information, such as your legal name,
                          address, phone number and other contact details.</h6>
                        <h6 style={{ fontSize: 12 }} className="mb-3"><u>
                          Please upload a file (in PDF format) containing a photo of
                          your Government ID (with NRIC covered) and a selfie.</u></h6>

                        <MDBRow>
                          <MDBCol md='12'>
                            <label className="form-label" htmlFor="customFile">Identity Authentication</label>
                            <input type="file"
                              className="form-control mb-1"
                              id="customFile"
                              value={documents}
                              onChange={(e) => setDocuments(e.target.value)} />
                          </MDBCol>
                        </MDBRow>

                        <h6 style={{ fontSize: 14 }} className="mb-3">
                          You may start accepting bookings once your account has been verified by PetSociety.</h6>

                        <MDBRow className='mb-5'>
                          <MDBCol md='3'>
                            <MDBBtn color='success' className='mb-4' size='lg' type='submit'
                              onClick={redirectToSignIn}>Submit</MDBBtn>
                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </form>
        </MDBContainer>
      </>
    )
  }
}

export default SignUp;
