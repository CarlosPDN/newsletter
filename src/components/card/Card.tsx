import { useState } from "react";
import "./Card.scss";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
};

export default function Card({
  setEmail,
}: {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { register, handleSubmit } = useForm<Inputs>();
  const [error, setError] = useState<boolean>(false);

  const submit: SubmitHandler<Inputs> = (data) => {
    const domain = data.email.split("@")[1];

    if ((domain && domain === "gmail.com") || domain === "hotmail.com") {
      setEmail(data.email);
    } else {
      setError(true);
    }
  };

  return (
    <form className="Area" onSubmit={handleSubmit(submit)}>
      <div className="Area__Image" />

      <div className="Area__Text">
        <h1>Stay updated!</h1>

        <p>Join 60,000+ product managers receiving monthly updates on:</p>

        <ul className="Area__List">
          <li className="Area__List-Element">
            Product discovery and building what matters
          </li>
          <li className="Area__List-Element">
            Measuring to ensure updates are a success
          </li>
          <li>And much more!</li>
        </ul>

        <div className="Area__Text-Email">
          <label className="Text-Email__Label">Email address</label>
          <input
            {...register("email", { required: true })}
            className="Text-Email__Input"
            placeholder="email@company.com"
          />
          {error && (
            <span style={{ color: "red", marginTop: "3px" }}>
              Domain needs to be gmail or hotmail
            </span>
          )}
        </div>

        <button className="Area__Text-Button" type="submit">
          Subscribe to monthly newsletter
        </button>
      </div>
    </form>
  );
}
