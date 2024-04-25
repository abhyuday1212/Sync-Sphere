import React from "react";
import { useState, useRef, useEffect } from "react";

import { useParams } from "react-router-dom";

import { API } from "../../service/Api";
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
import { AddCircle as Add } from "@mui/icons-material";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CategoriesLoader from "../loader/CategoriesLoader";

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

function Individual() {
  const [checkout, setCheckout] = useState(false);

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
              let response = await API.individualDonate(payment);
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

  // Aditya this is the id where you can relate the payment with the project
  const { id } = useParams();

  console.log(id);

  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getPostById(id);
      if (response.isSuccess) {
        setPost(response.data);
      }
    };
    fetchData();
  }, []);

  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");
  const [budget, setBudget] = useState("");

  const [payment, setPayment] = useState(initialPayment);

  const [errorMessage, setErrorMessage] = useState("");

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

  const viewpdf = () => {
    // call the pdf api here and then navigate it to a new pdf page
  };

  // create a function to handle the payment interface

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
          }}
        >
          <Card
            style={{
              fontSize: "39px",
              color: "#000300",
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
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "5px 0px",
                  padding: "5px 0px",
                }}
              >
                <div className="flex flex-row items-center">
                  <LocalPhoneOutlinedIcon />
                  <TextInformationarea
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

                <div className="flex flex-row items-center">
                  <EmailOutlinedIcon />
                  <TextInformationarea
                    placeholder="Enter Email (***@gmail.com)"
                    name="email"
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                {/* add button type= submit later for backend integration of Aditya or call a functiion using onclick*/}
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

export default Individual;
