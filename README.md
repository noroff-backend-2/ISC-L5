[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/mzxBmZy_)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11717433&assignment_repo_type=AssignmentRepo)
![](http://143.42.108.232/pvt/Noroff-64.png)
# Noroff
# Back-end Development Year 1
### Databases - Course Assignment 1 <sup>V4</sup>

Startup code for Noroff back-end development 1 - Front-end Technologies course.

Instruction for the course assignment is in the LMS (Moodle) system of Noroff.
[https://lms.noroff.no](https://lms.noroff.no)

![](http://143.42.108.232/pvt/important.png)

You will not be able to make any submission after the deadline of the course assignment. Make sure to make all your commit **BEFORE** the deadline

![](http://143.42.108.232/pvt/help_small.png)

If you are unsure of any instructions for the course assignment, contact out to your teacher on **Microsoft Teams**.

**REMEMBER** Your Moodle LMS submission must have your repository link **AND** your Github username in the text file.

---

# Application Installation and Usage Instructions
1. Click *Code* (Green button top right) and then *Download ZIP*.
2. Extract the ZIP file in the location of your choosing.
3. Run *start.bat* OR run *npm install* and then *npm start* in the terminal from the selected folder.
4. Navigate you browser to *http://localhost:3000*

# Environment Variables
ADMIN_USERNAME = "dabcaowner"  
ADMIN_PASSWORD = "dabca1234"  
DATABASE_NAME = "adoptiondb"  
DIALECT = "mysql"  
DIALECTMODEL = "mysql2"  
PORT = "3000"  
HOST = "localhost"

# Additional Libraries/Packages
- connect-flash ^0.1.1
- connect-sqlite3 ^0.9.13
- cookie-parser ~1.4.4
- debug ~2.6.9
- dotenv ^16.0.3
- ejs ^3.1.8
- express ^4.18.2
- express-session ^1.17.3
- http-errors ~1.6.3
- morgan ~1.9.1
- mysql ^2.18.1
- mysql2 ^2.3.3
- passport ^0.6.0
- passport-local ^1.0.0
- sequelize ^6.27.0
- sqlite3 ^5.0.2

# NodeJS Version Used
Node.js v18.17.1

# DATABASE
CREATE DATABASE adoptiondb;

# DATABASEACCESS
CREATE USER IF NOT EXISTS 'dabcaowner'@'localhost' IDENTIFIED BY 'dabca1234';  
GRANT ALL PRIVILEGES ON adoptiondb.* TO 'dabcaowner'@'localhost';