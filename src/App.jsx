import { useState } from "react";
import { Button } from "./components/Button/Button";
import Modal from "../src/containers/components/Modal/Modal";
import "./App.css";

function App() {
  const [modal, setOpen] = useState(null);

  const openDelete = () => setOpen("delete");
  const openAdd = () => setOpen("add");
  const close = () => setOpen(null);
  const handleDelete = () => {
    console.log("Deleting…");
    setOpen(false);
  };
  const addProduct = () => {
    console.log("Adding...");
    setOpen(false);
  };
  return (
    <>
      <Button className="btn-primary" onClick={openDelete}>
        Delete product
      </Button>

      <Button type="submit" className="btn-secondary" onClick={openAdd}>
        Add product
      </Button>
      <Modal isOpen={modal === "delete"} onClose={close}>
        <Modal.Header>Deleting product </Modal.Header>

        <Modal.Body>
          <p>
            By clicking the <strong>“Yes, Delete”</strong> button,
            PRODUCT&nbsp;NAME will be deleted.
          </p>
        </Modal.Body>

        <Modal.Footer
          firstText="Cancel"
          firstClick={close}
          secondaryText="Yes, Delete"
          secondaryClick={handleDelete}
        />
        <Modal.Close onClick={close} />
      </Modal>

      <Modal isOpen={modal === "add"} onClose={close}>
        <Modal.Header>Deleting product </Modal.Header>

        <Modal.Body>
          <p>
            By clicking the <strong>“Yes, Delete”</strong> button,
            PRODUCT&nbsp;NAME will be deleted.
          </p>
        </Modal.Body>

        <Modal.Footer firstText="Add" firstClick={addProduct} />
        <Modal.Close onClick={close} />
      </Modal>
    </>
  );
}

export default App;
