# Assignment
Please complete the below mentioned initial screening exercise to move to the next level of hiring process.

Project: Remind-me-later

This web app does one thing and one thing well. It allows users to setup a reminder with a message. The JS developers have gone ahead and created a nice UI to accept date and time, to know when to send the message, and the actual text message to send. They have also given an option to select how to remind. Right now the app support reminding through SMS and Email. Going forward the app might support other ways to send the reminder. 

Now the JS devs need an API to call to save the state to the db. 
Design and implement an API endpoint using django for the above requirement. If you are not familiar with Django, please use another Python framework for creating this endpoint. 
Please note that you do not need to take care of actual message delivery logic. You are only required to create an endpoint which accepts these datapoints: date, time and message and store the info in database.

Note: In case you have not worked with Python and associated frameworks before, you are free to code in a language and framework of your choice, be it JS, Java, Go , etc.

Upon completion, please share the github repo link.


My solution:-
This is a simple Node.js + Express.js API built to support a frontend that allows users to create reminders.

The frontend provides:

Date

Time

Message

Reminder method (email or sms)

The API accepts these inputs, validates them, and stores the reminder in a MongoDB database.

📦 Tech Stack
Node.js

Express.js

MongoDB with Mongoose

Nodemon for development

🛠️ Features
POST /api/reminders — create a new reminder

Input validation for all required fields

Modular code: separate routes, models, and database connection

🔧 How to Run
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/remind-me-later-express.git
cd remind-me-later-express
Install dependencies:

bash
Copy
Edit
npm install
Set up environment variables in a .env file:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=3000
Run the server:

bash
Copy
Edit
npm run dev
📬 Example Request
POST http://localhost:3000/api/reminders

JSON Body:
json
Copy
Edit
{
  "date": "2025-05-23",
  "time": "14:30",
  "message": "Doctor appointment",
  "remind_by": "sms"
}
Example Response:
json
Copy
Edit
{
  "message": "Reminder saved",
  "reminder": {
    "_id": "66524dd8123abc4567890def",
    "date": "2025-05-23T00:00:00.000Z",
    "time": "14:30",
    "message": "Doctor appointment",
    "remind_by": "sms",
    "__v": 0
  }
}
🧪 How to Test with Postman
Method: POST

URL: http://localhost:3000/api/reminders

Header:

Content-Type: application/json

Body (raw):

json
Copy
Edit
{
  "date": "2025-05-23",
  "time": "14:30",
  "message": "Dentist appointment",
  "remind_by": "email"
}

