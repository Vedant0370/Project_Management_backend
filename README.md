# 🚀 Galaxy Backend  

Project Management Backend is a Node.js-based project management system similar to Jira. This is the first version of the project. In future releases, we plan to add attachments and stories for better task management.  

## 📌 Features  
- User authentication (JWT-based)  
- Project and task management  
- Pagination support using Mongoose  
- Secure password handling with bcrypt  
- Environment variable management using dotenv  

## 🛠️ Tech Stack  
- **Backend:** Node.js, Express.js, TypeScript  
- **Database:** MongoDB with Mongoose  
- **Security:** JSON Web Tokens (JWT), bcrypt  
- **Development Tools:** TypeScript, Nodemon, ESLint, Jest  

## 📂 Project Structure  

## 🚀 Installation & Setup  
### **1. Clone the Repository**  
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/Project_Management_backend.git
cd Task_Management_Galaxy

Install Dependencies
npm install

Set Up Environment Variables
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Development Mode
npm run dev

Production Mode
npm run build
npm start


📌 Future Enhancements
🔹 File attachments for tasks
🔹 Task stories and comments
🔹 Role-based access control
🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss the changes.

📜 License
This project is licensed under the ISC License.