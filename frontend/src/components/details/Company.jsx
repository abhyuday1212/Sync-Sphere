import React from "react";
import { useState, useEffect } from "react";
import { API } from "../../service/Api";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

import {
  Box,
  styled,
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
} from "@mui/material";
// icons
import { AddCircle as Add } from "@mui/icons-material";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

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

const initialAmount = {
  amount: "",
};

function Company() {
  // const [summary, setSummary] = useState("");
  // const [title, setTitle] = useState("");
  // const [number, setNumber] = useState("");
  // const [budget, setBudget] = useState("");
  // const navigate = useNavigate();
  // const location = useLocation();

  const [amount, setAmount] = useState(initialAmount);

  const { account } = useContext(DataContext);

  useEffect(() => {
    amount.username = account.username;
    console.log("this is frontend : ", amount); // Log #3
  }, [amount]);

  //   const savePost = async () => {
  //     let response = await API.createPost();

  //     if (response.isSuccess) {
  //       navigate("/projects");
  //     }
  //   };

  console.log("this is frontend : ", amount);
  const handleChange = (e) => {
    console.log("this is frontend : ", amount);

    setAmount({ ...amount, [e.target.name]: e.target.value });
  };
  console.log("this is frontend : ", amount);

  const amountDonate = async () => {
    try {
      console.log("Making API call with data:", amount);
      let response = await API.sponsorDonatePage(amount);
      if (response.isSuccess) {
        console.log("Chal gya ji");
      } else {
        console.error("API call unsuccessful:", response);
      }
    } catch (error) {
      console.error("Error in API call:", error);
    }
  };

  // -=-==-=-=-=-=-=-=-=-=-=-=-=-=-=--=-===-=

  return (
    <div>
      <Container>
        <InsideContainer>
          {/* <StyledFormControl>
                        <InputTextField
                            placeholder="Enter Your company Name "
                            value={title}
                            required
                            name="title"
                            onChange={(e) => {
                                handleTitleChange(e);
                                handleChange(e);
                            }}
                        />

                        
                    </StyledFormControl> */}

          {/* *-*--*-*-*-*-*-*-*-Donation*-*-*-**-**-*-*-*/}

          <div style={{ marginTop: 2 }} className="flex flex-row items-center">
            <CurrencyRupeeOutlinedIcon fontSize="large" />
            <TextDescriptionarea
              placeholder="Enter Donation Amount"
              name="amount"
              id="amount"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          {/* *-*--*-*-*-*-*-*-*- mobile & email*-*-*-**-**-*-*-*/}
          {/* <div
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
                            < LocalPhoneOutlinedIcon />
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
                    </div> */}
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
            <Button variant="contained" onClick={amountDonate}>
              Donate
            </Button>
          </div>
        </InsideContainer>
      </Container>
    </div>
  );
}

export default Company;
