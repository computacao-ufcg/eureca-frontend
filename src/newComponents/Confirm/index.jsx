import React from 'react';

import { Modal, Button, Icon} from 'rsuite';

const Confirm = (props) => {

    return (
        
        <div className="classified-modal-container">
            <Modal backdrop="static" show={props.showModal} onHide={() => props.hideModal(!props.showModal)} size="xs">
                <Modal.Body>
                    <Icon
                        icon="remind"
                        style={{
                            color: '#ffb300',
                            fontSize: 24
                        }}
                    />
                    {'  '}
                    {props.msg}
                    </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => { props.handleFunction(); props.hideModal(!props.showModal) }} appearance="subtle">
                        Sim
                    </Button>
                    <Button onClick={() => props.hideModal(!props.showModal)} appearance="primary">
                        Não
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Confirm;