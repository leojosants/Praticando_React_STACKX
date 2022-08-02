// 
import Modal from "react-modal"

export function ModalInfo() {
    return (
        <Modal
            isOpen={false}
            onRequestClose={() => {}}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            ariaHideApp={false}
            contentLabel="Informações do usuário selecionado"
        >

        
        </Modal>
    );
}