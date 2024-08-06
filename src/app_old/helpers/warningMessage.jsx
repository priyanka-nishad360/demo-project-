import { AiFillWarning } from "react-icons/ai"

export default function ErrorMessage({ message }) {
    return (
        <div className="error-message">
            <span className="icon">
                <AiFillWarning color="red" />
            </span>
            {message}
        </div>
    )
}