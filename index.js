
//HW now complete. See README.md for notes
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zoo_db'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    };
    console.log('connected as id ' + connection.threadId);
});

var prompt = require('prompt');
prompt.start();
prompt.message = "";

var zoo = {
        welcome: console.log("welcome to the Zoo and Friends App~!");
        menu: console.log(Enter(A) to add an animal to the zoo '\n'
            Enter(U) to update info on an animal '\n'
            Enter(V) to visit the animals '\n'
            Enter(D) to adopt an animal '\n'
            Enter(Q) to exit);
        add = function() {
            return typeof input_scope[0]();
            var currentScope = input_scope;
            console.log("To add an animal to the zoo please fill out the following form for us");
            prompt.get(['name', 'type', 'age'], function(err, result) {
                        connection.query(),
                            function(err, rows, fields) {
                                if (err) throw err;

                                for (var i = 0; i < rows.length; i++) {
                                    console.log(rows[i].name + " is " + rows[i].this + ".");
                                    // return start menu
                                }
                            }); visit = function() {
                        console.log('Enter (I) Do you know the animal by ID? We will visit that animal');
                        console.log('Enter (N) Do you know the animal by name? We will visit that animal');
                        console.log('Enter (A) Here is the count of the animals at all locations');
                        console.log('Enter (C) Here is the count of all the animals in a city');
                        console.log('Enter (O) Here is the count for all the animals in all locations by type');
                        console.log('Enter (Q) Quit to the main menu');
                        currentScope.visit();
                        currentScope.view(currentScope)();

                        view = function() {
                                return typeof input_scope[0]();
                                var currentScope = input_scope;
                                console.log("Choose what you would like to visit");
                                prompt.get(['visit'], function(err, rows, fields) {
                                            if (err) throw err;) if result.visit === 'Q'
                                        currentScope.menu();
                                        else if result.visit === "O"
                                        currentScope.type(input_scope);
                                        else if result.type === "I"
                                        currentScope.type(input_scope);
                                        else if result.animId === "N"
                                        currentScope.name(input_scope);
                                        else if result.name === "A"
                                        current.Scope.all(input_scope);
                                        else if result.all === "C"
                                        currentScope.care(input_scope);
                                        else
                                            console.log("Sorry didn't get that, come again?"); currentScope.visit(); currentScope.view(currentScope);

                                        type: function() {
                                            return typeof input_scope[0]();
                                            console.log('Enter animal type to find out how many animals there are of that type');
                                            prompt.get(['animal_type'], function(err, result, fields) {
                                                        connection.query("The number of animals is" + animal_type);
                                                        return to start.menu;
                                                        currentScope.menu();
                                                        currentScope.promptUser();

                                                        function care = input_scope;
                                                        var currentScope = input_scope;
                                                        console.log('Enter city name NY/SF');

                                                        prompt.get(['city_name'], function(err, result, fields) {
                                                                    connection.query()) currentScope.visit(); currentScope.view(currentScope);

                                                                function animId = () {
                                                                    return typeof input_scope[0]();
                                                                    currentScope = input_scope;
                                                                    console.log("Enter ID of animal to visit");
                                                                    prompt.get(['animal_id'], function(err, result, fields) {
                                                                            connection.query()
                                                                            currentScope.visit();
                                                                            currentScope.view(currentScope);
                                                                        )

                                                                        function name = () {
                                                                            return typeof input_scope[0]();
                                                                            currentScope = input_scope;
                                                                            console.log("Enter name of animal to visit");
                                                                            prompt.get(['name'], function(err, result, fields) {
                                                                                    connection.query()
                                                                                    currentScope.visit();
                                                                                    currentScope.view(currentScope);
                                                                                )

                                                                                function all = () {
                                                                                    return typeof input_scope[0]();
                                                                                    currentScope = input_scope;
                                                                                    console.log("The total animal count is" + all);
                                                                                    prompt.get(['all'], function(err, result, fields) {
                                                                                            connection.query()
                                                                                            currentScope.visit();
                                                                                            currentScope.view(currentScope);
                                                                                        )

                                                                                        update: function() {
                                                                                            return typeof input_scope[0]();
                                                                                            var currentScope = input_scope;
                                                                                            promt.get(['_', 'id', 'new_name', 'new_age', 'new_type', 'new_caretaker_id'], function(err, result, fields) {

                                                                                                    connection.query();
                                                                                                    currentScope.menu();
                                                                                                    currentScope.promptUser();
                                                                                                )

                                                                                                adopt: function() {
                                                                                                    var currentScope = input_scope;
                                                                                                    prompt.get(['animal_id'], function(err, result, fields) {
                                                                                                            connection.query();
                                                                                                            currentScope.visit();
                                                                                                            currentScope.view(currentScope);

                                                                                                            promptUser: function() {
                                                                                                                var self = this;
                                                                                                                prompt.get(['input'], function(err, result, fields) {
                                                                                                                        if result.visit === "Q"
                                                                                                                        self.exit();
                                                                                                                        else if result.visit == "A"
                                                                                                                        self.add(self);
                                                                                                                        else if result.animId == "V"
                                                                                                                        self.visit();
                                                                                                                        self.view(self);
                                                                                                                        else if result.name == "D"
                                                                                                                        self.adopt(self);
                                                                                                                        else console.log("Sorry, didn't get that, come again?");
                                                                                                                        exit: function() {
                                                                                                                            console.log("Thanks you for visiting us, goodbye");
                                                                                                                            process.exit();

                                                                                                                            open: function() {
                                                                                                                                this.welcome();
                                                                                                                                this.menu();
                                                                                                                                this.promptUser();

                                                                                                                                zoo.open();
                                                                                                                            }
                                                                                                                        }
                                                                                                                    )
                                                                                                                })
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }

                                                                                    }

                                                                                }
                                                                            }); currentScope.menu(); currentScope.promptUser();
                                                                    }