# E Leaning and Exam Management System
This repository hosts an ongoing e-learning and exam management system project. Using Python Django REST Framework for backend and ReactJS Bootstrap for frontend, it facilitates course management, exams, and student progress tracking. It employs HTML for structure and supports SQLite/MySQL for databases.


#E learning and exam management System by using django and reactjs

Features
============================
- Website
 - Explore Courses according to category
 - Search Courses with keyword
 - About Us Page
 - Contact Us Page
 - FAQ Page
 - Support
 - Join as Student and enroll in course
 - Join as Teacher and upload content
============================

- Teacher Panel
 - Login/Register/OTP verify via email
 - ForgetPassword/ChangePasword/
 - Profile/Social Accounts
 - Send message to Enrolled Student (Individually Or All)
 - Category CRUD
 - Upload content according to category
 - Upload study material according to course
 - Can see the total enrolled students and their progress
 - Count Total views of content
============================
- Student Panel
 - Login/Register/OTP verify via email
 - ForgetPassword/ChangePasword/Profile
 - Enrolled Courses
 - View the profile of content creator
 - Send message to Content Creators (Individually Or All)
============================
- Admin Panel
 - Manage everything
 - Search anything
 - Add/Update/Delete Any Content
 - Enable disable any course, student, or teacher

why we made a virual environment : 	
because that otherwise that cause to dependancy crash. 

## for linux distro 
#### start the virual env 
source ./env/bin/activate
#### run the devilbox server 
# open the directory 

cd devilbox/devilbox
sudo docker-compose up -d
#### turn off the devilbox server 
sudo docker-compose down
Command 1 : to install python virtual environment platform.
pip install virtualenv


Commmand 2: create a new virtual environment in python. 
py -m venv env

# for linux distro 
python3  -m venv env

# env = name of the environment
Commmand 3: activate the virual environment : 
.\winenv\Scripts\activate

Commmand 4: install django framework in the environment. (run this is same dir) 
pip install django

# can be check successful installation by using the command django-admin
create project in  django 
django-admin startproject lms_api

# lms_api is the name of the project 
open the "lms_api" directory or [project name]
cd lms_api
Command 5 : Create the app in the empty project 
py manage.py startapp main
Command 6 : run the django server from the project 
py manage.py runserver
now open the cmd from the exact location from file explorer, and

** django comes with default submodels: which uses sqlite by default.  
migrate the data models from mysqlite database, to migrate data model use this command. 
Command 7 : migrate data models from mysql database
py manage.py migrate
**django comes with default user and group model we need to create a superuser account
 which can manage the framework
this will create a user which as all over the other parties 
Reset password of superuser account django
Command 8: Create a superuser account
reset password of a superuser account django
py manage.py createsuperuser

#superuser details.

username : admin
email : mudithaid@outlook.com
password : pass@123
after the successful message : run the server bu using the run command. 

Command 8 : run the django framwork server
py manage.py runserver
log in to the system by using the addresss which shown in the cmd. and you're done. use the password that you entered to the account to login in the system. 
2. Connect Django with MySQL Database. 
in here this change the data model to the mySQL to proceed in this, MySQL (phpmyadmin) should have to be installed
config settings py file to set the mysql as the default database handler.

go to the 'DATABASES' section in the settings.py file and comment the exisiting code and paste this. 

'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'django_lms',
        'USER': 'root',
        'PASSWORD':'',
        'HOST':'localhost',
        'PORT':'3306',
    }
create a dababase name as 'dgango_lms' in this case. in phpmyadmin ui.
install mysql client in the django project.
pip install mysqlclient
mgirate the project by using the migrate command (cmd7) and run the server by using runserver command.
- now refresh the mysql db and look for the tables that newly created in the mysqlite database.
3. Create the database structure and migrate.
in here, we use the main folder in the ims_api project (the app folder)
install django rest framwork in the environment.
run this commamd in the environment 

pip install djangorestframework
add the app to the list of installed apps in main app

INSTALLED_APPS = [
    ##apps installed by the user
    'main','rest_framework',
    ###
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
since the fronemnd is using the react, need to create an API usihch using the json type formt.

django rest framework transfers the models to json type, by serilaizer. in order to do that we need to create an serializer class by using the rest framework.
### how to post delete and update data by using the rest framework.
for here we use class based views. instead of using the get post method. in the class based views, there are 2 classes that we are going to use. 

##views.py lms_api/main

#ListCreateAPIView = for viewing and listing the data,

class TeacherList(generics.ListCreateAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer

    #this line is for get authentication before accessing rest framework API
    permission_classes =[permissions.IsAuthenticated]

#RetrieveUpdateDestroyAPIView =for update delete operations.

class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer

     #this line is for get authentication before accessing rest framework API
    permission_classes =[permissions.IsAuthenticated]
### creating an access token as a access method
apart from the computer, as for authentication way, access tokens are being used. to get the access tokens, 
command for generate access token 
python manage.py drf_create_token -r admin

-r = recreate 
admin == username

the generated token is :
685a5d81c3c94cd0a4de7511edc021ff152ed768 : winenv

26b70d605b255e351b293739f264beb59ca418a0 : linux env

### Install ReactJS for Front end 

video 8
to be install ReactJS, node must be installed. jsut download the setup from the web and simply install node. 

 a successful installation can be check by entering "node" command. 


create-react-app@5.0.1 #install create react app in node. 

for create the app, type lms_frontend
npx create-react-app lms_frontend

then open the lms_frontend directory
cd lms_frontend
start the project.
npm start
## # install the react router dom 
