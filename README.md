
#  Task Management Frontend

This is the **frontend** of a Task Management App built using **React**, **Vite**, and **Tailwind CSS**. It allows users to create, view, mark as complete, and delete tasks through an intuitive and responsive UI.

## 🚀 Tech Stack

- ⚛️ React (with Vite)
- 💨 Tailwind CSS
- 🧠 State Management (React Context)
- 🌐 Fetch API for server communication

---

##  Folder Structure

```bash
your-project/
├── src/
    ├── Context/          # Global context for tasks
    ├── pages/            # Page components
│   ├── App.jsx           # App entry
│   └── main.jsx          # Vite entry point
├── public/
└── index.html
```

### DEPENDENCIES

```json
"dependencies": {
    "@tailwindcss/vite": "^4.1.6",   // for css 
    "react": "^19.1.0",              
    "react-dom": "^19.1.0",         
    "react-icons": "^5.5.0",         // for arrow icons 
    "react-router-dom": "^7.6.0",    // for routing
    "tailwindcss": "^4.1.6",         
    
  },
```

### Installation Guide REACT APP

```bash
git clone https://github.com/Uddeshya-Rawat/FullStack-Task-APP.git
npm install               ## install dependencies
npm i react-router-dom    ## install router
npm i react-icons         ## install icons

```



### TailWind Installation Guide

```bash
npm install tailwindcss @tailwindcss/vite
```


CHANGE THE CONFIG FILE

```bash
## vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```


  REMOVE THE PREPROGRAMMED CSS IN INDEX.CSS AND ADD THIS 
```bash
@import "tailwindcss";
```

## start the react app
```bash
npm run dev ## to start the react app

``` 

### Make Sure your Server us running on different port

for further querries

📧 Email: [uddeshyarawat4@gmail.com](mailto:uddeshyarawat4@gmail.com)