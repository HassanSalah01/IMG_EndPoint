# Udacity_image_pro_Api

### Concept :

The purpose of this project is to Create a simple Api That takes 
    1.FileName
    2.Width
    3.height 
and according To these Arguments we need To scale and resize The picture Yet we need To be Sure That we Are not wasting Any bandwidth or speed And this will be achieved With caching 

### first you need to validate The Users inputs 
### second we need to check for Thumbnail folder And If it is not Created we need to create it
### we need To check if the picture Desired already been cached 
### If The picture is not located in the Thumbnail Folder we need To resize it and save it back in the Thumbnail Folder for future Cashing 

## This Project Is build With :
    1) nodejs
    2) Express
    3) typeScript
    4) Sharp 
    5) fs-extra

## For styling We are using :
    1) prettier 
    2) eslint 

## For testing purposes We Are using :
    1) jasmine
    2) supertest

## For running our server On a local-host We Are using:
    2) nodemoon

# How To Start The server:

## 1 ) First you need To Download all dependencies
     you can Use npm install

##  2)To run The server Your can use 
    npm run start
### This will run NodeMon as a live server


## 3) To use Eslint And prettier You can run :

### npm run lint 
    For error and mistake Checks

### npm run lint:fix
    For Quick Easy suggested Fix

### npm run format
    For indentation and code quality using prettier 

## 4) to transpile and compile The code 

###  npm run build 
    To transpile Your typeScript code Into dist Folder 

### npm run prod
    To Run and compile your Js File 

## 5) for Testing :

##  npm run jasmine 
    To test Your Test Cases and EndPoints

##  npm run test 
    For transpiling TypeScript and run jasmine With supertest

# Our ENDPOINTS :

## A) if your want just to call Normal Images You can Use 

# api/image/placeholder?filename=<Image-name>;
###  Example:

    api/image/placeholder?filename=encenadaport
    api/image/placeholder?filename=fjord
    api/image/placeholder?filename=icelandwaterfall
    api/image/placeholder?filename=palmtunner
    api/image/placeholder?filename=santamonica

## B) if you Want To re-size and certain Picture 

# api/image?filename=<Image-name>&width=<Width>&height<height>

### Example:
    api/image?filename=encenadaport&Width=300&height=400
    api/image?filename=santamonica&Width=300&height=400
    api/image?filename=palmtunner&Width=300&height=400
    api/image?filename=icelandwaterfall&Width=300&height=400
    api/image?filename=fjord&Width=300&height=400

## The collection Of Available Picture are as 

## The collection Of Availble Picture are as Follow :
    1: encenadapot
    2:fjord
    3:icelandwaterfall
    4:palmtunner
    5:santamonica
    


