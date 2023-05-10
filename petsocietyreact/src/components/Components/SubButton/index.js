import Button from 'react-bootstrap/Button';

function SubButton(props) {

    return (
        <>
            <div className="mb-4">
                <Button size="lg"
                    onClick={props.onClick}
                    style={{
                        borderRadius: '40px',
                        backgroundColor: 'rgba(126, 119, 192, 0.65)',
                        padding: '15px 60px',
                        fontFamily: 'Poppins, sans-serif'
                    }}>
                    {props.buttonText}
                </Button>
            </div>
        </>

    );
}

export default SubButton;