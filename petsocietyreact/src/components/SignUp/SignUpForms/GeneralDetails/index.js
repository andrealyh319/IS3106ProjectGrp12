import React from 'react';
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBTypography,
}
  from 'mdb-react-ui-kit';
import { MDBCard } from 'mdbreact';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'react-day-picker/dist/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faDog } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../../Components/Footer';
import '../../../../loading.css';

function GeneralDetails(props) {
    const { firstName,
        setFirstName,
        lastName,
        setLastName,
        username,
        setUsername,
        contactNum,
        setContactNum,
        email,
        setEmail,
        password,
        setPassword,
        age,
        setAge,
        emergencyContact,
        setEmergencyContact,
        profilePicture,
        setProfilePicture,
        billingAddress,
        setBillingAddress,
        handleCompleteUserCreation } = props;

        const onImageChange = (event) => {
            if (event.target.files && event.target.files[0]) {
                let files = document.getElementById('customFile').files;
                let file = files[0]
                //console.log(file);
                if (file.size > 32000000) { // image.size > 32MB
                    // can also display error message
                    event.preventDefault();
                    return;
                }
                setProfilePicture(file);
            }
        }

    return (
        <>
            <div style={{ margin: '20px' }}>
                <MDBTypography tag='div' className='h1 pt-5 text-center'>
                    <FontAwesomeIcon icon={faDog} /> <b>Sign Up For PetSociety</b> <FontAwesomeIcon icon={faCat} />
                </MDBTypography>
            </div>


            <form onSubmit={handleCompleteUserCreation}>
                <MDBContainer fluid className='h-custom'>

                    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                        <MDBCol col='12' className='m-5'>
                            <MDBCard>

                                <MDBCardBody className='p-0'>

                                    <MDBRow>

                                        <MDBCol md='6' className='p-5 bg-gray rounded-start'>

                                            <h3 className="fw-bold mb-5" style={{ color: '#7B69A9' }}>General Information</h3>

                                            <MDBRow>

                                                <MDBCol md='6'>
                                                    <MDBInput wrapperClass='mb-4'
                                                        label='First Name'
                                                        size='lg'
                                                        id='inputFirstName'
                                                        type='text'
                                                        value={firstName}
                                                        onChange={(e) => setFirstName(e.target.value)} />
                                                </MDBCol>

                                                <MDBCol md='6'>
                                                    <MDBInput wrapperClass='mb-4'
                                                        label='Last Name'
                                                        size='lg'
                                                        id='inputLastName'
                                                        type='text'
                                                        value={lastName}
                                                        onChange={(e) => setLastName(e.target.value)} />
                                                </MDBCol>

                                            </MDBRow>


                                            <MDBInput wrapperClass='mb-4'
                                                label='Username'
                                                size='lg'
                                                id='inputUsername'
                                                type='text'
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)} />


                                            <MDBRow>

                                                <MDBCol md='3'>
                                                    <MDBInput wrapperClass='mb-3'
                                                        label='Age'
                                                        size='lg'
                                                        id='inputAge'
                                                        type='number'
                                                        value={age}
                                                        onChange={(e) => setAge(e.target.value)} />
                                                </MDBCol>

                                                <MDBCol md='6'>

                                                </MDBCol>

                                            </MDBRow>

                                            <MDBRow>
                                                <MDBCol md='12'>
                                                    <label className="form-label" htmlFor="customFile">Profile Picture</label>
                                                    <input type="file"
                                                        className="form-control"
                                                        id="customFile"
                                                        accept='image/*'
                                                        onChange={onImageChange} />
                                                </MDBCol>
                                            </MDBRow>

                                        </MDBCol>


                                        <MDBCol md='6' className='p-5 rounded-end' style={{ backgroundColor: '#7B69A9' }}>

                                            <h3 className="fw-bold mb-5 text-white" style={{ color: '#4835d4' }}>Contact Details</h3>
                                            <MDBInput wrapperClass='mb-4'
                                                labelClass='text-white'
                                                label='Email'
                                                size='lg'
                                                id='inputEmail'
                                                type='text'
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)} />

                                            <MDBInput wrapperClass='mb-4'
                                                labelClass='text-white'
                                                label='Password'
                                                size='lg'
                                                id='inputPassword'
                                                type='password'
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)} />


                                            <MDBRow>

                                                <MDBCol md='5'>
                                                    <MDBInput wrapperClass='mb-4'
                                                        labelClass='text-white'
                                                        label='Code +'
                                                        size='lg'
                                                        id='form9'
                                                        type='text' />
                                                </MDBCol>

                                                <MDBCol md='7'>
                                                    <MDBInput wrapperClass='mb-4'
                                                        labelClass='text-white'
                                                        label='Phone Number'
                                                        size='lg'
                                                        id='inputContactNum'
                                                        type='text'
                                                        value={contactNum}
                                                        onChange={(e) => setContactNum(e.target.value)} />
                                                </MDBCol>
                                            </MDBRow>

                                            <MDBRow>

                                                <MDBCol md='5'>
                                                    <MDBInput wrapperClass='mb-4'
                                                        labelClass='text-white'
                                                        label='Code +'
                                                        size='lg'
                                                        type='text' />
                                                </MDBCol>

                                                <MDBCol md='7'>
                                                    <MDBInput wrapperClass='mb-4'
                                                        labelClass='text-white'
                                                        label='Emergency Contact'
                                                        size='lg'
                                                        id='inputEmergencyContact'
                                                        type='text'
                                                        value={emergencyContact}
                                                        onChange={(e) => setEmergencyContact(e.target.value)} />
                                                </MDBCol>
                                            </MDBRow>


                                            <MDBInput wrapperClass='mb-4'
                                                labelClass='text-white'
                                                label='Billing Address'
                                                size='lg'
                                                id='inputBillingAddress'
                                                type='text'
                                                value={billingAddress}
                                                onChange={(e) => setBillingAddress(e.target.value)} />


                                            <MDBCheckbox name='flexCheck' id='flexCheckDefault' labelClass='text-white mb-4' label='I do accept the Terms and Conditions of PetSociety.' />

                                        <li>
                                            <Link to="/SignUp/2">
                                            <MDBBtn color='light'
                                                size='lg'
                                                type="submit">
                                                Next
                                            </MDBBtn>
                                            </Link>
                                            </li>

                                        </MDBCol>
                                    </MDBRow>

                                </MDBCardBody>
                            </MDBCard>

                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
                <Footer />
            </form>
        </>
    );
}

export default GeneralDetails;