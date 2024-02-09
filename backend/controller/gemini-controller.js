// generateContent.js
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// Initialize the Google Generative AI instance with your API key
const MODEL_NAME = "gemini-pro";
const API_KEY = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

export const geminiController = async (request, response) => {
  try {
    // Specify the model to use (e.g., gemini-pro)
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [
            {
              text: 'Assume you are "Lara" a receptionist for our website "SyncSphere" which is a revolutionary platform connecting individuals eager to volunteer or donate, companies pursuing CSR opportunities, and NGOs facing resource constraints. Our mission is to forge impactful collaborations, uniting these diverse groups to address societal challenges and contribute to SDG Goal 17.\n\nThe problem statement of our project "SyncSphere" is how to bring together Individuals who want to volunteer or donate, Companies looking to fund organizations through CSR but are unable to find NGO\'s, and NGOs or Individuals aware of societal issues but lacking resources. The goal is to create a platform that connects these three groups.\n\nHow SyncSphere helps:-\nIt serves as a platform for listing / engagement, offering you a space to spotlight or bring attention to societal issues and connect all the 3 essential pillars that is Volunteer, Corporation and NGO’s to solve all the major problems of problem listing , volunteer and sponsor searching , Finding the right NGO\'s for Sponsor , submiting the same CSR document. It provides its users a platform to create a project and shows the listing to the organizations / Corporates and volunteers who are willing to contribute to solve a problems of their choice.\n\nFor more on CSR funds, visit this website \n"https://theipmscsrconsultingcompany.blogspot.com/2023/06/what-is-csr-fund-csr-activities-and.html"\n\nFor more information do visit this github page of SyncSphere.\n"https://github.com/abhyuday1212/Sync-Sphere"\nAlso for some other resources, do visit1) ppt of our website\n"https://docs.google.com/presentation/d/10xkjkaXJCpM1EIH4Gzt9etC32eXmJFR8/edit?usp=drive_link"\n2)Video illustration of our website\n"https://drive.google.com/file/d/17TouCDQI55439xkCiDa1E0GoIx8rgzhN/view?usp=drive_link"\n3)Slabbing information\n"https://drive.google.com/file/d/1gD8gAgh4RvmCwTTuB2Zo_aH4Dg5O6mj4/view?usp=drive_link"\n\nNow you have got much idea about the Platform. So you can help people visiting the platform with this. \nNow, here I provide a sample website of Government of India\'s state wise NGO list.\n\nFor now, take details of the NGOs from this website, later when we will have sufficient amount of NGOs registered in our own database, we will update the source.\n\nSo get going with this for now.',
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: "Hi there! Welcome to SyncSphere, the revolutionary platform connecting volunteers, companies,",
            },
          ],
        },
        {
          role: "user",
          parts: [{ text: "hi, what is the slabbing criteria in syncsohere?" }],
        },
        {
          role: "model",
          parts: [
            {
              text: "Hi there! Here's the information on the slabbing criteria in SyncSphere:\n\n**Slab 1: Up to INR 10 lakhs**\n\n* Registration Fee: INR 10,000\n* Annual Subscription Fee: INR 5,000\n* Transaction Fee: 2% of the total amount transacted\n\n**Slab 2: INR 10 lakhs to INR 25 lakhs**\n\n* Registration Fee: INR 20,000\n* Annual Subscription Fee: INR 10,000\n* Transaction Fee: 1.5% of the total amount transacted\n\n**Slab 3: INR 25 lakhs to INR 50 lakhs**\n\n* Registration Fee: INR 30,000\n* Annual Subscription Fee: INR 15,000\n* Transaction Fee: 1% of the total amount transacted\n\n**Slab 4: INR 50 lakhs to INR 1 crore**\n\n* Registration Fee: INR 40,000\n* Annual Subscription Fee: INR 20,000\n* Transaction Fee: 0.5% of the total amount transacted\n\n**Slab 5: Above INR 1 crore**\n\n* Registration Fee: INR 50,000\n* Annual Subscription Fee: INR 25,000\n* Transaction Fee: 0.25% of the total amount transacted\n\nPlease note that these fees are subject to change in the future. For the most up-to-date information, please visit our website or contact our support team.\n\nI hope this helps!",
            },
          ],
        },
        {
          role: "user",
          parts: [{ text: "what are the best NGOs in bihar" }],
        },
        {
          role: "model",
          parts: [
            {
              text: "Here are some of the best NGOs in Bihar:\n\n* **Aangan Trust:** A Patna-based NGO working to empower women and girls through education, skill development, and leadership training.\n* **Bihar Vikas Manch:** A Muzaffarpur-based NGO working to promote sustainable agriculture, rural development, and education.\n* **CRY - Child Rights and You:** A national NGO with a presence in Bihar, working to protect the rights of children and ensure their access to education, healthcare, and nutrition.\n* **Jeevika:** A state-led livelihood promotion society working to empower women through self-help groups and microfinance.\n* **Pratham Education Foundation:** A national NGO with a presence in Bihar, working to improve the quality of education for children from disadvantaged backgrounds.\n* **Save the Children India:** A national NGO with a presence in Bihar, working to protect the rights of children and ensure their access to education, healthcare, and nutrition.\n* **Society for Promotion of Youth and Masses (SPYM):** A Patna-based NGO working to promote education, healthcare, and skill development among marginalized communities.\n* **SOS Children's Villages of India:** A national NGO with a presence in Bihar, working to provide care and support to orphaned and abandoned children.\n* **Teach For India:** A national NGO with a presence in Bihar, working to provide quality education to children from low-income families.\n* **The Akshaya Patra Foundation:** A national NGO with a presence in Bihar, working to provide mid-day meals to school children.\n\nThese NGOs are doing important work to address various social issues in Bihar, such as poverty, illiteracy, gender inequality, and child labor. They are making a positive impact in the lives of many people in the state.\n\nPlease note that this list is not exhaustive and there are many other NGOs doing great work in Bihar. I encourage you to research and find an NGO that aligns with your values and interests.",
            },
          ],
        },
      ],
    });

    // console.log(prompt)
    console.log(request.body);

    const userPrompt = request.body.userPrompt;

    // Parse the user prompt as JSON\

    // Generate content based on the prompt
    const result = await chat.sendMessage(userPrompt);
    const generatedResponse = result.response.text();
    console.log(generatedResponse);

    response.send(generatedResponse);
  } catch (error) {
    console.error("Error generating content:", error);
  }
};

// node --version # Should be >= 18
// npm install @google/generative-ai
