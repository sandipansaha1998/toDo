# Task Grid
Taskgrid is a task management applicaiton .Within the app, a user  can create and track the tasks all within a single page.
The initial HTML page is loaded once, and subsequent updates and interactions are handled dynamically within the same page
by manipulating the DOM and communicating with server for new resources via XHR (XMLHttpRequest) requests.

The web app is built on NodeJS with Express JS as the framework.The Model-View-Controller architecture was implemented.EJS served as templating engine.Jquery 
was used to make asychronous XMLHTTPRequests to the server.


## [Hosted URL link](https://taskgrid.socialise-india.in/)

### Features
- [x] Signup users with unique emailID.
- [x] Log In using verified emailID.
- [x] Use of Social Login - Google Login/Sigup.
- [x] Create and delete a task. 
- [x] Tasks are allocated to 'upcoming','past' or 'today' section based on their deadline.
- [x] Toggle task completion status .Completed tasks within deadline are assigned GREEN  .A task
      is mark Red if user fails to complete a task within deadline.

### Optimization
- [x] Used Gulp to compress static files in production

### Technology Stack Used

Particulars | Version
----------- | ---------
bcrypt | 5.1.0
connect-flash | 0.1.1
connect-mongo | 5.0.0
crypto | 1.0.1
del | 7.0.0
ejs | 3.1.9
express | 4.18.2
express-ejs-layouts | 2.5.1
express-session | 1.17.3
gulp | 4.0.2
gulp-cssnano | 2.1.3
gulp-rev | 10.0.0
gulp-uglify-es | 3.0.0
kue | 0.11.6
mongoose | 6.10.0
nanoid | 4.0.2
nodemailer | 6.9.1
noty | 3.2.0-beta-deprecated
passport | 0.6.0
passport-google-oauth | 2.0.0
passport-local | 1.0.0


### Directory Structure
```
.
├── TODO.txt
├── config
│   ├── enviroment.js
│   ├── flashMiddleware.js
│   ├── kue.js
│   ├── mongoose.js
│   ├── nodemailer.js
│   ├── passport-google-oauth2-strategy.js
│   ├── passport-local.js
│   └── view-helper.js
├── controllers
│   ├── accessController.js
│   ├── homeController.js
│   ├── taskController.js
│   ├── today.js
│   └── userController.js
├── dump.rdb
├── frontend
│   ├── responsive.css
│   ├── sign_in.css
│   ├── sign_in.html
│   ├── test.css
│   ├── test.html
│   └── test.js
├── gulpfile.mjs
├── index.js
├── mailers
│   ├── missedAlert.js
│   └── resetPassword.js
├── models
│   ├── task.js
│   └── user.js
├── package-lock.json
├── package.json
├── public
│   └── static
│       ├── css
│       │   ├── access_layout-9d210f9b18.css
│       │   ├── create_task-88211b3b88.css
│       │   ├── header-900bbb691a.css
│       │   ├── home-781b6ed768.css
│       │   ├── responsive-d41d8cd98f.css
│       │   └── task_card-d0e6342956.css
│       ├── images
│       │   └── logo-339af1a99d.png
│       └── js
│           ├── create_task-93138961f1.js
│           ├── delete_task-bb9987be62.js
│           ├── form_date-40a2571bba.js
│           ├── populate_task_form-7b24b4cc1d.js
│           ├── toggle_status-198e623049.js
│           └── validate_input-b12469b847.js
├── rev-manifest.json
├── routes
│   ├── access.js
│   ├── index.js
│   ├── task.js
│   └── user.js
├── static
│   ├── css
│   │   ├── access_layout.css
│   │   ├── create_task.css
│   │   ├── header.css
│   │   ├── home.css
│   │   ├── responsive.css
│   │   └── task_card.css
│   ├── images
│   │   ├── list-check-solid.svg
│   │   ├── logo.png
│   │   └── test.jpeg
│   └── js
│       ├── create_task.js
│       ├── delete_task.js
│       ├── form_date.js
│       ├── populate_task_form.js
│       ├── toggle_status.js
│       └── validate_input.js
├── views
│   ├── _create_task.ejs
│   ├── _header.ejs
│   ├── _past.ejs
│   ├── _task_card.ejs
│   ├── _today.ejs
│   ├── _upcoming.ejs
│   ├── access_layout.ejs
│   ├── home.ejs
│   ├── layout.ejs
│   ├── login.ejs
│   ├── mailers
│   │   └── reset_password.ejs
│   ├── reset_password
│   │   ├── confirm_email.ejs
│   │   └── reset_pass_form.ejs
│   └── signup.ejs
└── worker
    └── reset_password_email_worker.js

```
