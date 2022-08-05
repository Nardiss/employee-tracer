-- Loads table with data

INSERT INTO departments (department_name)
VALUES
    ('Design'),
    ('Marketing'),
    ('Software Development'),
    ('Sales'),
    ('Accounting');


INSERT INTO roles (job_title, salary, department_id)
VALUES
    ('Legal assistants', 55000, 5),
    ('Sales Executive', 65000, 4 ),
    ('Design Team Lead', 70000, 1),
    ('Marketing analyst', 70000, 2),
    ('Marketing consultant', 50000, 2),
    ('Chief marketing officer', 150000, 2),
    ('Engineering manager', 100000, 3),
    ('Engineering Associate', 75000, 3),
    ('Accounting Clerk', 50000, 5),
    ('Design Analyst', 45000, 1);


INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES
  (1, 'Vivian', 'Walker', 12, NULL),
  (2, 'Sabir', 'Moorer', 22, NULL),
  (3, 'Caesar', 'Lopez', 14, 3),
  (4, 'Katrina', 'Bey', 21, 2),
  (5, 'Donna', 'Summers', 13, NULL),
  (6, 'Edward', 'Bellamy', 25 , 3),
  (7, 'Melissa', 'Holloway', 24, 4),
  (8, 'Octavia', 'Brown', 17, 2),
  (9, 'Thurgood', 'Ali', 18, NULL),
  (10, 'Dezs', 'Walnuts', 28, 2);