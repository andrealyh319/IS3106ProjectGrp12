import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
import ppPicture from '../../../icons/petparent.png';
import psPicture from '../../../icons/petsitter.png';

function OnboardUserSelection(props) {
  
    const {
        handleCreationOfParent,
        isLoading
    } = props;

    return (
        <>
            <div class="py-5 text-center">
                <div class="container pb-md-5">
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-10">
                            <h1 class="my-5 display-3 fw-bold ls-tight">
                                <span>Welcome Onboard!</span>
                                <br></br>
                                <span style={{ color: '#7B69A9' }}>Who do you want to be?</span>
                            </h1>
                            <MDBRow>
                                <MDBCol>
                                    <div class="row">
                                        <div class="col">
                                          
                                                <button class="btn btn-primary w-100"
                                                    style={{ backgroundColor: '#E4E2F5', padding: '50px 30px' }}
                                                    onClick={handleCreationOfParent}>
                                                    <img src={ppPicture}
                                                        alt="Image"
                                                        width="250"
                                                        height="250"
                                                        style={{ padding: '30px' }}>
                                                    </img>
                                                    <h2 style={{ color: '#000000' }}><b>I want to be a PetParent</b></h2>
                                                </button>
                                                {isLoading && (
                                                    <div className="loading-overlay">
                                                        <img src={process.env.PUBLIC_URL + '/loadingAnimation.gif'} alt="Loading" className="loading-gif" />
                                                    </div>
                                                )}
                                           
                                        </div>
                                    </div>
                                </MDBCol>

                                <MDBCol>
                                    <div class="row">
                                        <div class="col">
                                            <Link to="/SignUp/Sitter">
                                                <button class="btn btn-primary w-100"
                                                    style={{ backgroundColor: '#ffffff', padding: '50px 40px' }}>
                                                    <img src={psPicture}
                                                        alt="Image"
                                                        width="250"
                                                        height="250"
                                                        style={{ padding: '10px' }}>
                                                    </img>
                                                    <h2 style={{ color: '#7b69a9' }}>
                                                        <b>I want to be a PetSitter</b></h2>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OnboardUserSelection;