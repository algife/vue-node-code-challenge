# Coding Challenge for a Full-Stack Software Developer role with TypeScript/JavaScript/Vue expertise

> Repository where I go through the coding challenge and I keep track of the changes and progress.

Author: Alexandre Gimenez. Date: 1st February, 2022.
Attached at the end is the Initial Coding Challenge description document "as-it-is" provided.

> **STATUS**: Work In Progress

## Tech Stack Expertise required

- **Back end**
  - Node.js and Express.js for RESTful API development and 3rd party API integration (Task 1)
  - Mongoose (Task 2)
- **Front end**
  - Vue.js for Single Page Application (SPA) development on the client-side

## Challenges faced during the development

- It is the **very first time I work with Vue.js**, so I had to go through a learning curve to quickly research what I need to accomplish the challenge
- I have decided to apply **Git flow** to the git repository so there are multiple branches for:
  - main,
  - develop
  - features
  - Skipped: _QA, hotfix and staging are branches that would be useful for real projects but not for a small demo._

## Roadmap

- [x] Gather the requirements for Task 1 and Task 2 and plan the subtasks accordingly

#### Roadmap for Task 1

- [x] Create the RESTful API
- [x] Expose the endpoint to retrieve albums from the iTunes Search API
- [x] Integrate the iTunes Search API into the back-end
- [ ] Learning Vue.js for the very first time and create a boilerplate project
- [ ] Create a Vue.js SPA Front-end displaying the album's names and thumbnails in a grid
- [ ] Create a filtering functionaly using a search box (without API requests)
- [ ] Add Unit Testing to the task 1 and written explanations of the technical decissions
- [ ] Learn about Vue.js Unit Testing and Add It to the project

#### Roadmap for Task 2

- [ ] Add written explanations/justifications (take a look to Task 2 / Step 1)
- [ ] Refactor the code accordingly

## Problems faced during the challenge

1. I **never worked with Vue.js before so I have to learn enough quickly to meet the requirements** of this technical test. Useful resources:

- [Vue.js 2 Documentation](https://vuejs.org/v2/guide/)
- [Vue.js 3 Documentation](https://v3.vuejs.org/guide/introduction.html)
- [TraversyMedia's Vue.js Crash Course](https://www.youtube.com/watch?v=qZXt1Aom3Cs).

## Next Potential Steps

- Add Continuous Integration to the API
- Deploy the API in AWS Lambda using Serverless Framework
- Implement Vue Router
- Implement Vue State Management
- Implement Multiple Artists Search bar
- Further might be considerated along the road

---

---

## Challenge Description:

Full Stack JavaScript Technical Challenge
In order to be considered for the position, you must complete the following two tasks.
Note:

1. These tasks should take no longer than a few hours. If you are unsure of anything
   being asked, feel free to get in touch and ask us questions.
2. Note that your first task must take into consideration unitTesting with relevant use
   cases
3. The 2nd task needs to be backed up with written explanations/justifications
4. Make sure you upload results to your GitHub account and send us URL to allow us
   review the results

---

### Task 1: Coding Challenge

#### Prerequisites

Please note that this will require JavaScript, Express.js and Vue.js knowledge, as well as an
understanding of REST APIs.
You will also need to have Node.js installed to complete this task.

#### Steps

1. Create a repository on Github for the task.
2. Create an Express.js app that accomplishes the following:
   a. Connects to the iTunes Search API: https://tinyurl.com/itunes-search-api
   b. Pulls back a list of albums for a specified artist
   c. Filters the results so there are no duplicate albums (based on album name)
   d. Serves the filtered results to the front-end via a route
3. Create a Vue.js app that accomplishes the following:
   a. Makes an API request to the above route to fetch the albums
   b. Displays the albums (as thumbnail & title) in a grid
   c. Has a live search box to filter (on client-side) the currently displayed albums
4. Create unit tests as appropriate, with the testing framework of your choice.

#### But wait…

We are looking for someone who not only completes a project to the specified requirements
but also makes use of the newest technologies as well as bringing new ideas to a project. So
feel free to add in anything that you would like to share with us during the next stage of the
interview process.

---

### Task 2: Analysis Challenge

#### Prerequisites

Please note that this will require JavaScript, Express.js and Mongoose knowledge, as well
as an understanding of REST APIs and best Node.js development practices.

#### Overview

Below is a Node.js function that a developer has written. It is an express middleware that
processes users ' invitations to use private shops.

- req and res are the express request and response objects
- superagent is a module that makes http requests and is on npm
- "User" and "Shop" are mongoose models

#### Step 1

Analyse the function below and provide answers to the following questions:

- What do you think is wrong with the code, if anything?
- Can you see any potential problems that could lead to exceptions
- How would you refactor this code to:
  - Make it easier to read
  - Increase code reusability
  - Improve the stability of the system
  - Improve the testability of the code
- How might you use the latest JavaScript features to refactor the code?

#### Step 2

Provide a sample refactor with changes and improvements you might make. The refactored
code does not have to be executable; it will only be used for discussion.

Once both tasks are complete...
Commit and push your code from Task 1 and your analysis from Task 2 to your new
repository. Then send us a link, we will review and get back to you.

Good luck!

#### Task 2 Code Snippet

```Node

exports.inviteUser = function(req, res) {
var invitationBody = req.body;
var shopId = req.params.shopId;
var authUrl = "https://url.to.auth.system.com/invitation";
superagent
  .post(authUrl)
  .send(invitationBody)
  .end(function(err, invitationResponse) {
      if (invitationResponse.status === 201) {
         User.findOneAndUpdate({
            authId: invitationResponse.body.authId
         }, {
            authId: invitationResponse.body.authId,
            email: invitationBody.email
         }, {
            upsert: true,
            new: true
         }, function(err, createdUser) {
            Shop.findById(shopId).exec(function(err, shop) {
               if (err || !shop) {
                  return res.status(500).send(err || { message: 'No shop found' });
               }
               if (shop.invitations.indexOf(invitationResponse.body.invitationId)) {
                  shop.invitations.push(invitationResponse.body.invitationId);
               }
               if (shop.users.indexOf(createdUser.\_id) === -1) {
                  shop.users.push(createdUser);
               }
               shop.save();
            });
         });
      } else if (invitationResponse.status === 200) {
         res.status(400).json({
            error: true,
            message: 'User already invited to this shop'
         });
         return;
      }
      res.json(invitationResponse);
   });
};
```
