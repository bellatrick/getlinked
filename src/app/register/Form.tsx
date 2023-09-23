import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import CustomInput from "../components/CustomInput";
import Modal from "../components/Modal";

const Form = () => {
  const [openModal, setOpenModal] = useState(false);
  const [group, setGroup] = useState({ name: "0", value: 0 });
  const [category, setCategory] = useState({ name: "", value: "" });
  const [categories, setCategories] = useState([]);
  const [registerDetails, setRegisterDetails] = useState({
    email: "",
    phone_number: "",
    team_name: "",
    project_topic: "",
    privacy_poclicy_accepted: false,
  });
  const [loading, setLoading] = useState(false);
  function getgroupArr() {
    const groups = [];
    for (let i = 1; i <= 20; i++) {
      groups.push({ value: i, name: i });
    }
    return groups;
  }

  const handleChange = (e: {
    target: { type: string; checked: any; value: any; name: any };
  }) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setRegisterDetails({ ...registerDetails, [e.target.name]: value });
  };

  // Fetch categories from API when the component mounts
  useEffect(() => {
    fetch("https://backend.getlinked.ai/hackathon/categories-list")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!registerDetails.privacy_poclicy_accepted) {
      toast("Please accept the terms and conditions to proceed");
      return;
    }
    if (registerDetails.phone_number.length > 13) {
      toast("Please ensure your phone number is not more than 13 digits");
      return;
    }
    if (category.value.length < 1) {
      toast("Please select a category");
      return;
    }
    if (group.value < 1) {
      toast("Please select total number of group");
      return;
    }
    const data = {
      ...registerDetails,
      group_size: group.value,
      category: category.value,
    };

    try {
      setLoading(true);
      const response = await fetch(
        "https://backend.getlinked.ai/hackathon/registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      setLoading(false);
      if (response.ok) {
        setOpenModal(true);
      } else {
        console.error("Failed to post registration data.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center  gap-8">
          <div className="flex flex-col md:flex-row gap-[29px] w-full ">
            <div className="w-full lg:w-[45%]">
              <p className="label">Team’s Name</p>
              <CustomInput
                onChange={handleChange}
                name={"team_name"}
                value={registerDetails.team_name}
                optional={false}
                autoComplete={"name"}
                placeholder={"Enter the name of your group"}
                type={"text"}
                disabled={false}
                page={"reg"}
              />
            </div>
            <div className="w-full lg:w-[45%]">
              <p className="label">Phone</p>
              <CustomInput
                onChange={handleChange}
                name={"phone_number"}
                value={registerDetails.phone_number}
                optional={false}
                autoComplete={"phone"}
                placeholder={"Enter your phone number"}
                type={"tel"}
                disabled={false}
                page={"reg"}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[29px] w-full ">
            <div className="w-full lg:w-[45%]">
              <p className="label">Email</p>
              <CustomInput
                onChange={handleChange}
                name={"email"}
                value={registerDetails.email}
                optional={false}
                autoComplete={"mail"}
                placeholder={"Enter your email address"}
                disabled={false}
                type="email"
                page={"reg"}
              />
            </div>
            <div className="w-full lg:w-[45%]">
              <p className="label">Project Topic</p>
              <CustomInput
                onChange={handleChange}
                name={"project_topic"}
                value={registerDetails.project_topic}
                optional={false}
                autoComplete={"topic"}
                placeholder={"What is your group project topic"}
                type={"text"}
                disabled={false}
                page={"reg"}
              />
            </div>
          </div>
          <div className="flex flex-row gap-[29px] w-full ">
            <div className="w-[45%]">
              <p className="label">Category</p>
              <Dropdown
                list={
                  categories
                    ? categories.map((cat: { name: string; id: number }) => ({
                        name: cat.name,
                        value: cat.id,
                      }))
                    : []
                }
                selected={category}
                placeholder={"Select your category"}
                onChange={(selected: { name: string; value: string }) =>
                  setCategory(selected)
                }
                hideLabel={false}
                noBorder={false}
              />
            </div>
            <div className="w-[45%]">
              <p className="label">Group Size</p>
              <Dropdown
                list={getgroupArr()}
                selected={group}
                placeholder={"Select "}
                onChange={(selected: { name: string; value: number }) =>
                  setGroup(selected)
                }
                hideLabel={false}
                noBorder={false}
              />
            </div>
          </div>{" "}
        </div>

        <div className="mt-[23px]">
          <p className="text-themepink text-[12px] italic">
            Please review your registration details before submitting
          </p>
          <div className="flex gap-2 items-center mt-[16px]">
            <input
              type="checkbox"
              onChange={handleChange}
              name={"privacy_poclicy_accepted"}
              checked={registerDetails.privacy_poclicy_accepted}
              className="h-[14px] appearance-none border-white rounded-[2px] w-[14px] darkbg focus:outline-none focus:ring-themepink focus:border-themepurple"
            />
            <p className="text-[12px] ">
              I agreed with the event terms and conditions and privacy policy
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center mt-[22px]">
          <Button
            type="submit"
            text="Submit"
            loading={loading}
            className="md:w-full"
          />
        </div>
      </form>
      <Modal
        open={openModal}
        setOpen={() => setOpenModal(false)}
        title="Congratulations you have successfully Registered!"
        details=" Yes, it was easy and you did it! check your mail box for
                    next step"
      />
    </div>
  );
};

export default Form;
