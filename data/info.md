Overview
========
This is a demo shop using
- postgres
- react
- graphql via postgraphile
- apollo

functions:
- list products (title, description, price, image)
- pagination
- sort (price/alphabetical)
- add to cart
- place order (email and full products as json)
- responsive via flexbox

data:
- table app_public.product
- table app_public.order

system:
- npm >6.8
- postgres > 9.6 

Setup
=====
1. clone code
2. create database, tables, test data
3. install and start postgraphile

Step 1 - Clone Code
===================
git clone https://github.com/byteone0/graphql-shop-demo.git
cd graphql-shop-demo.git
npm i
npm start
-> http://localhost:3000/  

Step 2 - Database
=================
as user postgres (or whatever your db admin user is):
 
   psql < create_user_and_database.sql

as normal user (no specific account):

   psql "postgres://graphshop:graphshop@127.0.0.1:5432/graphshop" < data.sql

Step 3 - Postgraphile
=====================

install
-------
npm install -g postgraphile

run
---
postgraphile -c "postgres://graphshop:graphshop@127.0.0.1:5432/graphshop" --schema app_public --watch --cors

The interactive IDE can be found under:

	http://localhost:5000/graphiql


CLEAN UP
========
drobdb graphshop
dropuser graphshop
npm uninstall -g postgraphile
