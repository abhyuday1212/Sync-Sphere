# Sync Sphere

This Project is made for Google Solution Challenge by Alpha Coders -

# Team | Alpha Coders

- [Abhyuday Pratap Singh](https://www.linkedin.com/in/abhyuday12/) ||  [Aditya Jaiswal](https://www.linkedin.com/in/aditya-jaiswal-14b453241/)  || [Akhilesh](https://www.linkedin.com/in/akhilesh-malik-44989b258/)
|| [Kumar Harsh](https://www.linkedin.com/in/kumar-harsh-468a22253)

### Resources
- [Pototype](https://youtu.be/dhV69KjNwKM?si=FplO35hlBIhyPgut)
- [PPT](https://docs.google.com/presentation/d/1sNe9oJ43-EtZBqNz-faLomwxc8w_-bZL/edit?usp=sharing&ouid=102958168798562091089&rtpof=true&sd=true)


# 1. Introduction

Welcome to Sync Sphere – a revolutionary platform connecting individuals eager to volunteer or donate, companies pursuing CSR opportunities, and NGOs facing resource constraints. Our mission is to forge impactful collaborations, uniting these diverse groups to address societal challenges and contribute to SDG Goal 17.

## 1.1 Problem Statement

The current system creates a disconnect between NGOs seeking CSR funding and companies eager to donate. However, misallocation of funds often hinders true social impact. Individuals wanting to contribute & Volunteer for the causes face similar challenges.Companies want to give back, NGOs need funding, and people want to help. But connecting them all is a challenge. We need a single platform that simplifies CSR funding, offering companies diverse projects, and engaging volunteers for maximum social impact.

## 1.2 What is SyncSphere?

Sync Sphere is a one-stop platform for listing, funding, engaging, and collaborating in social impact initiatives. It bridges the gap by simplifying CSR funding, offering companies diverse projects, and engaging volunteers. This unified platform ensures resources reach the right causes, maximizing social impact for all.

## 1.3 How it solves the problem ?

Sync Sphere bridges the gap by offering a centralized platform for:

- NGOs: Showcase projects to attract potential donors and volunteers.

- Companies: Discover diverse, vetted projects for their CSR initiatives.

- Individuals: Find meaningful volunteer opportunities aligned with their passions.
This streamlines collaboration and resource allocation, ensuring support reaches the right causes and maximizes social impact for all stakeholders.

# 2.0 Prequisite

- MoongoDB (atlas) account
- PayPal business account
- PayPal SendBox account
- PayPal SandBox App client_id
- PayPal SandBox App client_secret Code
- Gemini Api Key

- Note : You can view the guide of how to create any of the particular thing is in the installation section.


# 3.0 Installation

Install the project by cloning this repo from your terminal.

```bash
https://github.com/abhyuday1212/Sync-Sphere.git
```
- Go to the #Sync-Sphere folder,open terminal in VS-Code and write this command
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
- If any ERR ocured in terminal, then use this command and reinstall the dependencies using this line
```bash
  npm i --force
```

## Environment Variables
To run this project, you will need to add the following environment variables to your .env file
- Now create a new file in Syncsphere/backend folder with a name <b>.env</b> and copy-paste the values of .config.env ➡️ .env. 
</br>
Any value you put here is sensitive, so by default .env files will be not tracked by github.In case you want to change this, you can do it by removing.env from .gitignore. 
- Add the Prerequisite asked their.
</br>
Here is the refference how you can add -
</br>
</br>
- DB_URI=mongodb+srv://<'username'>:<'password'>@cluster0.<'database_url'>.mongodb.net/<'Database_Name'>
</br>
You can create a database by [signing up](https://account.mongodb.com/account/login?n=https%3A%2F%2Fcloud.mongodb.com%2Fv2&nextHash=%23org%2F655ca82e2a92b8144c5786e5%2Fsettings%2Fgeneral&signedOut=true) here and creating a database.

</br>

- For creating a <b> PORT </b>, You can assign it any value like "4000", "5000","8000".
- Change the corresponding API_URL in frontend/service/api.js.

</br>

- For generating <b>ACCESS_SECRET_KEY </b> and <b>REFRESH_SECRET_KEY</b>, open your vs code terminal and run this command 2 times and Copy the 64 digits value and paste it in <b>ACCESS_SECRET_KEY </b> and <b>REFRESH_SECRET_KEY</b>. Run the below command 2 times to get different values
```bash
node
```
```bash
require("crypto").randomBytes(64).toString("hex")
```
</br>

- For creating a <b>client_id </b> and <b>client_secret</b> -
- You first need to create a sandbox bussiness account in the developer section of your [Paypal](https://paypal.com) Homepage.</br>
*Go to Testing tools/Create Account and create a 1 bussiness account for the seller and 1 Personal Account for the buyer here.</br>
*Once the sandbox account is created, create an app in App & credentials section. Click on the create app option, and create the app as "Merchant",The app you created is for seller account or the bussiness account.</br>
- Now go to Paypal Sanbox account [login](https://sandbox.paypal.com) page and login here through your app's sandbox email id and password.
- You will get a Client_id and Secret key from their so paste it in you .env folder.
- The client secret you got here ,you also have to paste it to index.html.
</br>

- For creating <b>GEMINI_API_KEY</b>, reffer [this](https://ai.google.dev/tutorials/web_quickstart) documentation. 
</br>

# 4.0 Run Project

- Run the backend server .

- Goto root folder that is Sync-Sphere folder and run these commands in your powershell

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

- _5.1- Empowering NGOs :_ We presents a groundbreaking solution to NGOs' funding challenges by showcasing their causes to a vast network of over 19,000 CSR-engaged companies. The main problem in csr funding was of presenting and pitching the same project at different companies.
Our platform not only facilitates funding connections but also offers a unique feature – the provision of volunteers to NGOs. This comprehensive approach ensures a holistic and impactful collaboration between NGOs ,Volunteers and companies.

- _5.2- Simplify CSR Funding :_ Companies struggle to find suitable CSR projects, spending time on searches and document verifications. We offer a curated list of societal issues and handle project verifications, simplifying the CSR process and saving valuable company resources.

- _5.3- Easy volunteering :_ We ensure that competent and willing individuals seeking to contribute find the appropriate platform, with opportunities segregated based on their profiles. For those seeking short-term paid contributions, we provide the right opportunities for their meaningful engagement.

# 6.0 Features

- <b>_6.1- Create and Publish Projects :_</b>
  Empowering NGOs and individuals alike, our app serves as a unified platform for social impact. Create and share posts for social work projects, attracting volunteers and donations from both individuals and companies. Fostering a collaborative environment, our app connects passionate contributors with meaningful causes, ensuring that social impact flourishes through collective efforts and diverse contributions. Join us in building a community where positive change is driven by shared dedication and impactful collaborations.

- <b>_6.2- Seemless Payment integration:_</b>
  Our app empowers you to contribute individuals and companies directly to NGO's projects.An Individual can either contribute by funding financially or can volunteer earning rewards & badges. A company or organization can firstly view their csr document by submitting their email and then contribute to the cause if they like monetarly.

- <b>_6.3- Ease for Companies to view NGO's Listing :_</b>
  In our project, we provide a comprehensive listing spanning various categories such as environmental sustainability, hunger alleviation, urban cleanliness, and educational excellence. This curated platform ensures that CSR companies and corporations can effortlessly discover diverse, impactful projects. By centralizing these initiatives, we optimize the search process, saving valuable time for companies and facilitating meaningful corporate social responsibility engagements.

- <b>_6.4- Get CSR Documents :_</b>
  Simplify corporate social responsibility decisions with our app. Big companies can effortlessly acquire CSR documents directly from NGOs, enabling a swift and efficient evaluation process. This direct access ensures transparency and empowers companies to make informed decisions on the eligibility of NGOs for Corporate Social Responsibility initiatives, fostering impactful and transparent corporate-community collaborations.

- <b>_6.5- Chat with Gemini chatbot:_</b>
Ask questions & Leverage AI for project inquiries, volunteering info, and personalized guidance.Our chatbot is trained on extensive set of data related to this project and can help you with getting the right responses regarding sync sphere Quickly.

- <b>_6.6- Contribute as Volunteer :_</b>
  Our app goes beyond donations,individuals can explore NGO posts and seamlessly join as volunteers for specific projects. Experience a holistic approach to giving by connecting directly with causes, contributing funds, and actively participating in projects that align with your passion for positive change.

- <b>_6.7- Chat with members and joinies of the Projects :_</b>
  Elevate collaboration in our platform as major CSR companies and donors engage in direct, real-time conversations with NGOs. This unique feature enhances transparency, enabling constructive dialogues that lead to impactful partnerships. Foster meaningful connections and drive positive change by seamlessly connecting with NGOs, aligning visions, and collectively contributing to social betterment. Join us in creating a space where communication fuels transformative collaborations for a brighter future.

# 7.0 Tech Stack

_Client:_ React , TailwindCSS ,Material UI .

_Server:_ MongoDB , Express.js , Node.js .

# 8.0 Support

For support, email us on -
Abhyuday Pratap singh : apsworks1212@gmail.com
</br>
Mob Num : 6391909757

# Note

- The Chat app is still pending for the integration and will be integrated soon which will allow users to create a personal chat room for every project for strategy disscussion with all its stake holders.
- So Video made in the drive folder is merger of all the features and how it will look like once we merged all the projects.
- We are Providing the github repo from which we are working with the features of the chat app by our indivuidual team mates Harsh.

[Harsh | Chat App](https://github.com/kharsh560/ChatApp)

</br>
