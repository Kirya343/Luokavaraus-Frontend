import { Link } from "react-router-dom"
import Modal from "../Modal/Modal"

const LoginRequiredModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title={"Tarvitaan kirjautuminen"}>
            <Link to={"/login"}>Kirjaudu</Link>
        </Modal>
    )
}

export default LoginRequiredModal;