import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MainButton from '../MainButton';
import BlueTextButton from '../BlueTextButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function PopUpModal(props) {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>
            <div>
                <FontAwesomeIcon
                    icon={props.icon}
                    style={{ color: "#3366BB",
                    paddingRight:'10px' }}
                >
                </FontAwesomeIcon>
                <BlueTextButton
                    onClick={toggle}>
                    {props.titletext}
                </BlueTextButton>

                <Modal isOpen={modal}
                    toggle={toggle}
                    {...props}>
                    <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
                    <ModalBody>
                        {props.description}
                    </ModalBody>
                    <ModalFooter>
                        <MainButton buttonText="Close" onClick={toggle} />
                    </ModalFooter>
                </Modal>
            </div>
        </>
    )
}

export default PopUpModal;
