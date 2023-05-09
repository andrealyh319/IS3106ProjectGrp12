import React from 'react';
import { Helmet } from "react-helmet";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { MDBCol, MDBRow, MDBTypography, MDBBtn } from 'mdb-react-ui-kit';
import { Link, Route, Routes } from 'react-router-dom';
import Footer from '../../components/Footer';
import ServiceCard from '../../components/Services/ServiceCard';
import serviceBanner from '../../icons/services_banner.png';
import { position } from 'dom-helpers';


function Services() {
  return (
    <>
      <div>
        <Helmet>
          <title>Pet Society | Services</title>
        </Helmet>
      </div>

      <div className="hero-section">
        <div className="bg-image" style={{
          backgroundImage: `url(${serviceBanner})`,
          backgroundSize: 'cover',
          height: '90vh',
          width: '100%',
          display: 'block',
          position: "relative"
        }}>
          <MDBRow className='mt-5'>
            <MDBCol md='12'>
              {/* Additional content */}
            </MDBCol>
          </MDBRow>
          <MDBRow className='mt-5'>
            <MDBCol md='12'>
              {/* Additional content */}
            </MDBCol>
          </MDBRow>
          <MDBRow className='mt-5'>
            <MDBCol md='12'>
              {/* Additional content */}
            </MDBCol>
          </MDBRow>
          <MDBRow className='mt-5'>
            <MDBCol md='12'>
              {/* Additional content */}
            </MDBCol>
          </MDBRow>
          <MDBRow className='mt-5'>
            <MDBCol md='12'>
              {/* Additional content */}
            </MDBCol>
          </MDBRow>
          <MDBRow className='mt-5'>
            <MDBCol md='12'>
              {/* Additional content */}
            </MDBCol>
          </MDBRow>
          <MDBRow className='mt-5'>
            <MDBCol md='12'>
              {/* Additional content */}
            </MDBCol>
          </MDBRow>
          <MDBRow className='mt-5'>
            <MDBCol md='12'>
              {/* Additional content */}
            </MDBCol>
          </MDBRow>
          <MDBRow className='mt-5'>
            <MDBCol md='12'>
              {/* Additional content */}
            </MDBCol>
          </MDBRow>
          <MDBRow className='p-5 align-items-end'>
            <MDBCol md='1'></MDBCol>
            <MDBCol md='2' className='offset-md-2 offset-lg-0 text-end mt-5'>

              <MDBBtn
                class="btn btn-primary w-100 btn-rounded"
                style={{
                  backgroundColor: '#7B69A9',
                  padding: '15px 20px',
                }}
              >
                <a href="/#/SignUp/1" style={{ color: 'white' }}><b>Register Now!</b></a>
              </MDBBtn>

            </MDBCol>
            <MDBCol md='2' className='offset-md-2 offset-lg-0 text-end mt-5'>
              <Link to="/SignUp/1">
                <MDBBtn
                  class="btn btn-primary w-100 btn-rounded"
                  style={{
                    backgroundColor: '#808080',
                    padding: '15px 20px',
                  }}
                >
                  <b>See More</b>
                </MDBBtn>
              </Link>
            </MDBCol>
          </MDBRow>
        </div>
      </div>

      <section id="service">
        <div className="service-card-section"
          style={{
            backgroundColor: '#DEBD75',
            padding: '70px'
          }}>
          <MDBRow className="row-cols-1 row-cols-md-2 g-4 py-4">
            <MDBCol>
              <ServiceCard
                imageUrl="https://www.caninecountryclubaz.com/wp-content/uploads/2019/03/shutterstock_140724097-min-1024x683.jpg"
                imageAlt="dogboarding"
                title="DOG BOARDING"
                subtext="No more loud kennels or cages."
                description="Discover your dog’s home away from home with a loving dog sitter in your neighborhood."
              />
            </MDBCol>

            <MDBCol>
              <ServiceCard
                imageUrl="https://zumvet.com/blog/wp-content/uploads/2023/02/female-owner-and-dog-in-a-pet-taxi.v1.jpg"
                imageAlt="pettaxi"
                title="DOG WALKING"
                subtext="Travel in style with your furkid."
                description=" Where to next? Get to your next destination safely and without fuss. Or walk there -- it's simple!"
              />
            </MDBCol>

            <MDBCol>
              <ServiceCard
                imageUrl="https://www.houndstownfranchise.com/wp-content/uploads/2019/12/Pittsburgh-Pups-960x675.jpg"
                imageAlt="doggydaycare"
                title="DAYCARE"
                subtext="Finally—a doggy day care option that works"
                description="  Personalized care for your pet - without breaking the bank."
              />
            </MDBCol>

            <MDBCol>
             <ServiceCard
              imageUrl="https://images.squarespace-cdn.com/content/v1/54e7a1a6e4b08db9da801ded/7f2dae36-5650-4b84-b184-684f46fe68aa/98.jpg"
              imageAlt="checkin"
              title="DROP IN"
              subtext="Safely and with no hassle."
              description="Let PetSociety's trusted sitters check up on your pet -- no fuss at all!"
             /> 
            </MDBCol>
          </MDBRow>
        </div>
      </section>
      <Footer />

    </>
  )
}

export default Services;