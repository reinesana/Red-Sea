import { IoClose } from 'react-icons/io5';

function LanguagesModal ({ onClose }) {

    return (
        <div className="languages-modal">
            <button className='close-button' onClick={onClose}><IoClose />

            
            </button>
        </div>
    )
}

export default LanguagesModal;