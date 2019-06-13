
-- run as admin user, usually 'postgres'

CREATE USER graphshop WITH PASSWORD 'graphshop';
ALTER USER graphshop WITH SUPERUSER;            -- only for testing, not for production
CREATE DATABASE graphshop WITH OWNER=graphshop;
