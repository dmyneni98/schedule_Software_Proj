# CS_4398_5394_Project

## Run Locally (Mac)

### Pre-requisites

* [Mongodb](https://www.mongodb.com/) 

### Installation 

1. Clone the repository
2. create a new virtual environment to install all python dependencies
    
    `$ cd schedule_software_Proj`   
    `$ python3 -m venv venv`  
    `$ source venv/bin/activate`   
    `$ pip install django`      
    `$ pip install -r requirements.txt`

3. Making sure react runs on your local machine 
Delete the /node_modules directory and the package-lock.json file using the rm command:

    '$ rm -rf node_modules'
    '$ rm -rf package-lock.json'

=> Install react-scripts using the following command:

    '$ npm install react-scripts'

=> Install the dependencies using the following command:

    '$ npm install'

# Note: To address all issues possible (including breaking changes), run:
    '$ npm audit fix --force'

=> Start the local server by running the following command:
    '$ npm run start'

4. Verify that react works 
   go to http://localhost:3000


4. Verify django test site works

    `$ python manage.py runserver`

   go to http://localhost:8000
   


