# CS_4398_5394_Project

## Run Locally (Mac)

### Pre-requisites

* [Mongodb](https://www.mongodb.com/) 

### Installation 

1. Clone the repository
2. create a new virtual environment to install all python dependencies
    
    `$ cd schedule_software_Proj` 
    `$ cd backend` 
    `$ virtualenv env` 
    `$ python3 -m env env`  
    `$ source env/bin/activate`   
    `$ pip3 install django djangorestframework` 
    `$ python -m pip install django-cors-headers`      
    `$ python3 manage.py makemigrations` // if we make any model changes, to commit them we need to run this command 
    `$ python3 manage.py migrate` // migrate the change 
    `$ python3 manage.py createsuperserver`
    `$ python3 manage.py runserver` // to start the server 

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
   


