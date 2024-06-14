import { useCallback, useState } from "react";
import axios from "axios"; 

const Form = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    workEmail: "",
    phoneNumber: "",
    averageEventsPerMonth: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    try {
      const response = await axios.post(
        "https://sheet.best/api/sheets/82f5ffa3-5d25-4052-8d02-8a172e14afbd",
        formData
      );

      console.log("Response from API: ", response);
      if (response.status === 200) {
        alert("Form submitted successfully!");
        // Optionally, you can reset the form or navigate to another page
        setFormData({
          companyName: "",
          workEmail: "",
          phoneNumber: "",
          averageEventsPerMonth: "",
          termsAccepted: false,
        });
        // onClose(); // Assuming onClose function is defined elsewhere
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form");
    }
  };

  const onGroupContainer1Click = useCallback(() => {
    // Placeholder function, add your logic here if needed
    console.log("Group container 1 clicked");
  }, []);

  return (
    <div className="w-full relative bg-white h-[2470px] overflow-hidden text-left text-base text-black font-outfit">
      <div className="absolute top-[55px] left-[450px]">Why Us</div>
      <div className="absolute top-[55px] left-[577px]">{`About Us `}</div>
      <div className="absolute top-[55px] left-[715px]">Packages</div>
      <div className="absolute top-[55px] left-[856px]">FAQs</div>
      <div className="absolute top-[55px] left-[968px]">Contact Us</div>
      <b className="absolute top-[32px] left-[134px] text-21xl font-adineue-pro">
        Click Ai
      </b>
      <div className="absolute top-[32px] left-[1236px] rounded-mini box-border w-36 h-[47px] border-[1px] border-solid border-black" />
      <div className="absolute top-[45px] left-[1278px]">Buy now</div>
      <div className="absolute top-[166px] left-[140px] text-[60px] font-adineue-pro">
        <p className="m-0 text-dodgerblue">
          <span className="text-black">Book your</span>
          <span> 30 - minute</span>
        </p>
        <p className="m-0">personalized Click Ai</p>
        <p className="m-0">demo today!</p>
      </div>
      <div className="absolute top-[401px] left-[140px] text-5xl text-dimgray inline-block w-[628px]">
        <p className="m-0">
          Let our sales experts to take you on a whirlwind tour of how Click Ai
          can maximize your event experiences.
        </p>
      </div>
      <div className="absolute top-[528px] left-[134px] rounded-mini bg-seashell w-[634px] h-[336px]" />
      <div className="absolute top-[152px] left-[809px] rounded-mini bg-indianred w-[643px] h-[983px]" />

      <form onSubmit={handleSubmit}>
        <div className="absolute top-[387px] left-[884px] rounded-mini bg-white w-[497px] h-20">
          <input
            type="text"
            name="companyName"
            placeholder="Company name"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full h-full rounded-mini p-4 text-xl"
            required
          />
        </div>
        <div className="absolute top-[523px] left-[884px] rounded-mini bg-white w-[497px] h-20">
          <input
            type="email"
            name="workEmail"
            placeholder="Work Email"
            value={formData.workEmail}
            onChange={handleChange}
            className="w-full h-full rounded-mini p-4 text-xl"
            required
          />
        </div>
        <div className="absolute top-[659px] left-[884px] rounded-mini bg-white w-[497px] h-20">
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full h-full rounded-mini p-4 text-xl"
            required
          />
        </div>
        <div className="absolute top-[784px] left-[882px] rounded-mini bg-white w-[497px] h-20">
          <select
            name="averageEventsPerMonth"
            value={formData.averageEventsPerMonth}
            onChange={handleChange}
            className="w-full h-full rounded-mini p-4 text-xl"
            required
          >
            <option value="" disabled>
              Average events per month
            </option>
            <option value="1-5">1-5</option>
            <option value="6-10">6-10</option>
            <option value="11-20">11-20</option>
            <option value="21+">21+</option>
          </select>
        </div>
        <div className="absolute top-[890px] left-[891px] flex items-center">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="w-5 h-5"
            required
          />
          <label className="ml-2 text-xl text-white">
            <span>I agree to click Ai’s</span>
            <span className="font-medium">{` Terms and Services `}</span>
            <span>{`and `}</span>
            <span className="font-medium">Privacy Policy.</span>
          </label>
        </div>
        <button
          type="submit"
          className="absolute top-[993px] left-[882px] rounded-3xs bg-white w-[232px] h-20 text-5xl text-gray font-medium"
        >
          Let’s talk
        </button>
      </form>

      <div className="absolute top-[577px] left-[191px] text-5xl font-medium text-salmon inline-block w-[484px] h-[30px]">
        “Figma ipsum component variant main layer”
      </div>
      <div className="absolute top-[765px] left-[285px] text-5xl font-medium inline-block w-[193px] h-[37px]">
        Wade Warren
      </div>
      <div className="absolute top-[794px] left-[285px] text-xl inline-block w-[127px] h-[25px]">
        Banglore
      </div>
      <div className="absolute top-[617px] left-[202px] text-xl font-light inline-block w-[389px]">
        Office ipsum you must be muted. High-level revision lunch able would.
        Due management 4-blocker low after while land message.
      </div>
      <img
        className="absolute top-[752px] left-[191px] rounded-[50%] w-[85px] h-[85px] object-cover"
        alt=""
        src="/ellipse-691@2x.png"
      />
      <div className="absolute top-[1791px] left-[0px] w-[1512px] h-[679px] text-white">
        <div className="absolute top-[0px] left-[0px] bg-indianred w-[1512px] h-[679px]" />
        <div className="absolute top-[496.5px] left-[62.5px] box-border w-[1393.1px] h-px border-t-[1px] border-solid border-white" />
        <div className="absolute top-[132px] left-[85px] text-xl inline-block w-[477px]">
          Click Ai is an AI-based photo distribution platform crafted to elevate
          event engagement, boost sponsors' ROI, and offer event analytics for
          all types of events.
        </div>
        <div className="absolute top-[77px] left-[731px] text-xl font-semibold inline-block w-[90px]">
          Company
        </div>
        <div className="absolute top-[77px] left-[989px] text-xl font-semibold inline-block w-[52px]">
          Sales
        </div>
        <div className="absolute top-[77px] left-[1209px] text-xl font-semibold inline-block w-20">
          Support
        </div>
        <b className="absolute top-[57px] left-[82px] text-45xl font-adineue-pro">
          Click Ai
        </b>
        <img
          className="absolute top-[244px] left-[83px] w-6 h-6 overflow-hidden"
          alt=""
          src="/facebook.svg"
        />
        <img
          className="absolute h-[2.95%] w-[1.32%] top-[36.23%] right-[90.21%] bottom-[60.82%] left-[8.47%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
        <img
          className="absolute top-[244px] left-[169px] w-6 h-6 overflow-hidden"
          alt=""
          src="/linkedin.svg"
        />
        <div className="absolute top-[132px] left-[731px] inline-block w-[66px] h-[17px]">
          About Us
        </div>
        <div className="absolute top-[132px] left-[989px] inline-block w-[127px] h-[17px]">
          sales@clickai.com
        </div>
        <div className="absolute top-[132px] left-[1207px] inline-block w-[147px] h-[17px]">
          Support@clickai.com
        </div>
        <div className="absolute top-[177px] left-[731px] inline-block w-[87px] h-[17px]">
          Contact Us
        </div>
        <div className="absolute top-[221px] left-[731px] inline-block w-[87px] h-[17px]">
          Packages
        </div>
        <div className="absolute top-[527px] left-[594px] text-5xl inline-block w-[308px] h-[25px]">
          Powered by Anthill Networks
        </div>
        <div className="absolute top-[177px] left-[989px] inline-block w-28 h-[17px]">
          (406) 555-0120
        </div>
        <div className="absolute top-[177px] left-[1207px] inline-block w-28 h-[17px]">
          (684) 555-0102
        </div>
        <div className="absolute top-[222px] left-[1209px] inline-block w-[87px] h-[17px]">
          FAQs
        </div>
        <div className="absolute top-[570px] left-[577px] font-light inline-block w-[53px] h-[17px]">
          Privacy
        </div>
        <div className="absolute top-[571px] left-[654px] font-light inline-block w-[99px] h-[17px]">
          Refund policy
        </div>
        <div className="absolute top-[570px] left-[777px] font-light inline-block w-[139px] h-[17px]">{`Terms & Conditions`}</div>
        <div className="absolute top-[570.5px] left-[641.5px] box-border w-px h-[23px] border-r-[1px] border-solid border-white" />
        <div className="absolute top-[570.5px] left-[764.5px] box-border w-px h-[23px] border-r-[1px] border-solid border-white" />
      </div>
      <b className="absolute top-[1344px] left-[140px] text-45xl inline-block font-adineue-pro text-dodgerblue w-[802px]">
        <p className="m-0">{`Let’s Begin Your Journey `}</p>
        <p className="m-0">to Epic Events.</p>
      </b>
      <div
        className="absolute top-[1607px] left-[140px] w-[188px] h-[50px] cursor-pointer text-white font-poppins"
        onClick={onGroupContainer1Click}
      >
        <div className="absolute top-[0px] left-[0px] w-[188px] h-[50px]">
          <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-crimson w-[188px] h-[50px]" />
        </div>
        <div className="absolute top-[12px] left-[23px] font-medium inline-block w-[146px] h-[21px]">
          Request for demo
        </div>
      </div>
      <div className="absolute top-[1506px] left-[140px] text-5xl inline-block w-[460px]">
        <p className="m-0">Our team is all set to show you how to take</p>
        <p className="m-0">your events to new heights.</p>
      </div>
      <img
        className="absolute top-[808px] left-[1313px] w-[34px] h-[34px] overflow-hidden object-contain"
        alt=""
        src="/chevronright@2x.png"
      />
    </div>
  );
};

export default Form;
