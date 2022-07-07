import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import {
  SearchP,
  SearchH2,
  SearchIcon,
  SearchCard,
  SearchContainer,
  SearchWrapper,
  MainContainer,
  ImgContainer,
} from "./SearchServicesElements";
// import { Data } from "./Data";
import doc from "../../images/carwash.jpg";
import header_img from "../../images/carwash.jpg";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { RiCustomerServiceFill } from "react-icons/ri";

import SlotBooking from "../../SlotBooking";

const SearchServices = () => {
  const history = useHistory();
  // const [doctorData, setDoctorsData] = useState([]);
  const doctors = [
    {
      _id: "625f1502e1249da4b2ff76ce",
      name: "WECare Car wash",
      email: "Doctor1@gmail.com",
      password: "user7",
      phone: 4584884865,
      specialization: "Paediatrician",
      hospital: "Benerjee Hospital",
      experience: 8,
      keywords: ["asdf"],
      consultationFee: 399,
      __v: 0,
    },
    {
      _id: "625f15a8e1249da4b2ff76d1",
      name: "Vivek car wash",
      email: "Doctor2@gmail.com",
      password: "Doctor2",
      phone: 4584884865,
      specialization: "Paediatrician",
      hospital: "Benerjee Hospital",
      experience: 8,
      keywords: ["fever,cold"],
      consultationFee: 799,
      __v: 0,
    },
    {
      _id: "62667055d6eff46ec29238d8",
      name: "DR. Rohith Kumar",
      email: "Doctor8@gmail.com",
      password: "Doctor8",
      phone: 4584884865,
      specialization: "ENT Specialist",
      hospital: "Amitha Hospital",
      experience: 4,
      keywords: ["fever,cold"],
      consultationFee: 599,
      __v: 0,
    },
    {
      _id: "62667082d6eff46ec29238db",
      name: "DR. Prem Kiran",
      email: "Doctor9@gmail.com",
      password: "Doctor9",
      phone: 4584884865,
      experience: 4,
      consultationFee: 3400,
      __v: 0,
    },
  ];

  // useEffect(() => {
  //   fetch("http://localhost:8080/doc/GetDoctors", {
  //     method: "get",
  //     headers: {
  //       // "Content-Type": "application/json",
  //       Authorization: "Bearer " + localStorage.getItem("jwt"),
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setDoctorsData(result.doctors);
  //     });
  // });

  return (
    <MainContainer>
      <SearchContainer>
        <h2 className="p-3">Car Cares Near You</h2>
        <SearchWrapper>
          {doctors.map((item) => {
            return (
              <SearchCard key={item._id}>
                <div className="Container">
                  <div className="row">
                    <div className="col-md-4">
                      <SearchIcon src={doc} />
                      <SearchH2>
                        <br />
                        <RiCustomerServiceFill size={25} />
                        Telugu, Hindhi and English
                      </SearchH2>
                    </div>
                    <div className="col-md-6">
                      <SearchP>{item.name}</SearchP>
                      <strong>Address: </strong>
                      <SearchP>Old Mahabalipuram Road, Chennai</SearchP>
                      <SearchP>
                        <strong>₹{item.consultationFee}</strong> Additional
                        charges may be applicable
                      </SearchP>
                      <Button
                        onClick={() => {
                          <SlotBooking data={item} />;
                          history.push(`/confirm_Booking/`);
                        }}
                      >
                        Book Slot
                      </Button>
                    </div>
                  </div>
                </div>
              </SearchCard>
            );
          })}
        </SearchWrapper>
      </SearchContainer>
    </MainContainer>
  );
};

export default SearchServices;
