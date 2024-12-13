# **Al Akhawayn University Library Website**

## **Description**
This repository contains the source code for the Al Akhawayn University Library website, a comprehensive platform for students and librarians to explore, manage, and rent books online. The website provides seamless navigation between book categories, detailed book information, and dashboards for students and administrators.

---

## **Features**
- **Search and Filter**: Search books by title and filter them by category.
- **Book Details**: View detailed information about each book, including availability.
- **Category Navigation**: Easily navigate books by category using buttons on the homepage.
- **Admin and Student Dashboards**: Manage books and view borrowing history.
- **Dynamic Content**: Data is fetched dynamically from a MongoDB database.
- **Responsive Design**: Optimized for desktop and mobile devices.

---

## **Technologies Used**
- **Frontend**:
  - React.js
  - React Router
  - Axios
  - CSS for styling (with responsive design)
- **Backend**:
  - Node.js
  - Express.js
- **Database**:
  - MongoDB (with Compass for management)
  - Mongoose (ODM for MongoDB)
- **Tools**:
  - Visual Studio Code
  - Git and GitHub for version control

---

## **How to Run the Project**

### **1. Prerequisites**
Ensure you have the following installed on your system:
- **Node.js** (Version 14 or above)
- **MongoDB Community Server**
- **Git**

---

### **2. Setting Up the Project**

#### **Clone the Repository**
```bash
git clone https://github.com/yourusername/your-repository-name.git
cd your-repository-name
```

#### **Install Dependencies**
Navigate to the `backend` and `frontend` folders separately and install dependencies:
```bash
# For the backend
cd backend
npm install

# For the frontend
cd ../frontend
npm install
```

---

### **3. Database Setup**
1. Make sure your MongoDB server is running. If not, run:
   ```bash
   mongod --dbpath="your-path-to-data-folder"
   ```
2. Import your data into MongoDB. Use MongoDB Compass to import your `books` and `librarians` collections into the `libraryDB` database.

---

### **4. Running the Project**

#### **Backend**
Navigate to the `backend` folder and start the server:
```bash
cd backend
node server.js
```
The backend will run on `http://localhost:5000`.

#### **Frontend**
Navigate to the `frontend` folder and start the React application:
```bash
cd ../frontend
npm start
```
The frontend will run on `http://localhost:3000`.

---

### **5. Environment Variables**
Create a `.env` file in the `backend` directory and add the following:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/libraryDB
```

---

### **6. Using the Website**
- Visit `http://localhost:3000` to access the homepage.
- Use the search bar or category buttons to browse books.
- Click on a book to view its details.
- Navigate to the admin dashboard (`/admin-dashboard`) to manage books (requires login).
- Explore student features in the student dashboard (`/student-dashboard`).

---

## **Contact**
For any inquiries, feel free to reach out:
- **Email**: mystudio5050@gmail.com / my.elidrissi@aui.ma
- **GitHub**: [lilbox122](https://github.com/lilbox122)

