
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
                    });
        visit = function() {
            console.log('Enter (I) Do you know the animal by ID? We will visit that animal');
            console.log('Enter (N) Do you know the animal by name? We will visit that animal');
            console.log('Enter (A) Here is the count of the animals at all locations');
            console.log('Enter (C) Here is the count of all the animals in a city');
            console.log('Enter (O) Here is the count for all the animals in all locations by type');
            console.log('Enter (Q) Quit to the main menu');
            currentScope.visit();
            currentScope.view(currentScope)();

        view = function()   {
            return typeof input_scope[0]();
            var currentScope = input_scope;
            console.log("Choose what you would like to visit");
            prompt.get(['visit'], function(err, rows, fields) {
            if (err) throw err;)
            if result.visit === 'Q'
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
                console.log("Sorry didn't get that, come again?");
            currentScope.visit();
            currentScope.view(currentScope);

            type: 

        }  

    }    
        });
currentScope.menu();
currentScope.promptUser();
}

