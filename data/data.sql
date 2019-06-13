-- 
-- psql "postgres://graphshop:graphshop@127.0.0.1:5432/graphshop" < data.sql
--    

CREATE SCHEMA app_public;

CREATE TABLE app_public.product (
        id              SERIAL PRIMARY KEY,
        title           TEXT,
        description     TEXT,
        image_url       TEXT,
        price           MONEY
);
       
CREATE TABLE app_public.order (
        id		SERIAL PRIMARY KEY,
        email		TEXT,
        products        JSONB
);

INSERT INTO app_public.product (title,description,price,image_url) 
VALUES ('Ferrari','Emozione! Viva Italia!',400000, 'ferrari.jpg');

INSERT INTO app_public.product (title,description,price,image_url) 
VALUES ('BMW','Made for German Autobahn',80000, 'bmw.jpg');

INSERT INTO app_public.product (title,description,price,image_url) 
VALUES ('Horse','Excellent for offroad use',5100, 'horse.jpg');

INSERT INTO app_public.product (title,description,price,image_url) 
VALUES ('Lorem 1','ispum dolor',9991, 'grey.jpg');

INSERT INTO app_public.product (title,description,price,image_url) 
VALUES ('Lorem 2','sit amet',9992, 'grey.jpg');

