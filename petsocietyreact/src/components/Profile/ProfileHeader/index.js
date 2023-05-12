import React from 'react';
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
import AverageRating from '../AverageRating';
import MainButton from '../../Components/MainButton';

function ProfileHeader(props) {
    var buttonText = "Contact " + props.username;
    return (
        <div style={{ margin: '20px' }}>
            <MDBContainer fluid className='h-custom'>
                <MDBRow className='d-flex justify-content-center align-items-center h-100' >
                    <MDBCol className='d-flex justify-content-center col-4' >
                        <img className='rounded-circle'
                                src={props.imageUrl}
                                class="card-img-top"
                                alt={props.imageAlt} 
                                style={{ objectFit:'cover', borderRadius:'50%', width:250, height:250, display:"block" }} />
                    </MDBCol>
                    <MDBCol className='d-flex'>
                        <div>
                            <b style={{ fontSize: '70px' }} class="profile-username">{props.username}</b>
                            <p class="profile-location" style={{ fontSize: '20px' }} >
                                <small class="text-muted">{props.location}</small>
                            </p>
                            <p class="profile-avgrating">
                                <AverageRating averageStars={props.averagerating}/>
                            </p>
                            {/*redirect to make bookings(?) page not dones*/}
                            <MainButton buttonText={buttonText} onClick=""/>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default ProfileHeader;