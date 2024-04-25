import React from "react";

import { useState, useRef, useEffect } from "react";

import { useParams } from "react-router-dom";

import { API } from "../../service/Api";

import { useContext } from "react";

import {
  Box,
  styled,
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
  Card,
} from "@mui/material";
// icons
import { AddCircle as Add, Login } from "@mui/icons-material";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CategoriesLoader from "../loader/CategoriesLoader";
import { DataContext } from "../../context/DataProvider";
// const magicx = keyframes`
//   0% {
//     background-position: 0 50%;
//   }
//   50% {
//     background-position: 100% 50%;
//   }
//   100% {
//     background-position: 0 50%;
//   }
// `;

const Container = styled(Box)`
  margin: 0px 0px;
  padding: 0px 2px;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #ffffff;
`;

const InsideContainer = styled(Box)`
  width: 70%;
  margin: 50px 5px;
  padding: 5px 5px;
  border: 2px solid #3d3d3dde;
  border-radius: 14px;
  background: #ffffff;
  position: relative;
  overflow: hidden;
  // z-index:100;
`;

const StyledFormControl = styled(FormControl)`
  margin-top: 10px;
  display: flex;
  border: 2px solid #d5edff;
  border-radius: 10px;
  border-shadow: 0 5px 25px rgba(14, 21, 37, 0.8);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #e0eff9;
`;

const InputTextField = styled(InputBase)`
  flex: 1;
  margin: 0 10px;
  padding: 5px 2px;
  padding-left: 8px;
  font-size: 20px;
  font-weight: 370;
  width: 1rem;
  background;#e0eff9;
`;

const Textarea = styled(TextareaAutosize)`
  width: 100%;
  border: 2px solid #d5edff;
  border-radius: 10px;
  margin: 7px 0px;
  padding: 10px 2px;
  padding-left: 8px;
  font-size: 17px;
  font-weight: 350;
  background: #e0eff9;
  resize: none;
  &:focus-visible {
    outline: 2px solid grey;
  }
  ::placeholder {
    opacity: 0.6;
  }
`;
const Textarea2 = styled(TextareaAutosize)`
  width: 100%;
  border: 2px solid #d5edff;
  border-radius: 10px;
  margin: 7px 0px;
  margin-left: 7px;
  padding: 10px 2px;
  padding-left: 8px;
  font-size: 17px;
  font-weight: 350;
  background: #e0eff9;
  resize: none;
  &:focus-visible {
    outline: 2px solid grey;
  }
  ::placeholder {
    opacity: 0.6;
  }
`;

const TextDescriptionarea = styled(TextareaAutosize)`
  width: 100%;
  border: 2px solid #d5edff;
  border-radius: 10px;
  margin: 7px 0px;
  padding: 10px 2px;
  padding-left: 8px;
  font-size: 17px;
  font-weight: 350;
  resize: none;
  background: #e0eff9;
  &:focus-visible {
    outline: 2px solid grey;
  }
  ::placeholder {
    opacity: 0.6;
  }
`;

const TextInformationarea = styled(TextareaAutosize)`
  width: 28vw;
  padding: 8px 5px;
  border: 2px solid #d5edff;
  border-radius: 10px;
  margin: 2px 2px;
  margin-left: 7px;
  font-size: 17px;
  font-weight: 350;
  background: #e0eff9;
  resize: none;
  &:focus-visible {
    outline: 2px solid grey;
  }
  ::placeholder {
    opacity: 0.6;
  }
`;

const initialPayment = {
  title: "",
  number: "",
  budget: "",
  projectID: "",
  paymentID: "",
  payerID: "",
  createdDate: new Date(),
};

const initialPdfVisitorDetail = {
  visitormail: "",
  username: "",
  projectID: "",
};

