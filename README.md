# Customer-to-Customer Store
A ReactJs Application using Express and REST APIs

#Setup and Launch
```
cd client
npm install
cd ..
npm install
npmstart

```


# Application Desceription
CTC is a online store application. A user can browse all products and filter them by category. 
The application has CRUD funcitonality which means that a logged in user can also create, delete and update products. 
If the user likes a certain product, it can be added to Favourites and on the "Favourites" page all saved products can be previewed.


# Authentication and Authorization
The application has a homepage for guest users and one for logged-in users. A user cannot see any products until he is logged in. On the guest users page, there are only the latest products. The homepage for the logged-in users contains all products and a category switcher. 
By clicking on the "View" button of a certain post, a user is redirected to the "Details" page where he can save the product. And also if he is the creator of the product, he can edit or delete it.

# Error Handling and Validation
When registering a new user, the application checks if the username or the email are already taken and also if the password matches the confirmation password. If there is an error the user receives a notification on the top of the page with a message which describes the error.
When logging in, the application checks if the provided credentials match a user from the database, and if there are no errors, he is being redirected to the homepage. If an error occurs, the user receives a notification that contains the error message.

When logging in, the application checks if the provided credentials match a user from the database and if there are no errors, he is being redirected to the homepage.
If an error occurs, the user recieves a notification which contains the error message.

# Technologies
The CTC-Store Application runs on a NodeJs server written in ExpressJs. It uses APIs to connect to the database. The frontend part runs on React.

