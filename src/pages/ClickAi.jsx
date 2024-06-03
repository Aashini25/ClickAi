import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ClickAi = () => {
  const navigate = useNavigate();

  const onBuyNowTextClick = useCallback(() => {
    navigate("/form");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangleClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGroupContainerClick = useCallback(() => {
    navigate("/form");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/form");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[10997px] overflow-hidden text-left text-base text-black font-outfit">
      <img
        className="absolute top-[107px] left-[60px] rounded-6xl w-[1392px] h-[752px]"
        alt=""
        src="/rectangle-2938.svg"
      />
      <div className="absolute top-[55px] left-[450px]">Why Us</div>
      <div className="absolute top-[6238px] left-[550px] text-5xl text-center inline-block w-[430px]">
        <p className="m-0">No Hidden Fees, No Games, No Surprise</p>
        <p className="m-0">Free to Get Started</p>
      </div>
      <div className="absolute top-[6721px] left-[212px] text-5xl text-center inline-block w-[212px]">
        Photo Ai features
      </div>
      <div className="absolute top-[6850px] left-[226px] text-5xl inline-block w-[239px]">
        <p className="m-0">Customer relationship management System</p>
        <p className="m-0">(CRM)</p>
      </div>
      <div className="absolute top-[7039px] left-[226px] text-5xl inline-block w-[136px] h-[60px]">
        <p className="m-0">WhatsApp</p>
        <p className="m-0">{`Integeration `}</p>
      </div>
      <div className="absolute top-[55px] left-[577px]">{`About Us `}</div>
      <div className="absolute top-[55px] left-[715px]">Packages</div>
      <div className="absolute top-[55px] left-[856px]">FAQs</div>
      <div className="absolute top-[55px] left-[968px]">Contact Us</div>
      <b className="absolute top-[32px] left-[134px] text-21xl font-adineue-pro">
        Click Ai
      </b>
      <div className="absolute top-[32px] left-[1236px] rounded-mini box-border w-36 h-[47px] border-[1px] border-solid border-black" />
      <div className="absolute top-[7187px] left-[681px] rounded-mini box-border w-36 h-10 border-[1px] border-solid border-black" />
      <div
        className="absolute top-[45px] left-[1278px] cursor-pointer"
        onClick={onBuyNowTextClick}
      >
        Buy now
      </div>
      <div className="absolute top-[7196px] left-[711px] inline-block w-[84px] h-[17px]">
        Get Started
      </div>
      <img
        className="absolute top-[107px] left-[60px] w-[1392px] h-[762px]"
        alt=""
        src="/frame-256.svg"
      />
      <div className="absolute top-[2060px] left-[645px] rounded-mini bg-lightcoral w-[207px] h-[34px]" />
      <div className="absolute top-[2067px] left-[663px] font-semibold text-white">{`Elevate Your Gatherings `}</div>
      <b className="absolute top-[6153px] left-[321px] text-45xl inline-block font-adineue-pro text-center w-[888px]">
        Simple Plans, Free To Try
      </b>
      <b className="absolute top-[7554px] left-[156px] text-45xl inline-block font-adineue-pro w-[861px]">
        <p className="m-0">
          <span className="text-black">Over</span>
          <span className="text-coral"> 100+</span>
          <span>
            {" "}
            people have enriched their events and persevered special moments
          </span>
        </p>
        <p className="m-0">with Click Ai</p>
      </b>
      <b className="absolute top-[8548px] left-[149px] text-81xl inline-block font-adineue-pro text-coral w-[159px]">
        34
      </b>
      <b className="absolute top-[8548px] left-[551px] text-81xl inline-block font-adineue-pro text-coral w-[274px]">
        95%
      </b>
      <b className="absolute top-[8549px] left-[1047px] text-81xl inline-block font-adineue-pro text-coral w-[227px]">
        500+
      </b>
      <b className="absolute top-[6588px] left-[687px] text-13xl inline-block font-adineue-pro text-center w-[136px]">
        Standard
      </b>
      <img
        className="absolute top-[391px] left-[537px] w-[402.7px] h-[451.7px] object-contain"
        alt=""
        src="/group-9262@2x.png"
      />
      <div
        className="absolute top-[955px] left-[0px] bg-lavenderblush w-[1531px] h-[120px] cursor-pointer"
        data-scroll-to="rectangle1"
        onClick={onRectangle1Click}
      />
      <div
        className="absolute top-[5854px] left-[-19px] bg-lavenderblush w-[1531px] h-[120px] cursor-pointer"
        data-scroll-to="rectangle"
        onClick={onRectangleClick}
      />
      <div className="absolute top-[1001px] left-[260px] text-5xl leading-[109.97%] font-medium text-center inline-block w-[103px]">
        Wedding
      </div>
      <div className="absolute top-[1003px] left-[482px] text-5xl leading-[109.97%] font-medium text-center inline-block w-[156px]">
        Bridal Shower
      </div>
      <div className="absolute top-[1003px] left-[755px] text-5xl leading-[109.97%] font-medium text-center inline-block w-[156px]">{`Office day out `}</div>
      <div className="absolute top-[999px] left-[1029px] text-5xl leading-[109.97%] font-medium text-center inline-block w-[156px]">
        Ceremony
      </div>
      <div className="absolute top-[1006px] left-[1302px] text-5xl leading-[109.97%] font-medium text-center inline-block w-[156px]">
        Baby shower
      </div>
      <div className="absolute top-[999px] left-[-14px] text-5xl leading-[109.97%] font-medium text-center inline-block w-[156px]">
        Baby shower
      </div>
      <img
        className="absolute top-[1005px] left-[958px] w-6 h-[23px] overflow-hidden"
        alt=""
        src="/flare.svg"
      />
      <img
        className="absolute top-[1005px] left-[1232px] w-6 h-[23px] overflow-hidden"
        alt=""
        src="/flare.svg"
      />
      <img
        className="absolute top-[1003px] left-[187px] w-6 h-6 overflow-hidden"
        alt=""
        src="/flare1.svg"
      />
      <img
        className="absolute top-[1005px] left-[408px] w-6 h-6 overflow-hidden"
        alt=""
        src="/flare1.svg"
      />
      <img
        className="absolute top-[1005px] left-[682px] w-6 h-6 overflow-hidden"
        alt=""
        src="/flare1.svg"
      />
      <div className="absolute top-[4900px] left-[1885px] rounded-xl bg-gainsboro w-[430px] h-[596px]" />
      <b className="absolute top-[4945px] left-[1916px] text-17xl inline-block font-adineue-pro w-[277px] h-[81px]">
        Customer management with outstanding balance tracking
      </b>
      <div className="absolute top-[5123px] left-[1916px] font-adineue-pro inline-block w-[282px] h-[55px]">
        To invite guests to your event, create awesome digital invitations that
        are sure to catch their attention.
      </div>
      <div className="absolute top-[6458px] left-[697px] rounded-[50%] bg-lavenderblush w-[120px] h-[120px]" />
      <img
        className="absolute top-[6704px] left-[722px] w-[65px] h-[65px] overflow-hidden"
        alt=""
        src="/checkdecagram.svg"
      />
      <img
        className="absolute top-[6862px] left-[722px] w-[65px] h-[65px] overflow-hidden"
        alt=""
        src="/checkdecagram1.svg"
      />
      <img
        className="absolute top-[7036px] left-[719px] w-[65px] h-[65px] overflow-hidden"
        alt=""
        src="/checkdecagram1.svg"
      />
      <div className="absolute top-[6375px] left-[984px] rounded-mini bg-gold w-[279px] h-[921px]" />
      <div className="absolute top-[6407px] left-[1003px] rounded-mini bg-white w-[241px] h-[856px]" />
      <div className="absolute top-[7190px] left-[1053px] rounded-mini box-border w-36 h-10 border-[1px] border-solid border-black" />
      <div className="absolute top-[7199px] left-[1083px] inline-block w-[84px] h-[17px]">
        Get Started
      </div>
      <b className="absolute top-[6595px] left-[1061px] text-13xl inline-block font-adineue-pro text-center w-[136px]">
        Premium
      </b>
      <div className="absolute top-[6461px] left-[1069px] rounded-[50%] bg-lavenderblush w-[120px] h-[120px]" />
      <img
        className="absolute top-[6708px] left-[1096px] w-[65px] h-[65px] overflow-hidden"
        alt=""
        src="/checkdecagram.svg"
      />
      <img
        className="absolute top-[6866px] left-[1096px] w-[65px] h-[65px] overflow-hidden"
        alt=""
        src="/checkdecagram.svg"
      />
      <img
        className="absolute top-[7040px] left-[1093px] w-[65px] h-[65px] overflow-hidden"
        alt=""
        src="/checkdecagram.svg"
      />
      <div className="absolute top-[7943px] left-[515px] shadow-[-1px_10px_10px_2px_rgba(0,_0,_0,_0.25)] rounded-6xl bg-gainsboro w-[473px] h-[428px]" />
      <div className="absolute top-[7943px] left-[1019px] shadow-[-1px_10px_10px_2px_rgba(0,_0,_0,_0.25)] rounded-6xl bg-gainsboro w-[473px] h-[428px]" />
      <div className="absolute top-[7943px] left-[11px] shadow-[-1px_10px_10px_2px_rgba(0,_0,_0,_0.25)] rounded-6xl bg-gainsboro w-[473px] h-[428px]" />
      <div className="absolute top-[7943px] left-[515px] shadow-[-1px_10px_10px_2px_rgba(0,_0,_0,_0.25)] rounded-6xl bg-mintcream w-[473px] h-[428px]" />
      <div className="absolute top-[7943px] left-[1019px] rounded-6xl bg-ghostwhite w-[473px] h-[428px]" />
      <div className="absolute top-[7943px] left-[11px] rounded-6xl bg-lightgoldenrodyellow w-[473px] h-[428px]" />
      <div className="absolute top-[7989px] left-[559px] text-11xl font-medium inline-block w-[373px] h-[60px]">
        “Figma ipsum component variant main layer”
      </div>
      <div className="absolute top-[7989px] left-[1063px] text-11xl font-medium inline-block w-[373px] h-[60px]">
        “Figma ipsum component variant main layer”
      </div>
      <div className="absolute top-[7989px] left-[55px] text-11xl font-medium inline-block w-[373px] h-[60px]">
        “Figma ipsum component variant main layer”
      </div>
      <div className="absolute top-[7989px] left-[559px] text-11xl font-medium text-seagreen inline-block w-[373px] h-[60px]">
        “Figma ipsum component variant main layer”
      </div>
      <div className="absolute top-[7989px] left-[1063px] text-11xl font-medium text-midnightblue inline-block w-[373px] h-[60px]">
        “Figma ipsum component variant main layer”
      </div>
      <div className="absolute top-[7989px] left-[55px] text-11xl font-medium text-saddlebrown-100 inline-block w-[373px] h-[60px]">
        “Figma ipsum component variant main layer”
      </div>
      <div className="absolute top-[8261px] left-[653px] text-5xl font-medium inline-block w-[193px] h-[37px]">
        Wade Warren
      </div>
      <div className="absolute top-[8261px] left-[1157px] text-5xl font-medium inline-block w-[193px] h-[37px]">
        Wade Warren
      </div>
      <div className="absolute top-[8261px] left-[149px] text-5xl font-medium inline-block w-[193px] h-[37px]">
        Wade Warren
      </div>
      <div className="absolute top-[8261px] left-[653px] text-5xl font-medium inline-block w-[193px] h-[37px]">
        Wade Warren
      </div>
      <div className="absolute top-[8577px] left-[276px] text-5xl font-medium inline-block w-[115px] h-[60px]">
        <p className="m-0">{`Successful `}</p>
        <p className="m-0">{`Events `}</p>
      </div>
      <div className="absolute top-[8577px] left-[760px] text-5xl font-medium inline-block w-[141px] h-[60px]">
        <p className="m-0">{`Guests `}</p>
        <p className="m-0">Engagement</p>
      </div>
      <div className="absolute top-[8584px] left-[1284px] text-5xl font-medium inline-block w-[141px] h-[60px]">
        <p className="m-0">Happy</p>
        <p className="m-0">Customers</p>
      </div>
      <div className="absolute top-[8261px] left-[1157px] text-5xl font-medium inline-block w-[193px] h-[37px]">
        Wade Warren
      </div>
      <div className="absolute top-[8261px] left-[149px] text-5xl font-medium inline-block w-[193px] h-[37px]">
        Wade Warren
      </div>
      <div className="absolute top-[8290px] left-[653px] text-xl inline-block w-[127px] h-[25px]">
        Banglore
      </div>
      <div className="absolute top-[8290px] left-[1157px] text-xl inline-block w-[127px] h-[25px]">
        Banglore
      </div>
      <div className="absolute top-[8290px] left-[149px] text-xl inline-block w-[127px] h-[25px]">
        Banglore
      </div>
      <div className="absolute top-[8290px] left-[653px] text-xl inline-block w-[127px] h-[25px]">
        Banglore
      </div>
      <div className="absolute top-[8290px] left-[1157px] text-xl inline-block w-[127px] h-[25px]">
        Banglore
      </div>
      <div className="absolute top-[8290px] left-[149px] text-xl inline-block w-[127px] h-[25px]">
        Banglore
      </div>
      <div className="absolute top-[8082px] left-[561px] text-3xl font-light inline-block w-96">
        Office ipsum you must be muted. High-level revision lunch able would.
        Due management 4-blocker low after while land message.
      </div>
      <div className="absolute top-[8082px] left-[1065px] text-3xl font-light inline-block w-96">
        Office ipsum you must be muted. High-level revision lunch able would.
        Due management 4-blocker low after while land message.
      </div>
      <div className="absolute top-[8082px] left-[57px] text-3xl font-light inline-block w-96">
        Office ipsum you must be muted. High-level revision lunch able would.
        Due management 4-blocker low after while land message.
      </div>
      <div className="absolute top-[8082px] left-[561px] text-3xl font-light inline-block w-96">
        Office ipsum you must be muted. High-level revision lunch able would.
        Due management 4-blocker low after while land message.
      </div>
      <div className="absolute top-[8082px] left-[1065px] text-3xl font-light inline-block w-96">
        Office ipsum you must be muted. High-level revision lunch able would.
        Due management 4-blocker low after while land message.
      </div>
      <div className="absolute top-[8082px] left-[57px] text-3xl font-light inline-block w-96">
        Office ipsum you must be muted. High-level revision lunch able would.
        Due management 4-blocker low after while land message.
      </div>
      <img
        className="absolute top-[8248px] left-[559px] rounded-[50%] w-[85px] h-[85px] object-cover"
        alt=""
        src="/ellipse-685@2x.png"
      />
      <img
        className="absolute top-[8248px] left-[1063px] rounded-[50%] w-[85px] h-[85px] object-cover"
        alt=""
        src="/ellipse-685@2x.png"
      />
      <img
        className="absolute top-[8248px] left-[55px] rounded-[50%] w-[85px] h-[85px] object-cover"
        alt=""
        src="/ellipse-685@2x.png"
      />
      <img
        className="absolute top-[8248px] left-[559px] rounded-[50%] w-[85px] h-[85px] object-cover"
        alt=""
        src="/ellipse-686@2x.png"
      />
      <img
        className="absolute top-[8248px] left-[1063px] rounded-[50%] w-[85px] h-[85px] object-cover"
        alt=""
        src="/ellipse-688@2x.png"
      />
      <img
        className="absolute top-[8248px] left-[55px] rounded-[50%] w-[85px] h-[85px] object-cover"
        alt=""
        src="/ellipse-690@2x.png"
      />
      <div className="absolute top-[8847px] left-[-18px] bg-lavenderblush w-[1529px] h-[885px]" />
      <b className="absolute top-[8960px] left-[454px] text-45xl inline-block font-adineue-pro text-center w-[627px]">
        <p className="m-0">
          <span className="text-mediumseagreen">Got questions?</span>
          <span>{` We `}</span>
        </p>
        <p className="m-0">have all your answers!</p>
      </b>
      <b className="absolute top-[9862px] left-[169px] text-45xl inline-block font-adineue-pro text-dodgerblue w-[802px]">
        <p className="m-0">{`Let’s Begin Your Journey `}</p>
        <p className="m-0">to Epic Events.</p>
      </b>
      <div className="absolute top-[9250.5px] left-[298.5px] box-border w-[933px] h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[9356.5px] left-[298.5px] box-border w-[933px] h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[9464.5px] left-[298.5px] box-border w-[933px] h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[9579.5px] left-[298.5px] box-border w-[933px] h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[9203px] left-[311px] text-xl inline-block w-[914px] h-[30px]">
        Office ipsum you must be muted. Muted one win users see while every hard
        teeth kpis?
      </div>
      <div className="absolute top-[9315px] left-[299px] text-xl inline-block w-[914px] h-[30px]">
        Office ipsum you must be muted. Muted one win users see while every hard
        teeth kpis?
      </div>
      <div className="absolute top-[9420px] left-[299px] text-xl inline-block w-[914px] h-[30px]">
        Office ipsum you must be muted. Muted one win users see while every hard
        teeth kpis?
      </div>
      <div className="absolute top-[9543px] left-[299px] text-xl inline-block w-[914px] h-[30px]">
        Office ipsum you must be muted. Muted one win users see while every hard
        teeth kpis?
      </div>
      <img
        className="absolute top-[9192px] left-[1169px] w-11 h-11 overflow-hidden"
        alt=""
        src="/plus.svg"
      />
      <img
        className="absolute top-[9301px] left-[1166px] w-11 h-11 overflow-hidden"
        alt=""
        src="/plus.svg"
      />
      <img
        className="absolute top-[9406px] left-[1166px] w-11 h-11 overflow-hidden"
        alt=""
        src="/plus.svg"
      />
      <img
        className="absolute top-[9529px] left-[1166px] w-11 h-11 overflow-hidden"
        alt=""
        src="/plus.svg"
      />
      <div className="absolute top-[4498px] left-[165px] text-5xl">
        Get started today and watch your event ROI soar by 400%
      </div>
      <b className="absolute top-[4335px] left-[161px] text-45xl inline-block font-adineue-pro w-[888px]">
        <p className="m-0">Double your event conversions</p>
        <p className="m-0">
          <span>{`with a `}</span>
          <span className="text-slateblue">single platform</span>
        </p>
      </b>
      <div className="absolute top-[4606px] left-[535px] rounded-xl bg-lightcyan-200 w-[445px] h-[238px]" />
      <div className="absolute top-[4608px] left-[57px] rounded-xl bg-mintcream w-[450px] h-[493px]" />
      <div className="absolute top-[5126px] left-[57px] rounded-xl bg-oldlace w-[450px] h-[497px]" />
      <div className="absolute top-[4863px] left-[535px] rounded-xl bg-lightgoldenrodyellow w-[445px] h-[238px]" />
      <div className="absolute top-[5385px] left-[535px] rounded-xl bg-lightcyan-100 w-[450px] h-[238px]" />
      <div className="absolute top-[5381px] left-[1002px] rounded-xl bg-lightsteelblue w-[450px] h-[238px]" />
      <div className="absolute top-[4863px] left-[1004px] rounded-xl bg-ghostwhite w-[445px] h-[238px]" />
      <div className="absolute top-[5122px] left-[535px] rounded-xl bg-ghostwhite w-[450px] h-[238px]" />
      <div className="absolute top-[5122px] left-[1002px] rounded-xl bg-seashell w-[450px] h-[238px]" />
      <b className="absolute top-[4649px] left-[568px] text-13xl inline-block font-adineue-pro text-cadetblue w-[180px]">{`Calendar Scheduling `}</b>
      <b className="absolute top-[4903px] left-[1037px] text-13xl inline-block font-adineue-pro text-midnightblue w-[332px] h-[81px]">
        <p className="m-0">{`Events `}</p>
        <p className="m-0">Management</p>
      </b>
      <b className="absolute top-[5162px] left-[568px] text-13xl inline-block font-adineue-pro text-midnightblue w-[249px] h-[38px]">
        Digital invitations
      </b>
      <b className="absolute top-[5154px] left-[1035px] text-13xl inline-block font-adineue-pro text-tomato w-[272px] h-[76px]">
        Personalized voice invitations
      </b>
      <div className="absolute top-[4745px] left-[568px] font-adineue-pro inline-block w-[282px]">
        To invite guests to your event, create awesome digital invitations that
        are sure to catch their attention.
      </div>
      <div className="absolute top-[4994px] left-[1037px] font-adineue-pro inline-block w-[282px] h-[55px]">
        To invite guests to your event, create awesome digital invitations that
        are sure to catch their attention.
      </div>
      <div className="absolute top-[5207px] left-[568px] font-adineue-pro inline-block w-[258px] h-[55px]">
        To invite guests to your event, create awesome digital invitations that
        are sure to catch their attention.
      </div>
      <div className="absolute top-[5234px] left-[1035px] font-adineue-pro inline-block w-[258px] h-[55px]">
        To invite guests to your event, create awesome digital invitations that
        are sure to catch their attention.
      </div>
      <div className="absolute top-[4606px] left-[1004px] rounded-xl bg-oldlace w-[445px] h-[238px]" />
      <b className="absolute top-[4649px] left-[1030px] text-13xl inline-block font-adineue-pro text-saddlebrown-200 w-48 h-[81px]">
        Reporting Functionality
      </b>
      <div className="absolute top-[4740px] left-[1030px] font-adineue-pro inline-block w-[282px] h-[55px]">
        To invite guests to your event, create awesome digital invitations that
        are sure to catch their attention.
      </div>
      <b className="absolute top-[4903px] left-[568px] text-13xl inline-block font-adineue-pro text-darkolivegreen w-[282px] h-[81px]">{`Automated greetings & Offers`}</b>
      <b className="absolute top-[5423px] left-[568px] text-13xl leading-[0%] inline-block font-adineue-pro text-darkslategray w-[285px] h-[57px]">
        <p className="m-0">{`Customer management `}</p>
      </b>
      <b className="absolute top-[5417px] left-[1031px] text-13xl inline-block font-adineue-pro text-darkslateblue w-[243px] h-[74px]">
        High potential lead generation
      </b>
      <div className="absolute top-[4994px] left-[568px] font-adineue-pro inline-block w-[282px] h-[55px]">
        To invite guests to your event, create awesome digital invitations that
        are sure to catch their attention.
      </div>
      <div className="absolute top-[5499px] left-[565px] font-adineue-pro inline-block w-[257px] h-[55px]">
        To invite guests to your event, create awesome digital invitations that
        are sure to catch their attention.
      </div>
      <div className="absolute top-[5504px] left-[1032px] font-adineue-pro inline-block w-[257px] h-[55px]">
        To invite guests to your event, create awesome digital invitations that
        are sure to catch their attention.
      </div>
      <b className="absolute top-[4655px] left-[82px] text-17xl inline-block font-adineue-pro text-seagreen text-center w-[400px]">
        WhatsApp Integration
      </b>
      <div className="absolute top-[4710px] left-[85px] text-xl text-center inline-block w-[394px]">{` Enjoy Meta - verified WhatsApp integration into our software for secure messaging. `}</div>
      <b className="absolute top-[5166px] left-[82px] text-17xl inline-block font-adineue-pro text-saddlebrown-100 text-center w-[396px]">
        Seamless QR based registretions for guests
      </b>
      <img
        className="absolute top-[5340px] left-[134px] w-[292px] h-[277px] overflow-hidden"
        alt=""
        src="/qr-codebro-1.svg"
      />
      <div className="absolute top-[5263px] left-[89px] font-adineue-pro text-center inline-block w-[398px]">
        To invite guests to your event, create awesome digital invitations that
        are sure to catch their attention.
      </div>
      <b className="absolute top-[2113px] left-[335px] text-45xl inline-block font-adineue-pro text-gold text-center w-[802px]">
        Ai Gallery Search
      </b>
      <b className="absolute top-[3279px] left-[521px] text-45xl inline-block font-adineue-pro text-coral text-center w-[388px]">
        How it works
      </b>
      <div className="absolute top-[2208px] left-[328px] text-5xl text-center inline-block w-[842px]">
        <p className="m-0">
          The next generation of professional gallery delivery!
        </p>
        <p className="m-0">
          Give clients the best experience with an interactive search bar
          allowing them to quickly and easily find their favorite moments with
          their favorite people.
        </p>
      </div>
      <div className="absolute top-[3366px] left-[319px] text-5xl text-center inline-block w-[842px]">
        Your event photos will be shared on WhatsApp with a personalized link
      </div>
      <div className="absolute top-[3366px] left-[319px] text-5xl text-center inline-block w-[842px]">
        Your event photos will be shared on WhatsApp with a personalized link
      </div>
      <div className="absolute top-[3911px] left-[192px] text-17xl font-semibold text-center inline-block w-[105px]">
        Step 1
      </div>
      <div className="absolute top-[3975px] left-[125px] text-13xl text-center inline-block w-[272px]">
        Scan QR code on event Invitation
      </div>
      <div className="absolute top-[3975px] left-[605px] text-13xl text-center inline-block w-[293px]">
        Upload your selfie
      </div>
      <div className="absolute top-[3966px] left-[1094px] text-13xl text-center inline-block w-[329px]">
        We’ll share all your photos on whatsapp
      </div>
      <div className="absolute top-[3911px] left-[699px] text-17xl font-semibold text-center inline-block w-[105px]">
        Step 2
      </div>
      <div className="absolute top-[3911px] left-[1206px] text-17xl font-semibold text-center inline-block w-[105px]">
        Step 3
      </div>
      <img
        className="absolute top-[2360px] left-[168px] w-[1171px] h-[747px] object-cover"
        alt=""
        src="/dashboard--explore-1@2x.png"
      />
      <div className="absolute top-[2445px] left-[407px] w-[704px] h-[50px]">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white w-[704px] h-[50px]" />
      </div>
      <div className="absolute top-[2283px] left-[925px] w-[100px] h-[100px] overflow-hidden" />
      <div className="absolute top-[2445px] left-[1125px] w-[171.7px] h-[50px]">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-crimson w-[171.7px] h-[50px]" />
      </div>
      <div className="absolute top-[2459px] left-[1179.7px] font-medium font-poppins text-white inline-block w-[57px]">
        Search
      </div>
      <div
        className="absolute top-[4121px] left-[602px] w-[300px] h-[50px] cursor-pointer text-white font-poppins"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] w-[300px] h-[50px]">
          <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-crimson w-[300px] h-[50px]" />
        </div>
        <div className="absolute top-[14px] left-[81px] font-semibold inline-block w-[145px] h-[21px]">
          Request for demo
        </div>
      </div>
      <div
        className="absolute top-[10125px] left-[169px] w-[188px] h-[50px] cursor-pointer text-white font-poppins"
        onClick={onGroupContainer1Click}
      >
        <div className="absolute top-[0px] left-[0px] w-[188px] h-[50px]">
          <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-crimson w-[188px] h-[50px]" />
        </div>
        <div className="absolute top-[12px] left-[23px] font-semibold inline-block w-[146px] h-[21px]">
          Request for demo
        </div>
      </div>
      <img
        className="absolute top-[2524px] left-[413px] rounded-[50%] w-[85px] h-[89px] object-cover"
        alt=""
        src="/ellipse-481@2x.png"
      />
      <img
        className="absolute top-[2524px] left-[516px] rounded-[50%] w-[84px] h-[89px] object-cover"
        alt=""
        src="/ellipse-482@2x.png"
      />
      <img
        className="absolute top-[2524px] left-[617px] rounded-[50%] w-[87px] h-[89px] object-cover"
        alt=""
        src="/ellipse-483@2x.png"
      />
      <img
        className="absolute top-[2524px] left-[721px] rounded-[50%] w-[84px] h-[89px] object-cover"
        alt=""
        src="/ellipse-484@2x.png"
      />
      <img
        className="absolute top-[2524px] left-[825px] rounded-[50%] w-[83px] h-[89px] object-cover"
        alt=""
        src="/ellipse-485@2x.png"
      />
      <img
        className="absolute top-[2524px] left-[928px] rounded-[50%] w-[84px] h-[89px] object-cover"
        alt=""
        src="/ellipse-486@2x.png"
      />
      <img
        className="absolute top-[2524px] left-[1029px] rounded-[50%] w-[87px] h-[89px] object-cover"
        alt=""
        src="/ellipse-487@2x.png"
      />
      <img
        className="absolute top-[2524px] left-[1133px] rounded-[50%] w-[84px] h-[89px] object-cover"
        alt=""
        src="/ellipse-488@2x.png"
      />
      <img
        className="absolute top-[2524px] left-[1234px] rounded-[50%] w-[85px] h-[89px] object-cover"
        alt=""
        src="/ellipse-489@2x.png"
      />
      <div className="absolute top-[2457px] left-[467px] font-poppins text-darkgray inline-block w-[91px]">{`Type name `}</div>
      <img
        className="absolute top-[2458px] left-[432px] w-6 h-6 overflow-hidden"
        alt=""
        src="/magnify.svg"
      />
      <div className="absolute top-[3492px] left-[49px] rounded-[50%] bg-lavenderblush w-[400px] h-[400px]" />
      <div className="absolute top-[3492px] left-[552px] rounded-[50%] bg-lavenderblush w-[400px] h-[400px]" />
      <div className="absolute top-[3492px] left-[1038px] rounded-[50%] bg-lavenderblush w-[400px] h-[400px]" />
      <div className="absolute top-[10318px] left-[0px] w-[1512px] h-[679px] text-white">
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
      <div className="absolute top-[10024px] left-[169px] text-5xl inline-block w-[460px]">
        <p className="m-0">Our team is all set to show you how to take</p>
        <p className="m-0">your events to new heights.</p>
      </div>
      <img
        className="absolute top-[3512px] left-[78px] w-[365px] h-[365px] overflow-hidden"
        alt=""
        src="/qr-codeamico-1.svg"
      />
      <img
        className="absolute top-[3520px] left-[577px] w-[365px] h-[365px] overflow-hidden object-cover"
        alt=""
        src="/photobro-1-1@2x.png"
      />
      <img
        className="absolute top-[3518px] left-[1058px] w-[365px] h-[365px] overflow-hidden"
        alt=""
        src="/photosamico-1.svg"
      />
      <img
        className="absolute top-[calc(50%_+_974.5px)] left-[calc(50%_-_43px)] w-[87px] h-[90px] object-cover"
        alt=""
        src="/cone@2x.png"
      />
      <img
        className="absolute h-[0.88%] w-[5.69%] top-[58.86%] right-[22.49%] bottom-[40.26%] left-[71.83%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/cone@2x.png"
      />
      <img
        className="absolute top-[4749px] left-[-9px] w-[575px] h-[360px] object-cover"
        alt=""
        src="/image-302removebgpreview-1@2x.png"
      />
      <img
        className="absolute top-[4633px] left-[826px] w-[154px] h-[116px] object-cover"
        alt=""
        src="/flatcalendaricon800x566removebgpreview-1@2x.png"
      />
      <img
        className="absolute top-[4656px] left-[1319px] w-[98px] h-[98px] object-cover"
        alt=""
        src="/568438-1@2x.png"
      />
      <div className="absolute top-[5166px] left-[860px] w-[85px] h-[85px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-crimson w-[85px] h-[85px]" />
        <img
          className="absolute top-[16.1px] left-[9.4px] w-[65.2px] h-[52.9px] object-cover"
          alt=""
          src="/image-302removebgpreview-1-1@2x.png"
        />
      </div>
      <div className="absolute top-[5162px] left-[1325px] rounded-[50%] bg-tomato w-[85px] h-[85px]" />
      <div className="absolute top-[5423px] left-[853px] rounded-[50%] bg-turquoise w-[85px] h-[85px]" />
      <div className="absolute top-[4903px] left-[860px] rounded-[50%] bg-greenyellow w-[85px] h-[85px]" />
      <div className="absolute top-[4903px] left-[1325px] rounded-[50%] bg-mediumslateblue w-[85px] h-[85px]" />
      <div className="absolute top-[5417px] left-[1320px] rounded-[50%] bg-darkslateblue w-[85px] h-[85px]" />
      <img
        className="absolute top-[5437px] left-[1319px] w-[86px] h-[52px] object-cover"
        alt=""
        src="/top7leadgenerationtoolstogrowyourbusinessin2024removebgpreview-1@2x.png"
      />
      <img
        className="absolute top-[5437px] left-[864px] w-[63px] h-[57px] object-cover"
        alt=""
        src="/image-305@2x.png"
      />
      <img
        className="absolute top-[4971px] left-[2112px] w-[900px] h-[701px] object-cover"
        alt=""
        src="/image-306@2x.png"
      />
      <img
        className="absolute top-[4909px] left-[1330px] w-[76px] h-[69px] object-cover"
        alt=""
        src="/imagesremovebgpreview-1@2x.png"
      />
      <img
        className="absolute top-[4919px] left-[874px] w-[58px] h-[53px] object-cover"
        alt=""
        src="/image-307removebgpreview-1@2x.png"
      />
      <img
        className="absolute top-[5864px] left-[70px] w-[215px] h-[99px] object-cover"
        alt=""
        src="/weddingplannersvishwakarmaeventstudioweddingdecor2-15-385198163358453779487removebgpreview-1@2x.png"
      />
      <img
        className="absolute top-[5864px] left-[343px] w-[215px] h-[99px] object-cover"
        alt=""
        src="/weddingplannersvishwakarmaeventstudioweddingdecor2-15-385198163358453779487removebgpreview-1@2x.png"
      />
      <img
        className="absolute top-[5864px] left-[616px] w-[215px] h-[99px] object-cover"
        alt=""
        src="/weddingplannersvishwakarmaeventstudioweddingdecor2-15-385198163358453779487removebgpreview-1@2x.png"
      />
      <img
        className="absolute top-[5864px] left-[889px] w-[215px] h-[99px] object-cover"
        alt=""
        src="/weddingplannersvishwakarmaeventstudioweddingdecor2-15-385198163358453779487removebgpreview-1@2x.png"
      />
      <img
        className="absolute top-[5864px] left-[1162px] w-[215px] h-[99px] object-cover"
        alt=""
        src="/weddingplannersvishwakarmaeventstudioweddingdecor2-15-385198163358453779487removebgpreview-1@2x.png"
      />
      <img
        className="absolute top-[5864px] left-[1435px] w-[215px] h-[99px] object-cover"
        alt=""
        src="/weddingplannersvishwakarmaeventstudioweddingdecor2-15-385198163358453779487removebgpreview-1@2x.png"
      />
      <div className="absolute top-[1176px] left-[58px] w-[1391px] h-[685px] text-center text-13xl">
        <div className="absolute top-[0px] left-[0px] rounded-6xl bg-mistyrose w-[1391px] h-[685px]" />
        <div className="absolute top-[86px] left-[202px] w-[387px] h-[351px]">
          <div className="absolute top-[0px] left-[19px] rounded-9xl bg-white w-[368px] h-[351px]" />
          <img
            className="absolute top-[79px] left-[332px] rounded-[50%] w-[65px] h-[65px] object-cover"
            alt=""
            src="/ellipse-682@2x.png"
          />
          <img
            className="absolute top-[79px] left-[260px] rounded-[50%] w-[65px] h-[65px] object-cover"
            alt=""
            src="/ellipse-681@2x.png"
          />
          <img
            className="absolute top-[79px] left-[116px] rounded-[50%] w-[65px] h-[65px] object-cover"
            alt=""
            src="/ellipse-679@2x.png"
          />
          <img
            className="absolute top-[79px] left-[44px] rounded-[50%] w-[65px] h-[65px] object-cover"
            alt=""
            src="/ellipse-678@2x.png"
          />
          <img
            className="absolute top-[79px] left-[188px] rounded-[50%] w-[65px] h-[65px] object-cover"
            alt=""
            src="/ellipse-680@2x.png"
          />
          <div className="absolute top-[34px] left-[44px] leading-[109.97%] font-medium inline-block w-[246px]">
            Attendee Photos
          </div>
          <div className="absolute top-[164px] left-[44px] rounded-mini bg-lavenderblush w-[100px] h-[81px]" />
          <div className="absolute top-[165px] left-[152px] rounded-mini bg-lavenderblush w-[100px] h-[81px]" />
          <div className="absolute top-[166px] left-[260px] rounded-mini bg-lavenderblush w-[100px] h-[81px]" />
          <div className="absolute top-[253px] left-[44px] rounded-mini bg-lavenderblush w-[100px] h-[81px]" />
          <div className="absolute top-[254px] left-[152px] rounded-mini bg-lavenderblush w-[100px] h-[81px]" />
          <div className="absolute top-[255px] left-[260px] rounded-mini bg-lavenderblush w-[100px] h-[81px]" />
        </div>
        <div className="absolute top-[459px] left-[110px] rounded-9xl bg-white w-[120px] h-[108px]" />
        <div className="absolute top-[317px] left-[113px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-indianred w-[260px] h-[65px]" />
        <div className="absolute top-[339px] left-[170px] text-xl leading-[109.97%] text-white inline-block w-[181px] h-[19px]">
          Ai face Recoginition
        </div>
        <img
          className="absolute top-[72px] left-[1111px] w-[134.3px] h-[135.7px] object-contain"
          alt=""
          src="/group-9263@2x.png"
        />
        <img
          className="absolute top-[149px] left-[1070px] w-[134.3px] h-[135.7px] object-contain"
          alt=""
          src="/group-9343@2x.png"
        />
        <img
          className="absolute top-[80.1px] left-[1152.1px] w-[176.6px] h-[177.3px] object-contain"
          alt=""
          src="/group-9264@2x.png"
        />
        <img
          className="absolute top-[333px] left-[129px] w-[34px] h-[34px] overflow-hidden"
          alt=""
          src="/artboard.svg"
        />
        <div className="absolute top-[477px] left-[128px] leading-[109.97%] font-medium inline-block w-[86px]">
          130k+
        </div>
        <div className="absolute top-[512px] left-[138px] text-base text-left">
          Photos
        </div>
        <img
          className="absolute top-[140px] left-[562px] w-[697px] h-[545px] object-cover"
          alt=""
          src="/screenshot-20240530-185357removebgpreview-1-1@2x.png"
        />
      </div>
      <img
        className="absolute h-[0.34%] w-[2.31%] top-[47.16%] right-[8.4%] bottom-[52.51%] left-[89.29%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector1.svg"
      />
    </div>
  );
};

export default ClickAi;
