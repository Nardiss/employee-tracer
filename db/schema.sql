DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

-- Department Table

CREATE TABLE departments (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);
-- Roles Table

CREATE TABLE roles (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  job_title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INTEGER,
  
  CONSTRAINT fk_rolesdepartment
  FOREIGN KEY (department_id)
  REFERENCES departments(id)
);

-- Employee Table

CREATE TABLE employees (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER,
  manager_id INTEGER, 

  CONSTRAINT fk_empldepartment
  FOREIGN KEY (role_id) 
  REFERENCES roles(id)
);