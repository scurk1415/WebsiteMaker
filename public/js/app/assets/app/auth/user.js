export var User = (function () {
    function User(email, password, firstName, lastName, role, solutions, allowed_solutions) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.solutions = solutions;
        this.allowed_solutions = allowed_solutions;
    }
    return User;
}());
