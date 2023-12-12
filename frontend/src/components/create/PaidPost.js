import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { API } from "../../service/Api"
import { DataContext } from '../../context/DataProvider';
// material-ui
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
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
// -----------------------------------------
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
  background:#e0eff9;
`;

const InputTextField = styled(InputBase)`
  flex: 1;
  margin: 0 10px;
  padding: 5px 2px;
  padding-left: 8px;
  font-size: 20px;
  font-weight: 370;
  width: 1rem;
  background:#e0eff9;
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
  resize:none;
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
  margin-left:7px;
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
  margin:2px 2px;
  margin-left:7px;
  font-size: 17px;
  font-weight: 350;
  background: #e0eff9;
  resize:none;
  &:focus-visible {
    outline: 2px solid grey;
  }
  ::placeholder {
    opacity: 0.6;
  }
`;
const Image = styled(Box)`
    width: 100%;
    background: url(https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) center/contain no-repeat #000300;
    height: 50vh;
    display: flex;
    border-radius: 14px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;



const initialPost = {
    title: '',
    summary: '',
    budget: '',
    number: '',
    email: '',
    address: '',
    addressurl: '',
    username: '',
    categories: '',
    createdDate: new Date(),
};

function PaidPost() {
    const [summary, setSummary] = useState("");
    const [title, setTitle] = useState("");
    const [number, setNumber] = useState("");
    const [budget, setBudget] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    const [post, setPost] = useState(initialPost);
    // const [file, setFile] = useState('');
    const { account } = useContext(DataContext);

    const url = post.picture ? post.picture : `https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`;


    // -*-*-*-*-**-***-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**

    const handleSummaryChange = (e) => {
        const inputValue = e.target.value;

        const RestrictedInput = inputValue.slice(0, 110);

        setSummary(RestrictedInput);
    };

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


    // -==-=-=-==-=-=Image display portion to be done at last

    useEffect(() => {
        // const getImage = async () => {
        //     if (file) {
        //         const data = new FormData();
        //         data.append("file", file);
        //         console.log("FormData entries:");
        //         for (let pair of data.entries()) {
        //             console.log(pair[0], pair[1]);
        //         }

        //         const response = await API.uploadFile(data);
        //         post.picture = response.data;
        //     }
        // }
        // getImage();
        post.categories = location.search?.split('=')[1] || 'All';
        post.username = account.username;
    }, [])

    const handleFileChange = (e) => {
        // const selectedFile = e.target.files[0];

        // if (selectedFile && selectedFile instanceof File) {
        //     setFile(selectedFile);
        // }
    };
    // -===-=-==-=-=-==-=--==
    const savePost = async () => {
        let response = await API.createPost(post);

        if (response.isSuccess) {
            navigate('/projects');
        }
    }
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    // -=-==-=-=-=-=-=-=-=-=-=-=-=-=-=--=-===-=

    return (
        <div>
            <Container>
                <InsideContainer>
                    <form>
                        <StyledFormControl>
                            <InputTextField
                                placeholder="Enter Project Title.."
                                value={title}
                                required
                                name="title"
                                onChange={(e) => {
                                    handleTitleChange(e);
                                    handleChange(e);
                                }}
                            />
                        </StyledFormControl>

                        {/* *-*--*-*-*-*-*-*-*-*-**-*-*-*-*-**-*-*-*-*-**-**-*-*-*/}

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                margin: "7px 0px",
                            }}
                        >
                            <label
                                htmlFor="fileInput"
                                style={{ display: "flex", alignItems: "center" }}
                                name="image"
                            >
                                <Add fontSize="large" />
                                Choose Image
                            </label>
                            <input
                                type="file"
                                id="fileInput"
                                key="fileInput"
                                style={{ display: "none" }}
                                onChange={handleFileChange}
                            />
                            <Textarea
                                placeholder="Write Summary of project...(Max 110 Charater)"
                                name="summary"
                                value={summary}
                                required
                                inputProps={{
                                    maxLength: 110,
                                }}
                                onChange={(e) => {
                                    handleSummaryChange(e);
                                    handleChange(e);
                                }}
                            />
                        </div>
                        {/* *-*--*-*-*-*-*-*-*- budget*-*-*-**-**-*-*-*/}

                        <div className="flex flex-row items-center">
                            <CurrencyRupeeOutlinedIcon fontSize="large" />
                            <TextDescriptionarea
                                placeholder="Project budget in Rupees (<= 99 Cr)..."
                                required
                                name="budget"
                                key="budget"
                                value={budget}
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
                        </div>
                        {/* *-*--*-*-*-*-* addresss -*-*-**-*-*-*-*-**-**-*-*-*/}
                        <div className="flex flex-row items-center">
                            <HomeOutlinedIcon />
                            <Textarea2
                                placeholder="Project Venue address..."
                                name="address"
                                required
                                onChange={(e) => handleChange(e)}
                            />

                        </div>
                        {/* *-*--*-*-*- Google Url-*-**-*-*-*-*-**-**-*-*-*/}
                        <div className="flex flex-row items-center">
                            <LanguageOutlinedIcon />
                            <Textarea2
                                placeholder="Paste Google Maps Location URL..."
                                name="addressurl"
                                required
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        {/* *-*--*-*-*-*-*-*-*-*-**-*-*-*-*-**-*-*-*-*-**-**-*-*-*/}

                        <div className="flex flex-row items-center">
                            <DescriptionOutlinedIcon />
                            <Textarea2
                                placeholder="Write description..."
                                name="description"
                                required
                                onChange={(e) => handleChange(e)}
                            />

                        </div>
                        {/* *-*--*-*-*-*-*-*-*-*--*img*-*-*-*-*-**-**-*-*-*/}
                        <Image src={url} alt="Uploaded img..." />


                        {/* *-*--*-*-*-*-*-*-*-*-**-*-*-*-*-**-*-*-*-*-**-**-*-*-*/}
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "12px" }}>
                            <Button  variant="contained" onClick={() => savePost()}>Publish</Button>
                        </div>
                    </form>
                </InsideContainer>
            </Container>
        </div>
    );
}

export default PaidPost;