function Company() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");
  const [budget, setBudget] = useState("");

  const [payment, setPayment] = useState(initialPayment);

  const [errorMessage, setErrorMessage] = useState("");
  const [checkout, setCheckout] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [visitorDetails, setVisitorDetails] = useState(initialPdfVisitorDetail);

  const { account } = useContext(DataContext);

  useEffect(() => {
    visitorDetails.username = account.username;
  }, []);

  const handlePdfEmailChange = (e) => {
    setVisitorDetails({
      ...visitorDetails,
      [e.target.name]: e.target.value,
      projectID: id,
    });
  };

  async function viewpdf() {
    try {
      const response = await API.getPdfDetailById(id);
      if (response.isSuccess === true) {
        setPdfUrl(response.data);
        setModalOpen(true);
      } else {
        console.error("Failed to fetch PDF details");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  }

  const handleEmailApi = async () => {
    try {
      let response = await API.handleViewerDetails(visitorDetails);
      if (response.isSuccess === true) {
        await viewpdf();
        console.log("Email Data Saved");
      } else {
        setErrorMessage("Error saving Email to db...Try Again");
      }
    } catch (error) {
      setErrorMessage("An unexpected error in saving data.");
    }
  };

  const clospdf = () => {
    setModalOpen(false);
  };

  const handleCheckout = () => {
    setCheckout(true);
  };

  const handleCancelCheckout = () => {
    setCheckout(false);
  };

  const paypal = useRef();

  useEffect(() => {
    if (checkout) {
      window.paypal
        .Buttons({
          createOrder: (data, actions, err) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: "Donation",
                  amount: {
                    currency_code: "USD",
                    value: budget,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log(order);

            payment.payerID = order.payer.payer_id;
            payment.paymentID = order.purchase_units[0].payments.captures[0].id;
            console.log(payment);
            try {
              let response = await API.sponsorDonate(payment);
              if (response.isSuccess) {
                console.log("donation successful");
              } else {
                setErrorMessage("Error saving donation in DB!!!");
              }
            } catch (error) {
              setErrorMessage("An unexpected error in saving data.");
            }
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(paypal.current); // Render the PayPal buttons inside the div referenced by 'paypal'
    }
  }, [checkout]);

  // -*-*-*-*-**-***-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**

  const handleTitleChange = (e) => {
    const inputValue = e.target.value;

    const RestrictedInput = inputValue.slice(0, 21);

    setTitle(RestrictedInput);
  };

  const handleNumberChange = (e) => {
    const inputValue = e.target.value;

    const numericInput = inputValue.replace(/[^0-9]/g, "");

    const restrictedInput = numericInput.slice(0, 10);

    setNumber(restrictedInput);
  };

  const handleBudgetChange = (e) => {
    const inputValue = e.target.value;

    const numericInput = inputValue.replace(/[^0-9]/g, "");

    const restrictedInput = numericInput.slice(0, 9);

    setBudget(restrictedInput);
  };

  const handleChange = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value, projectID: id });
  };

  const [loader, setLoaderVisible] = useState(false);

  useEffect(() => {
    setLoaderVisible(true);
    setTimeout(() => {
      setLoaderVisible(false);
    }, 500);
  }, []);
  // -=-==-=-=-=-=-=-=-=-=-=-=-=-=-=--=-===-=

  return (
    <div>
      {loader ? (
        <CategoriesLoader />
      ) : (
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            // background:"#86868666"
          }}
        >
          <div style={{ display: "flex", gap: 56, margin: "20px 0px" }}>
            <div>
              <Card
                style={{
                  fontSize: "39px",
                  color: "#000300",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                View CSR Documents
              </Card>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 15,
                  marginBottom: 9,
                  border: "2px solid black",
                  padding: 4,
                  borderRadius: 9,
                }}
              >
                <div
                  className="flex flex-row items-center"
                  // style={{ marginBottom: "20px" }}
                >
                  <EmailOutlinedIcon />
                  <TextInformationarea
                    placeholder="Enter Email (***@gmail.com)"
                    name="visitormail"
                    type="email"
                    required
                    onChange={(e) => handlePdfEmailChange(e)}
                  />
                </div>
                <div>
                  <Button variant="contained" onClick={() => handleEmailApi()}>
                    View
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <Card
                style={{
                  fontSize: "39px",
                  color: "#000300",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Request Donation Access
              </Card>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 15,
                  marginBottom: 9,
                  border: "2px solid black",
                  padding: 4,
                  borderRadius: 9,
                  marginBottom: 40,
                }}
              >
                <div
                  className="flex flex-row items-center"
                  // style={{ marginBottom: "20px" }}
                >
                  <EmailOutlinedIcon />
                  <TextInformationarea
                    placeholder="Enter Company Registration ID"
                    name="email"
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div>
                  <Button variant="contained">Submit</Button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal */}
          {modalOpen && (
            <div>
              <div>
                {/* Close button */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    border: "2px solid black",
                  }}
                >
                  <button>⬇️</button>
                  <button onClick={() => clospdf()}>❌</button>
                </div>
                {/* PDF viewer */}
                <embed
                  src={pdfUrl}
                  type="application/pdf"
                  border="2px solid red"
                  width="750vw"
                  height="600vh"
                />
              </div>
            </div>
          )}

          <Card
            style={{
              fontSize: "39px",
              color: "#000300",
              marginTop: "60px",
            }}
          >
            Donate For The Cause
          </Card>
          <InsideContainer>
            <form>
              <StyledFormControl>
                <InputTextField
                  placeholder="Enter Your Name "
                  value={title}
                  required
                  name="title"
                  onChange={(e) => {
                    handleTitleChange(e);
                    handleChange(e);
                  }}
                />
              </StyledFormControl>

              {/* *-*--*-*-*-*-*-*-*-Donation*-*-*-**-**-*-*-*/}

              <div
                style={{ marginTop: 2 }}
                className="flex flex-row items-center"
              >
                <CurrencyRupeeOutlinedIcon fontSize="large" />
                <TextDescriptionarea
                  placeholder="Enter Donation Amount"
                  name="budget"
                  value={budget}
                  required
                  onChange={(e) => {
                    handleBudgetChange(e);
                    handleChange(e);
                  }}
                />
              </div>
              {/* *-*--*-*-*-*-*-*-*- mobile & email*-*-*-**-**-*-*-*/}

              <div
                style={{ marginTop: 2 }}
                className="flex flex-row items-center"
              >
                <LocalPhoneOutlinedIcon fontSize="large" />
                <TextDescriptionarea
                  placeholder="Enter Mobile number (+91 **********)"
                  name="number"
                  // style={{ width: "100%" }}
                  value={number}
                  required
                  onChange={(e) => {
                    handleNumberChange(e);
                    handleChange(e);
                  }}
                />
              </div>
              {/* *-*--*-*-*-*-* addresss -*-*-**-*-*-*-*-**-**-*-*-*/}
              {/* <div className="flex flex-row items-center">
                        <HomeOutlinedIcon />
                        <Textarea2
                            placeholder="Project Venue address..."
                            name="address"
                            required
                            onChange={(e) => handleChange(e)}
                        />

                    </div> */}
              {/* *-*--*-*-*- Google Url-*-**-*-*-*-*-**-**-*-*-*/}
              {/* <div className="flex flex-row items-center">
                        <LanguageOutlinedIcon />
                        <Textarea2
                            placeholder="Paste Google Maps Location URL..."
                            name="addressurl"
                            onChange={(e) => handleChange(e)}
                        />
                    </div> */}
              {/* *-*--*-*-*-*-*-*-*-*-**-*-*-*-*-**-*-*-*-*-**-**-*-*-*/}

              {/* <div className="flex flex-row items-center">
                        <DescriptionOutlinedIcon />
                        <Textarea2
                            placeholder="Write description..."
                            name="description"
                            required
                            onChange={(e) => handleChange(e)}
                        />

                    </div> */}
              {/* *-*--*-*-*-*-*-*-*-*-**-*-*-*-*-**-*-*-*-*-**-**-*-*-*/}
              <div style={{ display: "flex", justifyContent: "center" }}>
                {/* add button type= submit later for backend integration of Aditya */}

                {checkout ? (
                  <div>
                    <div ref={paypal}></div>
                    <Button variant="contained" onClick={handleCancelCheckout}>
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Button variant="contained" onClick={handleCheckout}>
                    Checkout
                  </Button>
                )}
              </div>
            </form>
          </InsideContainer>
        </Container>
      )}
    </div>
  );
}

export default Company;
