## Understanding Check - AJAX and Front End Routing!

Hello! This is a small exercise that should take you about 30 minutes to an hour. It's possible that you'll get stuck and it will take longer. If that's the case, don't get frustrated! Take it one step at a time. It's a bit open ended.

The purpose is to check your understanding of:
  - Hooking up forms to your React Application
  - Using the data from forms to create new critters in our database
  - Adding the new critter to our state and render it on the page

We have a site that we want to use to display cute dogs, cats, and dragons! We already have a dogs page, a cats page, and a dragons page, but no way to add new critters! We want to create a form component that we can use to create a new critter in the database. You'll need to make a new Express route for this!

NOTE: There are updates to the starting point! There is now a simple database that is holding our critters information. We only have a single model, Critter, but each critter has a type: 'dog', 'cat', or 'dragon'. We also have a class method that will help us easily fetch all critters of a certain type.

In addition, our state is going to hold our current displayed page: 'dogs', 'cats', or 'snakes'. Alternatively, we could have use a `componentDidMount` component lifecycle hook to get ALL of the critters and held them in our state, and simply rendered some of them at a type depending on their type.

To start, run:

```
$ createdb critters
$ npm install
$ npm start
```

You will be writing code in the client/components directory AND in server/app.js. You will not have to create any new components or files. However, you are welcome to add styles and other features if you want!  All your express routes are written for you. There is no database, the data is all mocked out.

Additional directions can be found in `client/components/Main.jsx`.
