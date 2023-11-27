import light from './assets/lighthouse.png'
import isnp from './assets/ISBP.png'
import lumiq from './assets/Lumiq.png'

export const projects = [
  {
    title1: "Matthias",
    title2:"Leidinger",
    description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "rock.jpg",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#fff"
  },
  {
    title1: "Light",
    title2:"house",
    src:light,
    description: "<ul><li>Developed and maintained the 'Tasks' section of the Lighthouse project.</li>    <li>Implemented Redux for efficient state management, ensuring data consistency and real-time updates.</li>    <li>Integrated the WXYNG text editor and implemented advanced search, filtering, sorting, and infinite scroll features to enhance the user experience.</li>    <li>Utilized the Redmine API for seamless storage and management of tasks from Redmine.</li>  </ul>",
    link: "https://development-1-0-1-18-02-22.d2tsmzg8xu7j17.amplifyapp.com/lighthouse/tasks",
    // color: "#FFD28F"
    color:'#fff'
  },
  {
    title1: "IS",
    title2:"NP",
    description: "<ul>    <li>Collaborated on ISNP, an insurance platform.</li>    <li>Implemented PDF generation using the Puppeteer library and developed essential APIs for it.</li>    <li>Leveraged GraphQL to fetch ISNP UI content.</li>    <li>Utilized MongoDB for storing ISNP journey data.</li>    <li>Worked closely with cross-functional teams to ensure project success, meeting milestones and deadlines consistently.</li>  </ul>",
    src:isnp,
    link: "https://onlineinsuranceuat.canarahsbclife.com/flexiEdge/?source=canara",
    // color: "#D0BFFF",
    color:'#fff'
    
  },
  {
    title1: "LUM",
    title2:"IQ",
    description: "<ul>    <li>Independently developed the Lumiq website, covering both backend and frontend.</li>    <li>Ensured website responsiveness across various devices and screen sizes.</li>    <li>Used SCSS for visually appealing and efficient CSS.</li>    <li>Employed Gatsby for frontend development, optimizing performance and user experience.</li>    <li>Implemented Strapi as the backend CMS for data management.</li>    <li>Utilized GraphQL and Apollo Client for efficient data handling.</li>    <li>Enhanced user interaction with animations, including section-specific underlines and typewriter effects.</li>  </ul>  ",
    src:lumiq,
    link: "https://www.lumiq.ai/",
    // color: "#ED7D31",
    color:'#fff'
  },
]