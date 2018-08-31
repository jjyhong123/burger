DROP DATABASE IF EXISTS hdfgrl1xr8bq4rrl;

CREATE DATABASE hdfgrl1xr8bq4rrl;

USE hdfgrl1xr8bq4rrl;

CREATE TABLE burgers
(
	id int not null auto_increment,
    burger_name varchar(250) not null,
    devoured boolean default false,
    primary key (id)
);
    