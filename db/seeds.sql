USE employees;

INSERT INTO department (name)
VALUES ('Operations');
INSERT INTO department (name)
VALUES ('Analystics');
INSERT INTO department (name)
VALUES ('Marketing');
INSERT INTO department (name)
VALUES ('Executive');

INSERT INTO role (title, salary, department_id)
VALUES ('General Manager', 1000000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ('Coach', 4000000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ('Team Lead Analyst', 12000000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ('Media Manager', 1250000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ('CEO', 250000000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Christiano', 'Ronaldo', 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Lionel', 'Messi', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Neymar', 'Jr', 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Andres', 'Iniesta', 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Kylian', 'Mbappe', 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Paul', 'Pogba', 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Robert', 'Lewandowski', 4, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Gareth', 'Bale', 1, 2);