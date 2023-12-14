# Sync Sphere

This Project is made under PitchTember-Nit,Patna by

# Team | Alpha Coder

- [Abhyuday_Pratap_Singh](https://www.linkedin.com/in/abhyuday12/)
- [Akhilesh](https://www.linkedin.com/in/akhilesh-malik-44989b258/)
- [Aditya_Jaiswal](https://www.linkedin.com/in/aditya-jaiswal-14b453241/)
- [Kumar_Harsh](https://www.linkedin.com/in/kumar-harsh-468a22253)

[Working_Prototype,Project_Explaination, All_resources](https://drive.google.com/drive/folders/1ebpinrDJRa6qmq6rUbSVv83nTx9dIkB6?usp=sharing)

[PPT](https://docs.google.com/presentation/d/1JhpZvwCMAZx6U0Q2KRqERU-o5V2fHWss/edit?usp=drive_link&ouid=102958168798562091089&rtpof=true&sd=true)

# 1. Introduction

Welcome to Sync Sphere – a revolutionary platform connecting individuals eager to volunteer or donate, companies pursuing CSR opportunities, and NGOs facing resource constraints. Our mission is to forge impactful collaborations, uniting these diverse groups to address societal challenges and contribute to SDG Goal 17.

## 1.1 Problem Statement

The problem is how to bring together Individuals who want to volunteer or donate, Companies looking to fund organizations through CSR but are unable to find NGO's, and NGOs or Individuals aware of societal issues but lacking resources. The goal is to create a platform that connects these three groups.

## 1.2 What is SyncSphere?

It serves as a platform for listing / engagement, offering you a space to spotlight or bring attention to societal issues and connect all the 3 essential pillars that is Volunteer, Corporation and NGO’s to solve all the major problems of problem listing , volunteer and sponsor searching , Finding the right NGO's for Sponsor , submiting the same CSR document .

## 1.3 How it solves the problem ?

It provides its users a platform to create a project and shows the listing to the organizations / Corporates and volunteers who are willing to contribute to solve a problems of their choice.

# 2.0 Prequisite

- MoongoDB (atlas) account ,
- PayPal business account and
- PayPal SendBox account
- PayPal SandBox App client_id
- PayPal SandBox App client_secret Code

# 3.0 Installation

Install the project by cloning this repo from your cmd.

```bash
git clone https://github.com/abhyuday1212/PitchTember-NITP.git
```
- Go to the #PitchTember-NITP folder,open terminal in VS-Code and write this command
 ``` bash
  cd backend
```
- Install the dependencies using this command for backend
 ``` bash
  npm i
```
- If any ERR ocured in terminal the use this command and reinstall the dependencies using this line
  ```bash
  npm i --force
```
- Install the dependencies using this command for frontend
  ```bash
  cd frontend
```
- If any ERR ocured in terminal the use this command and reinstall the dependencies using this line
  ```bash
  npm i --force
```
- Now Rename .confi.env to .env

- Add the Prerequisite asked their.Since we are working with payment architecture so we cannot provide the secret_client_id and client_secret.

# 4.0 Run Project

- Run the backend server .

- Goto root folder that is PitchTember-NITP folder and run these commands in your powershell

- Open a new powershell and write this command to move to backend directory.
  ```bash
  cd backend
```
- Run the backend Server.
  ```bash
  npm run dev
  ```
- If terminal returns Port started successfully at ${PORT} & Databse connected successfully than you are good to go.

- Open a new powershell and write this command to move to frontend directory from the root folder.
  ```bash
  cd frontend
```
- Write this command to start the react server at 3000.
  ```bash
  npm start
```
# 5.0 Project Overview

- _Empowering NGOs :_ We presents a groundbreaking solution to NGOs' funding challenges by showcasing their causes to a vast network of over 19,000 CSR-engaged companies. our platform not only facilitates funding connections but also offers a unique feature – the provision of volunteers to NGOs. This comprehensive approach ensures a holistic and impactful collaboration between NGOs ,Volunteers and companies.

- _Simplify CSR :_ Companies struggle to find suitable CSR projects, spending time on searches and document verifications.We offer a curated list of societal issues and handle project verifications, simplifying the CSR process and saving valuable company resources.

- _Easy volunteering :_ We ensure that competent and willing individuals seeking to contribute find the appropriate platform, with opportunities segregated based on their profiles. For those seeking short-term paid contributions, we provide the right opportunities for their meaningful engagement

# 6.0 Features

- _6.1 Donate as Individual :_
  Our app empowers individuals to contribute directly to NGO projects. Streamlining the donation process, users can effortlessly support causes that resonate with them. Experience the simplicity of making a meaningful impact as we connect you directly with projects that align with your philanthropic vision.
- _6.2 Join as Volunteer:_
  Our app goes beyond donations; individuals can explore NGO posts and seamlessly join as volunteers for specific projects. Experience a holistic approach to giving by connecting directly with causes, contributing funds, and actively participating in projects that align with your passion for positive change.

- _6.3 Create Post :_
  Empowering NGOs and individuals alike, our app serves as a unified platform for social impact. Create and share posts for social work projects, attracting volunteers and donations from both individuals and companies. Fostering a collaborative environment, our app connects passionate contributors with meaningful causes, ensuring that social impact flourishes through collective efforts and diverse contributions. Join us in building a community where positive change is driven by shared dedication and impactful collaborations.

- _6.4 Ease for Companies to view NGO's Listing :_
  In our project, we provide a comprehensive listing spanning various categories such as environmental sustainability, hunger alleviation, urban cleanliness, and educational excellence. This curated platform ensures that CSR companies and corporations can effortlessly discover diverse, impactful projects. By centralizing these initiatives, we optimize the search process, saving valuable time for companies and facilitating meaningful corporate social responsibility engagements.
- _6.5 Get CSR Documents :_
  Simplify corporate social responsibility decisions with our app. Big companies can effortlessly acquire CSR documents directly from NGOs, enabling a swift and efficient evaluation process. This direct access ensures transparency and empowers companies to make informed decisions on the eligibility of NGOs for Corporate Social Responsibility initiatives, fostering impactful and transparent corporate-community collaborations.

- _6.6 Chat with NGOs :_
  Elevate collaboration in our platform as major CSR companies and donors engage in direct, real-time conversations with NGOs. This unique feature enhances transparency, enabling constructive dialogues that lead to impactful partnerships. Foster meaningful connections and drive positive change by seamlessly connecting with NGOs, aligning visions, and collectively contributing to social betterment. Join us in creating a space where communication fuels transformative collaborations for a brighter future.

# 7.0 Tech Stack

_Client:_ React , TailwindCSS ,Material UI

_Server:_ MongoDB , Express.js , Node.js

# 8.0 Support

For support, email us on -
Abhyuday Pratap singh : apsworks1212@gmail.com
Mob Num : 6391909757

# Note

- We have created the app individually so we are still trying to integrate all features in one repository but as it is a tech part and payment integration can not be done easily so we are giving with you a repo that has the architecture and explains the basics of the project that what is our project about.
  -So Video made in the drive folder is merger of all the features and how it will look like once we merged all the projects.

- We Will be Providing the github repo from which we are working with the features by our ibdivuidual team mates Harsh and Aditya.

[Harsh_Chat_App]{https://github.com/kharsh560/chatApp.git}
[Aditya_Payment_Interface]{https://github.com/StormBreaker2022/NITP_Hackatho_Aditya.git}
