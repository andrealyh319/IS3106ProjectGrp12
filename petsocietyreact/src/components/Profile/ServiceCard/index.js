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

function ServiceCard(props) {
    var rate = "$" + props.rate;
    var servType = props.serviceType;
    var freq = 'day';
    return (
        <>
            <div style={{ backgroundColor:"#E4E2F3", margin:"10px" }}>
            <MDBContainer fluid className='h-custom' style={{ padding:"20px" }}>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <b style={{ fontSize: '30px' }}>Service</b>
                    <hr/>
                    <MDBCol>
                        <b style={{ fontSize: '20px' }}>{servType}</b>
                    </MDBCol>
                    <MDBCol className='d-flex justify-content-end'>
                        <div>
                        <b style={{ fontSize: '20px' }}>{rate}<br/></b>
                        <p>Per {freq}</p>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </div>
        </>
    );
}

export default ServiceCard;