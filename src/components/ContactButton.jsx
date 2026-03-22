import { useNavigate } from "react-router-dom";

function ContactButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate("/contact")}
      className="rounded-full border border-emerald-700 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-800 hover:text-white active:text-white active:bg-emerald-600"
    >
      Contact Us
    </button>
  );
}

export default ContactButton;
