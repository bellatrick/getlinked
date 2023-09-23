import React, { useState } from "react";
import Button from "../components/Button";
import Textarea from "../components/Textarea";
import CustomInput from "../components/CustomInput";
import Modal from "../components/Modal";

const Form = () => {
  const [contactDetails, setContactDetails] = useState({
    first_name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setContactDetails({ ...contactDetails, [name]: value });
  };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        "https://backend.getlinked.ai/hackathon/contact-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactDetails),
        }
      );
      setLoading(false);
      if (response.ok) {
        console.log("Contact data posted successfully.");
        setOpenModal(true);
        setContactDetails({
          first_name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Failed to post contact data.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-[42px]">
          <div className="w-full">
            <CustomInput
              onChange={handleChange}
              name={"first_name"}
              value={contactDetails.first_name}
              optional={false}
              autoComplete={"name"}
              placeholder={"First name"}
              type={"text"}
              disabled={false}
            />
          </div>
          <div className="w-full">
            <CustomInput
              onChange={handleChange}
              name={"email"}
              value={contactDetails.email}
              optional={false}
              autoComplete={"mail"}
              placeholder={"Mail"}
              type={"email"}
              disabled={false}
            />
          </div>
          <div className="w-full">
            <Textarea
              onChange={handleChange}
              name={"message"}
              value={contactDetails.message}
              optional={false}
              autoComplete={"mail"}
              placeholder={"Message"}
            />
          </div>
        </div>
        <div className="flex justify-center mt-[31px]">
          <Button text="Submit" type="submit" loading={loading} />
        </div>
      </form>
      <Modal
        open={openModal}
        setOpen={() => setOpenModal(false)}
        title="Your message has been successfully sent "
        details="We will get back to you as soon as we can."
      />
    </div>
  );
};

export default Form;
