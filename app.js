const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');
// import fetch from "node-fetch";

///////// Inquirer prompts questions to ask the user //////////
const employeeTracker = () => {
  inquirer
    .prompt([{
      name: 'menu',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role'
      ]
    }])

        ///// View /////
    .then((answers) => {
      switch (answers.menu) {
        case 'View all departments':
          viewDepartments();
          break;

        case 'View all roles':
          viewRoles();
          break;

        case 'View all employees':
          viewEmployee();
          break;
        ///// Add /////   
        case 'Add a department':
          addDepartment();
          break;

        case 'Add a role':
          addRole();
          break;

        case 'Add an employee':
          addEmployee();
          break;
        ///// Update /////
        case 'Update an employee role':
          updateEmployeeRole();
          break;
      }
    });
};


///////// Function displays department data ////////
    function viewDepartments() {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, rows) => {
        if (err) {
        console.log(err);
        return;
        };
        console.table(rows);
        employeeTracker();

    })
    }



 /////// Displays roles data //////
    function viewRoles() {
    const sql = `SELECT * FROM roles`;
    db.query(sql, (err, rows) => {
        if (err) {
        console.log(err);
        return;
        }
        console.table(rows);
        employeeTracker();

    })
    }


/////// Displays employee data ///////
    function viewEmployee() {
    const sql = `SELECT * FROM employees`;
    db.query(sql, (err, rows) => {
        if (err) {
        console.log(err);
        return;
        }
        console.table(rows);
        employeeTracker();
    })
    }


//////// function adds roles ////////
function addRole() {
  db.query("SELECT * FROM roles;", function(err,data) {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'role',
        message: 'What is the job title?'
      },
      {
        type: 'number',
        name: 'salary',
        message: 'What is the salary for this job title?'
      },
      {
        type: 'number',
        name: 'departmentId',
        message: 'Which is the department Id for the new role?',
      },
      

    ]).then(function (answer) {
      db.query(
        `INSERT INTO roles (job_title, salary, department_id)
        VALUES ("${answer.role}", "${answer.salary}", "${answer.departmentId}" );`,
        function (err, data) {
          if (err) {
            console.log(err);
            return;
          } else {
            console.log("New role added");
            viewRoles();
          }
        }
      );
    });
  } 
)}


    /////// Function adds a department ///////
    function addDepartment() {
    inquirer
        .prompt([{
        name: 'department',
        type: 'input',
        message: 'What department would you like to add?',
        }])
        .then(body = (response) => {
        const sql = `INSERT INTO departments (department_name) VALUES ('${response.department}');`;
        const param = [body.department];
        db.query(sql, param, (err, res) => {
            if (err) {
            res.status(400).json({
                error: err.message
            });
            return;
            }
            viewDepartments();
        });
    });
};


//////// Function adds an employee ////////
    function addEmployee () {
    inquirer
        .prompt([
        
        {
            name:'firstName',
            type: 'input',
            message: "Enter new employee's first name"
        },
        {
            name:'lastName',
            type: 'input',
            message: "Enter new employee's last name"
        },
        
        {
            name:'roleId',
            type: 'number',
            message: "Enter new employee's role id"
        },
        {
            name:'managerId',
            type: 'number',
            message: "Enter new employee's manager id"
        },

        ]).then(function (answer) {
        db.query(
            `INSERT INTO employees (first_name, last_name, role_id, manager_id)
            VALUES ("${answer.firstName}", "${answer.lastName}", "${answer.roleId}", "${answer.managerId}");`,
            function (err, data) {
            console.log("Employee added");
            }

        );
        viewEmployee();
        });
}


/////// Function for updating an employee's information ////////
function updateEmployeeRole() {
  db.query('SELECT * FROM employees;' , function(err,data) {
    inquirer
    .prompt ([
        {
        name: 'employee',
        type:'input',
        message: 'Enter the id of the employee would you like to update.'
        },
        {
        name: 'details',
        type:'list',
        message: 'Enter the data would you like to update?',
        choices: [
            'first_name',
            'last_name',
            'role_id',
            'manager_id'
        ],
        },
        {
        name: 'newData',
        type:'input',
        message: 'Enter the new value'
        }

    ]).then(function (answer) {
        const sql = 
        `UPDATE employees
        SET ${answer.details} = "${answer.newData}"
        WHERE id = ${answer.employee};`
        db.query(sql, function(err,data) {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Employee data has been updated");
            viewEmployee();
        }
        });
    });
    });
};

/////// Calls the function ///////
employeeTracker();