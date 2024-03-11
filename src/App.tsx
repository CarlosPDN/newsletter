import { useState } from "react";
import Card from "./components/card/Card.tsx";
import SuccessCard from "./components/successCard/SuccessCard.tsx";

function App() {
  const [email, setEmail] = useState<string>("");

  return (
    <div>
      {email === "" ? (
        <Card setEmail={setEmail} />
      ) : (
        <SuccessCard email={email} setEmail={setEmail} />
      )}
    </div>
  );
}

export default App;
