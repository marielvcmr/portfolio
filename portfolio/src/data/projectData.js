export const projectData = [
  {
    id: "flowsheet",
    name: "FlowSheet",
    iconType: "image",
    iconContent: "flowsheet-logo.png", 
    about: "System to manage Projects and Employees Timesheets",
    description: "Web system designed to manage Projects and Employees with their Timesheets. The functionalities of the system for a user vary according to the profile they have. An Administrator is able to manage people within the company, define their charges, audit the systema and manage permissions to control what actions the other profiles can execute. A Project Leader is able to see, edit, delete and create projects with their teams and project roles. They can assign activities and see the progress of the project through timesheets and charts. Finally a Team Member only see the projects and activities they're a part of, see their progress and send progress notifications. There is also a chat for  a Leader with each of their project workteams",
    images: ["flowsheet-admin-permissions.png", "flowsheet-persons.png", "flowsheet-dashboard-leader.png", "flowsheet-projects-leader.png", "flowsheet-chat.png", "flowsheet-my-projects.png"], 
    stack: [
      "Node.js", "Express.js", "React.js", "Vite",
      "PostgreSQL"
    ],
    repo: "https://github.com/chiq-mari/FlowSheet.git"
  },

  {
    id: "mi-chinita",
      name: "Mi Chinita",
      iconType: "image",
      iconContent: "mi-chinita-logo.png",
      about: "Web system for managing a dental clinic, including medical records and appointments",
      description: "Web system designed to manage a dental clinic. The system allows managing different entities such as Dentists, Specialties, Services, Patients and Users. It includes functionalities to manage patient Medical Records (Ficha Médica) and track clinical appointments, their reports and the clinical stock available.Administrators have access to maintenance modules to control users, staff, and services in the clinic. The system also includes a dashboard for quick overview and profile management.",
      images: [
        "mi-chinita-dashboard.png",
        "mi-chinita-consultas.png",
        "mi-chinita-especialidades.png",
        "mi-chinita-info.png"
      ],
      stack: [
        "Node.js",
        "Express.js",
        "React.js",
        "Vite",
        "PostgreSQL"
      ],
      repo: "https://github.com/marielvcmr/soft-engineering-system.git"
},
  {
  id: "captcha-ia",
  name: "Captcha Solver AI",
  iconType: "emoji",
  iconContent: "🤖",
  about: "AI pipeline to solve numeric 4-digit captchas using PyTorch and pgvector",
  description: "An AI pipeline designed to solve 4-digit numerical captchas demonstrating the complete lifecycle of a computer vision model. The system generates synthetic captchas and uses geometric segmentation to split them into individual digits. These digits are processed by a Convolutional Neural Network (CNN) trained in PyTorch to extract their feature embeddings. The embeddings are then stored in a PostgreSQL database using the pgvector extension, allowing the system to use k-NN similarity search to predict new captchas. Note on limitations and testing: The system strictly expects captchas of 160x60 pixels that can be cleanly segmented into 4 separate columns (40x60 each). It relies heavily on mathematical separation, meaning highly overlapping digits, variable spacing, or complex noise backgrounds will increase the error margins and decrease prediction accuracy. For testing, the system includes a module to generate completely new, unseen images to validate the model's accuracy on unfamiliar data without overfitting.",
  images: [
    "captcha-ia-home.png", 
    "captcha-ia-test.png"
  ],
  stack: [
    "Python", 
    "PyTorch", 
    "PostgreSQL", 
    "pgvector",
    "Gradio",
    "Pillow"
  ],
  repo: "https://github.com/marielvcmr/captcha-ia.git"
},
{
  "id": "contacts-app",
  "name": "Contacts App",
  "iconType": "image",
  "iconContent": "contacts-app-logo.png",
  "about": "A React application for managing contacts with different customizable views and authentication.",
  "description": "A frontend React application designed to manage personal contacts. It includes an authentication layer to verify user credentials before granting access. The system provides full CRUD operations for contacts, allowing users to create, view, edit, and delete them. The contacts are implemented as adaptable components with 2 visual versions. It also features detailed popups to display a contact's full information, which includes fields like Number, Name, Last Name, Photo (with avatars), Notes, and Nicknames.",
  "images": [
    "contacts-app-change.png",
    "contacts-app-create.png",
    "contacts-app-see.png"
  ],
  "stack": [
    "React.js",
    "Vite"
  ],
  "repo": "https://github.com/marielvcmr/contacts-App.git"
},
{
  "id": "geolocalizador",
  "name": "Geolocalizador",
  "iconType": "emoji",
  "iconContent": "🗺️",
  "about": "A web component that displays maps based on the browser's Geolocation API",
  "description": "A frontend utility built using Vanilla JavaScript and Web Components (Custom Elements). It encapsulates a `geolocation-viewer` component that interfaces with the browser's native Geolocation API to fetch the user's current coordinates. It then dynamically renders an embedded Google Map centered on that location. Users can also manually input custom latitude and longitude coordinates to find specific places, or refresh the component to re-track their current physical location.",
  "images": [
    "geolocalizador-view.png",
  ],
  "stack": [
    "HTML",
    "CSS",
    "JavaScript",
    "Geolocation API"
  ],
  "repo": "https://github.com/marielvcmr/web1-projects.git"
}, 
{
  "id": "music-player",
  "name": "Music Player",
  "iconType": "emoji",
  "iconContent": "🎵",
  "about": "Web-based music player with local audio import and playlist management via IndexedDB",
  "description": "A dynamic frontend music player application developed with Vanilla JavaScript. The application allows users to import local audio files (like MP3s) directly from their computer and intelligently parses the file names to extract the artist and song title. It leverages the browser's IndexedDB to persistently store both the imported songs catalogue and user-created custom playlists. The UI is heavily componentized, utilizing custom JS classes to render modals, playlist grids, side panels, and search functionalities dynamically without reloading the page.",
  "images": [
    "music-player-home.png",
    "music-player-playlist.png",
    "music-player-reproduce.png"
  ],
  "stack": [
    "HTML",
    "CSS",
    "JavaScript"
  ],
  "repo": "https://github.com/marielvcmr/web1-projects.git"
},
{
  id: "matrix-calculator",
  name: "Matrix Calculator",
  iconType: "emoji",
  iconContent: "🖩",
  about: "Interactive web calculator for mathematical operations on square matrices",
  description: "A frontend web application designed to perform complex mathematical operations on square matrices. The system allows users to dynamically change the dimension 'n' of the matrices (from 1x1 up to 10x10) and automatically updates the interactive UI grids. Users can manually input values or generate random matrices for testing. It supports operations including matrix addition, subtraction, matrix multiplication, scalar multiplication, transposition, determinant calculation, matrix inversion, and identity matrix generation. Notably, it includes a verification feature for inverse calculation, demonstrating that multiplying the original matrix by its inverse equals the identity matrix. The project handles DOM manipulation and all mathematical logic purely on the client side.",
  images: [
    "matrix-calculator.png", 
    "matrix-calculator-mult.png",
    "matrix-calculator-det.png"
  ],
  stack: [
    "HTML", 
    "CSS", 
    "JavaScript"
  ],
  repo: "https://github.com/marielvcmr/clientes-web.git"
},
{
  id: "protocolo-udp",
  name: "UDP File Transfer & Emailer",
  iconType: "emoji",
  iconContent: "📨",
  about: "Client-server application to transfer files over UDP and automatically send them via email",
  description: "A custom UDP client-server architecture built in Node.js for transferring files and sending them as email attachments. The client reads user input to collect email metadata, splits the specified file into 1024-byte chunks, and sends them sequentially to the server using the built-in `dgram` module. The server handles the incoming UDP packets, reassembles the file based on sequence indices in the packet headers, and uses `nodemailer` to dispatch an email with the reconstructed file attached to the designated recipient.",
  images: [
    "protocolo-udp-run.png",
    "protocolo-udp-end.png",
    "protocolo-udp-email.png"
  ],
  stack: [
    "Node.js",
  ],
  repo: "https://github.com/chiq-mari/protocolosDeComunicacion.git"
}







];
