# SDLC for AI rBuilder App

- Requirement Analysis
    - Functional Requirement : Create a new Resume, Edit an exisiting Resume, View A Saved Resume, Download Resume, View All Saved resumes, Remove Saved Resume, 
    - Non functionnal Requirement : Responsive UI, REST API Integration, Easy Navigation
- Planning 
    UI Design - 2 Days, React set up - 0.5 day, CRUD APIs - 2 Days, AI Integration - 1 Day, Resume data management - 2 Days
- System Design 
    - React Pages : Home page, Resume page, User Info Page, View Resume page, All saved Resume, Page Not found, Download Resume
    - React Component : Header, Footer, User Input, Resume Preview, Edit Resume
    - Folder Structure : Pages, Components, Services, API
    - JSON Schema : {
        "resumes":[
        {
            "id":1,"username":"demo","location":"","jobTitle":""....
        },
        "downloads":[
            {
                timestamp:"", resumeImg:"", id:"" 
            }
        ]
    ]} 
    - REST API Design
        - Methods           Endpoint        Purpose
        POST              /resumes        Save resume in json file
        PUT               /resumes/id     Edit exisiting resume in json file
        GET               /resumes/id     View A resume from json file
        GET               /resumes        View All resume from json file
        DELETE            /resumes/id     Remove A resume from json file
        GET               /downloads      View All downloaded resume from json file
        DELETE            /downloads/id   Remove A downloaded resume from json file
- Developement
    - Frontend : React
    - Database : JSON Server
- Deployment
    - Vercel/Netlify, Render

# Steps for Creating React Application
    1. Create & run react app using vite 
    2. Remove all code from index.css & App.css file. Update App.jsx file
    3. Install or Add packages to the project
        - Update website title & icon
        - Add CDN link for bootstrap , google fonts
        - Install material UI, react-icons , react-router-dom, 
    4. Create pages folder inside src to hold different pages of react app, and create react component for the same
    5. Create components folder inside src to hold different components which is part of webpages of react app, and create react component for the same
    6. Set up path for each page of the react app using react-router-dom library
    7. Design the app

# Project Folder Structure

    src
    │
    ├── components folder
    ├── pages folder
    ├── App.jsx
    └── main.jsx

