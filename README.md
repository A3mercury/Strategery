## Strategery Expense Tracking Web Application (WIP)
A project cost management web app. The goal of this app is to keep track of expenses involved with a home business. Keeping track of small business expenses like materials, reoccurring payments, and investments as well as sales and taxes after selling products is the best way to manage profits and adjust your expenses accordingly. 

## What makes this different from other budgeting/expense tracking software?
Most budgeting apps let you set aside money at the start of a period and tracks how you spend that budgeted money. While this is a useful way to keep track of money, I want to focus on the expenses of a project. A project may be selling products over a certain period of time. For example, if someone wants to sell a craft on Etsy they will have to know how much to charge for the finished product. The profit at the end of the project needs to exceed the costs spent to create the product. 

## Features
* Includes basic authentication to save data.
* Solo or Teams.
    * Whenever you create an account, you will not be apart of a Team.
    * User should be able to create a new Team or join an existing Team via an invite.
    * 
* Manage multiple Projects.
* Add Units to Projects to describe what is being sold by the User. Units are the end products. 
    * Unit Items represent actual inventory sold and for what price. Say a User makes 10 items of a Unit (product), there will be 10 Unit Items created to represent each of those actual products.
Manage Purchases. This is the heart of the app. A Purchase represents expenses made on things that help the business. For example, someone making artisan cookies need tools such as kitchen equipment, consumable supplies like ingredients and piping bags, and any additional expenses that a User wants to keep track.
    * Setup reoccurring Purchases.
* Reporting and Analytics to show profit margins and a way to see what the User spends most on a Project.

## MVP
- [ ] Basic email + password authentication (Laravel Passport).
- [ ] **Teams**
    - [ ] Create new Team
    - [ ] Update Team as owner or admin
    - [ ] Delete Team as owner
    - [ ] Send Invite to email addresses
    - [ ] Join Team via email Invite
- [ ] **Projects**
    - [ ] Create new Project as solo (owner)
    - [ ] Create new Team Project as owner or admin
    - [ ] Update Project as owner or admin
    - [ ] Delete Project as owner
- [ ] **Units**
    - [ ] Add new Unit(s) to Project as Team member
    - [ ] Update Unit(s) as Team member
    - [ ] Delete Unit as owner or admin
    - [ ] Unit Items reflecting actual inventory count
- [ ] **Purchases**
    - [ ] Add new Purchase(s) to Project as Team member
    - [ ] Update Purchase(s) as Team member
    - [ ] Delete Purchase as owner or admin
- [ ] **Graphs and Reporting**
    - [ ] Dashboard
(WIP)

## Setup Instructions
(WIP)
