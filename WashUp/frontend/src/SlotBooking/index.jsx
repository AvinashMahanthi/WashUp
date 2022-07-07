import { RiCustomerServiceFill } from "react-icons/ri";
import {
  SearchP,
  SearchH2,
  SearchIcon,
  SearchCard,
  SearchContainer,
  SearchWrapper,
  MainContainer,
} from "./SlotBookingElements";

const SlotBooking = (item) => {
  return (
    <>
      <MainContainer>
        <SearchContainer>
          <h2 className="p-3">Booked Slot Details</h2>
          <SearchWrapper>
            <SearchCard>
              <div className="Container">
                <div className="row">
                  <div className="col-md-4">
                    <SearchIcon />
                    <SearchH2>
                      <br />
                      Booking Conformed
                    </SearchH2>
                  </div>
                  <div className="col-md-6">
                    <SearchP>Vivek</SearchP>
                    <strong>Address: </strong>
                    <SearchP>Old Mahabalipuram Road, Chennai</SearchP>
                    <SearchP>
                      <strong>₹ Fee</strong> Additional charges may be
                      applicable
                    </SearchP>
                  </div>
                </div>
              </div>
            </SearchCard>
          </SearchWrapper>
        </SearchContainer>
      </MainContainer>
    </>
  );
};

export default SlotBooking;
