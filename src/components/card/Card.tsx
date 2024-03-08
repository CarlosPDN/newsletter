import "./Card.scss";

export default function Card() {
  return (
    <form className="Area">
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
            className="Text-Email__Input"
            placeholder="email@company.com"
          />
        </div>

        <button className="Area__Text-Button">
          Subscribe to monthly newsletter
        </button>
      </div>
    </form>
  );
}
