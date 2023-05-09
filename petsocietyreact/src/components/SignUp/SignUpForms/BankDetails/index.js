import { Link } from "react-router-dom";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCardBody,
    MDBInput,
    MDBCardImage,
    MDBCard
  }
  from 'mdb-react-ui-kit';
  import dogBanner from '../../../../icons/dog_banner.png';


function BankDetails(props) {
    const {
        bankAccNum,
        setBankAccNum,
        bankName,
        setBankName,
        accName,
        setAccName,
        ccNum,
        setCcNum,
        expDate,
        setExpDate,
        ccName,
        setCcName,
        cvv,
        setCvv,
        handleCompleteUserCreation } = props;

    return(
        <>
        <form onSubmit={handleCompleteUserCreation}>
          <MDBContainer fluid className='h-custom'>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>

              <MDBCol lg='8'>

                <MDBCard className='my-5 rounded-3'>
                  <MDBCardImage src={dogBanner}
                    className='w-100 rounded-top'
                    alt="dogscenery"
                    height="450"
                    style={{ padding: '10px' }}
                  />

                  <MDBCardBody className='px-5'>

                    <h3 className="mb-4 p-3 pb-md-0 mb-md-3 px-md-2 text-center" class="text-center">
                      <b>Welcome To PetSociety!</b>
                    </h3>
                    <p class="card-text">
                      <small class="text-muted">One more step before you're done!</small>
                    </p>

                    <h5>Bank Account Details</h5>
                    <MDBInput wrapperClass='mb-4'
                      label='Bank Account Number'
                      id='inputBankAcc'
                      type='text'
                      value={bankAccNum}
                      onChange={(e) => setBankAccNum(e.target.value)}
                    />

                    <MDBRow>

                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4'
                          label='Bank Name'
                          id='inputBankName'
                          type='text'
                          value={bankName}
                          onChange={(e) => setBankName(e.target.value)}
                        />
                      </MDBCol>

                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4'
                          label='Name on Account'
                          id='inputAccName'
                          type='text'
                          value={accName}
                          onChange={(e) => setAccName(e.target.value)} />
                      </MDBCol>


                    </MDBRow>


                    <h5>Credit Card Details</h5>
                    <MDBRow>
                      <MDBCol md='12'>
                        <MDBInput wrapperClass='mb-4'
                          label='Credit Card Number'
                          id='inputCcNum'
                          type='text'
                          value={ccNum}
                          onChange={(e) => setCcNum(e.target.value)} />
                      </MDBCol>
                    </MDBRow>

                    <MDBRow>
                      <MDBCol md='5'>
                        <MDBInput wrapperClass='mb-4'
                          label='Name on Credit Card'
                          id='inputCcName'
                          type='text'
                          value={ccName}
                          onChange={(e) => setCcName(e.target.value)} />
                      </MDBCol>

                      <MDBCol md='4'>
                        <MDBInput wrapperClass='mb-4'
                          label='Expiry (MMYYYY)'
                          id='inputExpDate'
                          type='text'
                          maxLength='6'
                          value={expDate}
                          onChange={(e) => setExpDate(e.target.value)} />

                      </MDBCol>

                      <MDBCol md='3'>
                        <MDBInput wrapperClass='mb-4'
                          label='CVV'
                          id='inputCvv'
                          type='text'
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)} />
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className='justify-content-center'>
                      <MDBCol md='3' className='p-2'>

                    <li>
                        <Link to="/SignUp/3">
                        <MDBBtn
                          style={{ backgroundColor: '#7B69A9' }}
                          className='w-100 mb-4'
                          size='lg'
                          type="submit">
                          Submit
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
        </form>
      </>
    );
}

export default BankDetails;