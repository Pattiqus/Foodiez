# myRecipe
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Description
myRecipe is an application in which users have the ability to post their favourite recipes online for peers and other culinary enthusiasts around the world.
Specificly the following can be added to each recipe post
- Title
- Ingrediants
- Steps
- Imagery
Additionally, users have the ability to view other users recipes and comment / rate them.

The application was written using JavaScript and includes the following technologies: 
- [Node.js](https://nodejs.org/en/) 
- [mysql2](https://www.npmjs.com/package/mysql2) 
- [Sequalize](https://sequelize.org/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Express](https://expressjs.com/)
- [BootSrap](https://getbootstrap.com/)
- [SemanticUI](https://semantic-ui.com/)
- # Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#tests)
# Installation
The following dependencies are necessary to run this application: 

- To run this application effectively, please have Node.js & mySQL installed on your computer, other required modules are bundled in the package.json file provided, by running “npm install” from the command prompt, these modules will be installed.
- Have your mySQL password on hand. To avoid any potential data breaches and security risks, ensure that the ```.gitignore``` file includes the ```.env``` Environment file as to not upload your sensitive information. Create a ```.env``` file with the below:

  ```DB_NAME = myRecipe_db ```<br>
  ```DB_USER = root```<br>
  ```DB_PASSWORD = yourPassword```

- yourPassword is the password which you have set for as the root user of mySQL on your local comptuter. 
- locate to ```/db``` and run the following command in your terminal ```mysql -u root -p```, you will then be prompted for you password.
- Type ```source schema.sql```, this will create your database. Then type ```quit``` to return to the terminal.
- Navigate to your root repository and run ```node server.js```.

# Usage
In order to use this application, please follow the link at the bottom of the page to the deployed site.

# License
This project is licensed under:
- [MIT](https://opensource.org/licenses/MIT)

# Contributing
Contributors: 

```
Pat Brown (Pattiqus)
Mohammed Mazahim (mazahim)
```
# Tests
To test this application please install the Jest package module.
# Screenshots

# Questions
If you have any qestions regrading the repository or the project please contact: 

<ul>
    <h3>Patrick Brown</h3>
    <li>GitHub:  <a href=https://github.com/pattiqus>pattiqus</a></li> 
    <li>Email: <a href=mailto:Patticus.tv@gmail.com>Patticus.tv@gmail.com</a></li>
    <li>LinkedIn: <a href=https://www.linkedin.com/in/patrick-brown-52553410a>Patrick Brown</a></li>
</ul>
<ul>
    <h3>Mohammed Mazahim</h3>
    <li>GitHub:  <a href=https://github.com/mazamim>Mazamim</a></li> 
    <li>Email: <a href=mazamim91@gmail.com>mazamim91@gmail.com</a></li>
    <li>LinkedIn: <a href=https://www.linkedin.com/in/mohammed-mazahim-8a7583163>Mohammed Mazahim</a></li>
</ul>

# Links
- [Source-code](https://github.com/Pattiqus/myRecipe)
- [Deployed](https://my-recipe-pbmm.herokuapp.com/)