import Button from 'react-bootstrap/Button';

function MainButton(props) {

    return (
        <>
            <div className="mb-4">
                <Button size="lg"
                    onClick={props.onClick}
                    style={{
                        borderRadius: '40px',
                        backgroundColor: '#786AA5',
                        padding: '15px 60px',
                        fontFamily: 'Poppins, sans-serif'
                    }}>
                    {props.buttonText}
                </Button>
            </div>
        </>

    );
}

export default MainButton;