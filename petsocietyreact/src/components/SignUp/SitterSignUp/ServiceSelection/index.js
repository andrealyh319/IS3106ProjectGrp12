import MainButton from "../../../Components/MainButton";
import SubButton from "../../../Components/SubButton";
import PopUpModal from "../../../Components/PopUpModal";
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import ServiceSelectionRow from "../../../Components/ServiceSelectionRow";
import dogBoarding from "../../../../icons/dog_boarding.png";

function ServiceSelection() {


    return (
        <>
            <MainButton buttonText="test" />
            <SubButton buttonText="Save and Continue" />
            <PopUpModal icon={faCircleInfo}
                titletext="clock me" />
            <ServiceSelectionRow image={dogBoarding}
            title="Hi" 
            description="flyhigh"
            averagePrice="yolo/night"/>

        </>
    );
}


export default ServiceSelection;