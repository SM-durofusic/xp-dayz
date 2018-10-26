# Headless Wordpress with React on front end

Project built on XP day @ Searchmetrics (25. October 2018)

Simple demonstration of how you can use Wordpress without using Wordpress themes and knowing HTML?

## How its done?

Due to Wordpress being constantly updated, folks at Wordpress created an official plugin where Wordpress outputs all the info to REST API. But some people created a plugin to replace that REST API with GraphQL.

WIth Wordpress handling all the data on the backend, on the frontend everything is displayed using ReactJS.

To go out of the comfort zone; to connect to the GraphQL we are using Apollo Client, and to handle state globally we are using React Context.

For stying we are using Glamor.

## Technologies used:

Backend

- Wordpress
- Wordpress GraphQL Plugin
- Wordpress GraphiQL Plugin

Frontend

- ReactJS
- React Context
- Apollo Client
- Glamor

## How to use

    git clone https://github.com/SM-durofusic/xp-dayz.git
    cd xp-day
    yarn
    yarn start
