import { useState } from "react";

export const FormSubscribe = () => {
  const [loading, setloading] = useState(false);
  const [readySend, setReadySend] = useState(false);

  const handleSendSubscription = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setloading(true);
    setTimeout(() => {
      setloading(false);
      setReadySend(true);
    }, 3000);
  }

  return <div className="box">
    <form onSubmit={handleSendSubscription}>
      <div className="field">
        <label>Nombre</label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Email</label>
        <input type="email" />
      </div>

      <div className="btn-send">
        <button type="submit" disabled={loading}>{loading ? 'Registrando...' : 'Registrarse'}</button>
      </div>

      {readySend && <div className="message-success">
        Gracias por suscribirte 😉
      </div>}
    </form>
  </div>;
}
