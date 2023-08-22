# WIP NOTES 
This project compiles but there are still runtime errors due to circular dependences and the backend is not built. 

Note to self, fix the circular dependences after working on the backend. Learning objectives has been accompilished regardless for react 6 , JWT , redux.

Note redux might be outdated but it is still used by citi. 

This project is references a react 5 but is built in react 6. Some of the changes are below. 

# Bugs 
Root cause: exporting and importing for services. 
Redux Cannot access '__WEBPACK_DEFAULT_EXPORT__' before initialization
https://stackoverflow.com/questions/72543593/redux-cannot-access-webpack-default-export-before-initialization

Note: the file causing the issue is not yet found. Fix later. 


# React Frontend Learnings

# Event Bus
Event bus is a router that receives events and delivers them to zero or more destinations, or targets.

Use case: routes many sources to many targets 

Event bus is just SQS + SNS but betteR?

Events –  similar to messages in the context of SNS and SQS, just with a fancier name. They consist of JSON blobs that describes the source and payload of the event. Events can also be “scheduled” to run at periodic intervals using a cron expression. This is useful for those of you looking to perform timed batch jobs regularly at a certain time of day.

# `export const` vs. `export default` in ES6
The only difference is that using default you have to be strict with variable names that match the export class. 
https://stackoverflow.com/questions/33611812/export-const-vs-export-default-in-es6


# Changes to react 6 

# 'Switch' React Router Dom -> Routes

# Redirect ---  
# -> {user && <Navigate to="/dashboard" replace={true} />}


# Comments 
React debugging is lacking 