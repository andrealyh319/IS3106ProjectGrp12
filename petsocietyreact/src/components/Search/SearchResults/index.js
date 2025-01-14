import React, { useState, useEffect, useContext } from "react";
import { Button, CardTitle, ListGroupItem, ListGroup, CardText, Card, CardBody, CardGroup, CardImg, ButtonGroup, Alert } from "reactstrap";
import Api from "../../../helpers/Api";
import './style.css';
import Rating from 'react-rating-stars-component';
import { Link } from "react-router-dom";
import MgModal from "../../MeetAndGreet/MgModals";
import SearchSitter from "../../../containers/SearchSitter";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";



function SearchResults(props) {


    // //using the formData props from SearchSitter
    // const { formData } = props;



    // const filteredData = [];
   
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);




    // const filterSitters = (data, formData) => {
       
    //     const dataArray = Object.values(data);
       
    //     for (const item of dataArray ?? []) {
    //         if (formData.serviceType !== "Daycare" && item.serviceType !== formData.serviceType) {
    //             continue;
    //         }
    //         if (formData.petType.length && !formData.petType.includes(item.petType)) {
    //             continue;
    //         }
    //         if (formData.region !== "North" && item.region !== formData.region) {
    //             continue;
    //         }
    //         if (formData.dates.startDate && item.startDate < formData.dates.startDate) {
    //             continue;
    //         }
    //         if (formData.dates.endDate && item.endDate > formData.dates.endDate) {
    //             continue;
    //         }
    //         if (formData.numOfPets !== "" && item.numOfPets !== formData.numOfPets) {
    //             continue;
    //         }
    //         if (formData.petSize !== 0 && item.petSize > formData.petSize[1]) {
    //             continue;
    //         }
    //         if (item.rate < formData.rate[0] || item.rate > formData.rate[1]) {
    //             continue;
    //         }
    //         if (formData.repeat !== "" && item.repeat !== formData.repeat) {
    //             continue;
    //         }
    //         if (formData.dayOfWeek.length && !formData.dayOfWeek.includes(item.dayOfWeek)) {
    //             continue;
    //         }
    //         if (formData.fulltime !== false && !item.fulltime) {
    //             continue;
    //         }
    //         if (formData.numOfTimes !== null && item.numOfTimes !== formData.numOfTimes) {
    //             continue;
    //         }
    //         filteredData.push(item);
    //     }
    //     return filteredData;
    // };


    // const fetchSitters = async () => {
    //     const response = await fetch(Api.getAllPetSitters());
    //     const data = await response.json();
    //     return Object.values(data); // returns an array of values instead of an object
    // };
   
    // const useFilteredSitters = (formData) => {
    //     const { data, isLoading, error } = useQuery("sitters", fetchSitters);
    //     const filteredData = filterSitters(data, formData);
    //     return { data: filteredData, isLoading, error };
    // };


    // const { data, isLoading, error } = useFilteredSitters(formData);
    // if (isLoading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;


    // //will show the alert prompt when there are no match
    // if (filteredData.length === 0) {
    //     return (
    //         <Alert color="info" isOpen={visible} toggle={onDismiss} className="position-fixed top-0 end-0 m-3">
    //             Results doesn't match! Try changing your searching criteria!
    //         </Alert>
    //     );
    // }


    // data init for testing the card
    const [sitters, setSitters] = useState([{
        "userId": 1,
        "firstName": "Sarah",
        "lastName": "Tan",
        "profilePicture": "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
        "rate": "5.00/hr",
        "rating": 5,
        "comments": "good",
        "region": "west",
        "service": "walking"
    },
    {
        "userId": 2,
        "firstName": "David",
        "lastName": "Chua",
        "profilePicture": "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
        "rate": "6.00/hr",
        "rating": 4,
        "comments": "excellent",
        "region": "east"
    }]);
   


    return (
        /* here we map over the sitter and display each sitter as a card but this is based on the booking that they have posted */
        <>

            <div className="wrapper">
                <ul className="card-grid">
                    {sitters.map((sitter) => (
                        <li>
                            {/* <article className="card" key={sitter.user.userId}> */}
                            <article className="card" key={sitter.userId}>
                                <CardGroup>
                                    <Card style={{ width: '22rem' }}>
                                        <CardImg
                                            alt="Sample"
                                            src={sitter.profilePicture} />
                                            {/* src={sitter.profilePicture} /> */}
                                        <CardBody className="text-center">
                                            {/* <CardTitle tag="h5">
                                                {sitter.user.firstName} {sitter.user.lastName}
                                            </CardTitle> */}
                                            <CardTitle tag="h5">
                                                {sitter.firstName} {sitter.lastName}
                                            </CardTitle>
                                            <div>
                                                <Rating
                                                    count={5}
                                                    size={24}
                                                    activeColor="#ffd700"
                                                    // value={sitter.user.ratingsForUsers}
                                                    value={sitter.rating}
                                                    edit={false} />
                                            </div>
                                            <CardText>
                                                <ListGroup flush>
                                                    <ListGroupItem>
                                                        "{sitter.comments}"
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        {sitter.rate}
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        {sitter.region}
                                                    </ListGroupItem>
                                                </ListGroup>
                                            </CardText>
                                        </CardBody>
                                        <ButtonGroup>
                                            <div className="button-wrapper" style={{ marginLeft: "50px" }}>
                                                <Link to="/makebooking" state={{sitter : sitter, formData : props}}>
                                                    <Button> Book Sitter</Button>
                                                </Link>
                                            </div>
                                            <div className="button-wrapper">
                                                <MgModal sitter={sitter} buttonLabel="Create"></MgModal>
                                            </div>
                                        </ButtonGroup>
                                    </Card>
                                </CardGroup>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
            <style>
                {`
          .card-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .button-wrapper {
            display: flex;
            justify-content: center;
            margin-top: auto;
            width: 100px;
          }\
        `}
            </style></>
    );


}




export default SearchResults;