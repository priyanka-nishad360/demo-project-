import { useEffect, useState } from "react";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import { HoveringNavCard } from "../styles/navcardStyle";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { HoveringButton } from "../styles/globalStyles";
import { CardContainer } from "../styles/cardStyles";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";

const ItemCard = ({ item, handleRoute }) => {
  return (
    <div>
      {/* <CardContainer className="h-64 p-5 pb-4 flex flex-col mb-2"> */}
      <Image
        width={480}
        height={720}
        src={item?.imgUrl}
        alt={item?.serviceName}
        className="w-full h-24 mx-auto mb-4 bg-cover"
      />
      <h3 className="text-lg font-semibold text-center mb-2 ">
        {item?.serviceName}
      </h3>
      <div className="mt-auto pt-1">
        <div
          onClick={() => handleRoute(item)}
          className="block cursor-pointer text-center text-white text-sm bg-blue-600 py-2 px-2 rounded-md hover:bg-blue-700 hover:text-white"
        >
          View Details
        </div>
      </div>

      {/* </CardContainer> */}
    </div>
  );
};

const TopNavigation = ({
  sections,
  selectedSection,
  handleSectionClick,
  toggleDropdown,
  isDropdownOpen,
}) => {
  return (
    <div className="mt-5 top-20 z-10 max-w-7xl mx-auto">
      {/* Large Screen Navigation */}
      <div className="hidden sticky sm:flex items-center justify-around md:rounded-full shadow-lg rounded-full">
        {sections?.map((section, index) => (
          <HoveringNavCard
            key={index}
            className={`${
              selectedSection === index
                ? "bg-blue-600 text-white"
                : "bg-gray-300"
            } flex text-slate-900 items-center justify-center w-full my-2 mx-2 py-3 font-semibold text-center cursor-pointer  transform hover:scale-90 transition-colors duration-300 ease-in-out hover:bg-blue-500 hover:shadow-md rounded-full`}
            onClick={() => handleSectionClick(index)}
          >
            {section.title}
          </HoveringNavCard>
        ))}
      </div>

      {/* Small Screen Dropdown */}
      <div className="sm:hidden">
        <HoveringButton
          onClick={() => toggleDropdown()}
          className="block mt:0 p-2 text-slate-900 font-semibold cursor-pointer w-full"
        >
          {isDropdownOpen ? (
            <div className="flex justify-between items-center px-5">
              <p>Close Menu</p>
              <p>
                <RiArrowDropUpLine />
              </p>
            </div>
          ) : (
            <div className="flex justify-between items-center px-5 ">
              <p>Open Menu</p>
              <RiArrowDropDownLine />
            </div>
          )}
        </HoveringButton>

        {isDropdownOpen && (
          <div className="mt-2 py-2">
            {sections.map((section, index) => (
              <HoveringNavCard
                key={index}
                className={`block bg-white shadow w-full  mt-5  transform hover:scale-90 transition-colors duration-300 ease-in-out hover:bg-blue-500 hover:shadow-md rounded-full`}
                onClick={() => {
                  handleSectionClick(index);
                  toggleDropdown();
                }}
              >
                {section.title}
              </HoveringNavCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const MainContent = ({ selectedSection, sections, handleRoute }) => {
  return (
    <>
      {sections?.length ? (
        <div className="bg-white p-4 container m-auto min-h-screen">
          <h2 className="text-2xl text-slate-900 font-semibold m-5 text-center">
            {sections[selectedSection].title}
          </h2>
          <div className="sm:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {sections[selectedSection].items.map((item, index) => (
              <ItemCard key={index} item={item} handleRoute={handleRoute} />
            ))}
          </div>
        </div>
      ) : (
        <div className="fixed h-screen w-screen bg-white flex items-center justify-center">
          <Image
            width={480}
            height={720}
            src="/loading.svg"
            alt="loading..."
            style={{ width: "100px" }}
          />
        </div>
      )}
    </>
  );
};

export default function RegisterStartup() {
  const navigate = useRouter();

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(0);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const servicesApi = async () => {
      let response = await axios.get(`${BASE_URL}/startup/getAll`);
      console.log(response);

      let data = response.data.data;

      let reg = data.filter((item) => item.serviceType === "Registration");
      let com = data.filter(
        (item) => item.serviceType === "Company Registration"
      );
      let ret = data.filter((item) => item.serviceType === "Returns");
      let aud = data.filter((item) => item.serviceType === "Audits");

      setSections([
        {
          title: "Registration",
          items: reg,
        },
        {
          title: "Company Registration",
          items: com,
        },
        {
          title: "Returns",
          items: ret,
        },
        {
          title: "Audits",
          items: aud,
        },
      ]);
    };
    return () => servicesApi();
  }, []);

  const handleSectionClick = (index) => {
    setSelectedSection(index);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleRoute = (item) => {
    localStorage.setItem("startupItem", JSON.stringify(item));
    navigate.push(`../register-startup/${item.id}`);
  };

  return (
    <>
      <TopNavigation
        sections={sections}
        selectedSection={selectedSection}
        handleSectionClick={handleSectionClick}
        toggleDropdown={toggleDropdown}
        isDropdownOpen={isDropdownOpen}
      />
      <MainContent
        selectedSection={selectedSection}
        sections={sections}
        handleRoute={handleRoute}
      />
    </>
  );
}
