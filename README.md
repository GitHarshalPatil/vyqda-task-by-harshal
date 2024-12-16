## All Three Tasks
# Task 1 : Task Progress Table

This task allows users to track, edit, and manage tasks, with a focus on providing an interactive user interface for updating task status, due dates, and preparing data for API submission.

## Features:
- View and edit tasks.
- Change task status (Pending, In Progress, Completed).
- Update task due date.
- Prepare data for API submission.

## Usage:
- The task list will be displayed with editable fields for task name, status, and due date.
- Click the **"Edit"** button to modify a task.
- After editing, click **"OK"** to save changes or **"Cancel"** to discard.
- Click the **"Prepare Data"** button to view the data formatted for API submission. This will currently log the data to the console and show it in an alert.

## Screenshots: Data ready for post API

![Screenshot (59)](https://github.com/user-attachments/assets/e583135e-2ae1-449f-a20e-93450921546e)

![Screenshot (60)](https://github.com/user-attachments/assets/7eff670a-263f-4626-9c2e-e34c7ca02017)



# Task 2 : Notes Web App
## Command for How to run Frontend:
- npm i
- npm start

## Command for How to run Backend:
- npm i
- node index.js

## url and Endpoints:
- BASE_URL = http://localhost:5050/api/notes
- Post endpoint = http://localhost:5050/api/notes/add
- Get endpoint = http://localhost:5050/api/notes
- Delete url = http://localhost:5050/api/notes/delete/:id


This is a Notes Web App that allows users to add, view, and delete notes. The app uses **MySQL** as the backend database to store notes, and it provides a clean and minimal design for ease of use.

## Features:
- **Add Notes**: Users can add new notes with a title and content.
- **Delete Notes**: Users can delete notes from the list.
- **Store Notes in MySQL**: All notes are stored in a MySQL database for persistent storage.

## Tech Stack:
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js with Express.js
- **Database**: MySQL
- **Server**: Express.js

## Screenshots : Notes add with current date and time. Also done with api testing.
![Screenshot (54)](https://github.com/user-attachments/assets/5386f78e-ac26-4390-9fb6-89cd215e55fd)
![Screenshot (55)](https://github.com/user-attachments/assets/c4cf6764-21df-44f2-91ff-712a5efc9c5e)
![Screenshot (56)](https://github.com/user-attachments/assets/5a100328-22eb-47cd-b13a-af1a147bad2f)

-API testing Screenshots :
![Screenshot (63)](https://github.com/user-attachments/assets/5e728d1d-e8e8-4208-a71d-3af247da6a50)
![Screenshot (62)](https://github.com/user-attachments/assets/f7d2e003-01fe-490e-b911-e237bf6d9639)
![Screenshot (61)](https://github.com/user-attachments/assets/056adeb7-43b8-485a-bdce-e16ee428efd2)



# Task 3: Post Data to API and Display Headers

This task is how to send a POST request to an API endpoint and display the data received in the headers on the web page. The project posts the user's **phonenumber** to the specified endpoint (`https://chimpu.online/api/post.php`) and displays the customized data returned in the response headers.

## Features:
- **Post Phone Number**: Send the user's phone number to the API.
- **Display API Response**: Show the data received in the response headers from the API on the page.
- **Simple UI**: A simple form to input the phone number and a button to trigger the POST request.

## Tech Stack:
- **Frontend**: HTML, CSS, JavaScript
- **API Endpoint**: `https://chimpu.online/api/post.php`

## Screenshots : Succesfully post the data and display headers
![Screenshot (57)](https://github.com/user-attachments/assets/a686473e-6162-46f2-a8b0-86eaf3e6f65f)
![Screenshot (58)](https://github.com/user-attachments/assets/7d6f161b-5c76-440b-9adc-3800b1223e83)


