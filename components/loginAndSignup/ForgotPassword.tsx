import { useState, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import TwModal from "../twitter/TwModal";

function ForgotPassword() {
  const [open, setOpen] = useState(true);

  function forgotPasswordHandler() {
    setOpen(true);
  }

  return (
    <div>
      <button onClick={forgotPasswordHandler} className="text-xs text-cyan-500">
        forgot password?
      </button>

      <TwModal open={open} setOpen={setOpen} />
    </div>
  );
}

export default ForgotPassword;
