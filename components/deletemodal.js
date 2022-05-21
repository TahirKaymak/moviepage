import react from "react";
import { Button } from "react-scroll";
import { useState } from "react/cjs/react.production.min";

const DeleteModal = () => {
    const [open,setOpen] = useState(false);
    const show = () => setOpen(true);
    const close = () => setOpen(close);
    return(
<React.Fragment>
    <Button color="red">delete</Button>
    <Modal size="mini" open={open} onClose={close}>
        <Modal.Header>Delete Text</Modal.Header>
        <Modal.Content>Bu yazıyı silmek ister misiniz?</Modal.Content>
    </Modal>
    <Modal.Actions>
        <Button negative>iptal et</Button>
        <Button pozitive icon="delete">Evet sil</Button>
    </Modal.Actions>
</React.Fragment>
    )
}

export default DeleteModal;