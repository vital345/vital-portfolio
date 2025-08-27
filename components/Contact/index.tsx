import emailjs from "@emailjs/browser";
import { ChangeEvent, FormEvent, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type: string, message: string) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("From submitted:", formData);
      await emailjs.send(
        "service_1yrya1g",
        "template_h8lcv5h",
        {
          from_name: formData.name,
          to_name: "Vital",
          from_email: formData.email,
          to_email: "vittalupadhyaya@gmail.com",
          message: formData.message,
        },
        "IK_ETkVnyd7fZ-0Oh"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "You message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Somthing went wrong!");
    }
  };

  return (
    <>
      <div className="mt-10 flex flex-col justify-center items-center px-6 gap-y-4">
        <p className="text-4xl font-bold text-center">
          Interested in Working With Me?
        </p>
        <div className="flex flex-col">
          <p className="font-normal text-neutral-400 text-center">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>
      </div>
      <section className="relative flex items-center sm:px-10 px-5 lg:px-15 py-10">
        <div className="flex flex-col w-full items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-[#030412]">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="feild-label">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="field-input field-input-focus"
                placeholder="John Doe"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="feild-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="field-input field-input-focus"
                placeholder="JohnDoe@email.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="feild-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="field-input field-input-focus"
                placeholder="Share your thoughts..."
                autoComplete="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-blue-950 hover-animation"
              disabled={isLoading}
            >
              {!isLoading ? "Get in Touch" : "Getting in touch..."}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
