# Build Yearn School Learning Platform

# Setting Up Backend

## Install express, graphql and express-graphql packages

Run `npm i express express-graphql graphql mongoose cors colors`

## Install dependencies

Run `npm i -D nodemon dotenv`

## Start the server

In the root directory, run `npm run dev`

## Add Instrutor

`mutation{ addInstructor(firstName:"Solomon",middleName:"Peter",lastName:"Nmsoma",gender:male,dateOfBirth:"10/10/1998",address:"Lagos, Nigeria",email:"solomon.p@gmail.com",password:"password123",phone:"+234767890990",nationality:"Nigeria",education:"Bachelor Degree",status:approved,courseId:"62c0d8755de3bf0db2dc573a"){ id firstName middleName lastName gender dateOfBirth address email password phone nationality education status courseId{ id name duration description status } } }`

## Query Instructors

`{ instructors{ id firstName middleName lastName gender dateOfBirth address email phone nationality education status courseId{ id name duration description status } } }`

## Add New Course

`mutation{ addCourse(name:"Introduction to JavaScript",description:"Learn the essential knowledge of Javascirpt", duration:"24 hours"){ id name description duration status } }`

## Update the Course

`mutation{ updateCourse(id: "62d0167a65a8a7670fed3319",name:"Introduction to JavaScript",description:"Learn the essential knowledge of Javascirpt", duration:"5 hours",status:approved){ id name description duration status } }`

## Delete Course

`mutation{ deletCourse(id:"62d0192765a8a7670fed3321"){ id name } }`

## Add New Students

`mutation{ addStudent(firstName:"Apiyo",middleName:"Joyce",lastName:"Everlyn",email:"apiyo@gmail.com",password:"password123",phone:"077602040506",gender:female,dateOfBirth:"12 Jul 2000",emmergencyContactName:"Okello Tonny",emmergencyContactRelation:"Brother", emmergencyContactPhoneNumber:"0789102040",street:"Olya Road",city:"Gulu",zipcode:"000",state:"Northern",country:"Uganda",githubUsername:"apiyo",twitterUsername:"apiyo",linkedInURL:"https://www.linkedin.com/apiyo",courseId:"62c0d8755de3bf0db2dc573a"){ id firstName middleName lastName email password phone gender dateOfBirth emmergencyContactName emmergencyContactRelation emmergencyContactPhoneNumber street city zipcode state country githubUsername twitterUsername linkedInURL courseId{ name description duration status } } }`

## Authors

1. Ojok Simon Peter [simonpeter.oj@gmail.com]
2. Nmesoma Solomon Peter [nmesomasolo2809@gmail.com]
