// TODO: Write code to define and export the Employee class
// Setting the Constructor
class Employee {
      constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
      return this.name;
    }
  
    getId() {
      return this.id;
    }
  
    getEmail() {
      return this.email;
    }
    getRole() {
      return "Employee";
    }
    printInfo() {
        console.log(`This Employee has ${this.role}`);
      }
}

  
  module.exports = Employee;