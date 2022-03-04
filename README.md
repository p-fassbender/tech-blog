# Tech Blog

The aim of this project was to 

## Table of Contents
[Technologies Used](#technologies-used) <br>
[Installation](#installation) <br>
[Usage](#use) <br>
[Testing](#tests) <br>
[Media](#media) <br>
[Questions](#questions) <br>

## Technologies Used
* 
* 
* 

with a focus on

---

## Installation
Navigate to the root directory in the terminal and initialize the project with **npm install** to install all the proper node module dependencies.

Update the **.envExample** file to include your own username and password for mysql and then change the file name to be **.env**

Navigate to the root directory in the terminal and log into mysql with **mysql -u &lt;user> -p** and enter your mysql password.

Initialize the database in mysql using the following commands
* **source db/db.sql**
* **source db/schema.sql**
* **source db/seeds.sql**

---

## Use
Navigate to the root directory in the terminal and type **npm start** to run the project

---

## Tests
There are no formal tests for this project

---

## Media
insert screenshot here
insert video here

The following link is to this project's github repository
https://github.com/p-fassbender/

---

## Questions
Any questions feel free to contact me via [my github](https://github.com/p-fassbender) or by sending me an email at fassbenderp0551@gmail.com.

---

## USER STORY
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## ACCEPTANCE CRITERIA
* GIVEN a CMS-style blog site
* WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
* WHEN I click on the homepage option
THEN I am taken to the homepage
* WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
* WHEN I choose to sign up
THEN I am prompted to create a username and password
* WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
* WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
* WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
* WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
* WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
* WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
* WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
* WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
* WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
* WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
* WHEN I click on the logout option in the navigation
THEN I am signed out of the site
* WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments