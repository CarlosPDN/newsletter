import Check from "../../assets/big-check.png";
import "./SuccessCard.scss";

export default function SuccessCard({
  email,
  setEmail,
}: {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="Success-Area">
      <div className="Success-Area__text">
        <img src={Check} className="text__Icon" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to{" "}
          <span style={{ fontWeight: 600 }}>{email}</span>. Please open it and
          click the button inside to confirm your subscription
        </p>
      </div>
      <div className="Success-Area__Button">
        <button
          onClick={() => {
            setEmail("");
            console.log(email);
          }}
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
}
