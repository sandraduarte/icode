var mysql = require('mysql');
//var prompt = require('prompt');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bamazon_db'
});
 
connection.connect();



function custOrder(){
listProducts();
//prompt customer to enter ID of which product they want and qty//
//productOrder();
//check database to make sure product is in stock
}

function listProducts(){
//connects to Database and prints out list of products and their IDs//
connection.query('SELECT * FROM products', function(err, res){
	for (var i = 0; i < res.length; i++) {
		console.log(res[i].name + ' | Product ID: ' + res[i].id + ' | Price: ' + res[i].price);
	};
});
}

function productOrder(){
	inquirer.prompt([{
    name: "prodid",
    message: "Which product would you like to purchase? (Enter Product ID): "
}]).then(function(answers){
	console.log(answers.prodid);
});
}

function quantityCheck(){
//hard coding quantities to run a check//
	var customOrder = "1";
	var customQty = 19;
//checks the qty and price in database for the id the user picked//	
	connection.query('SELECT quantity,price FROM products WHERE ?', {
    id: customOrder
}, function(err, res){
	var inStock = parseInt(res[0].quantity);
	var price = parseFloat(res[0].price);
//check if qty is available in our database//
	if(customQty > inStock){
		console.log("Insufficient Quanity");
	} else {
		console.log("Thank you for your order!");
		cost = customQty * price;
		total = parseFloat((cost).toFixed(2));
		console.log("Your total will be: " + total);
		var newStock = inStock - customQty;
		}
	});
};		

function updateStock(qty,id){
		connection.query('UPDATE products SET ? WHERE ?', [{
		quantity: qty
		}, {
	    id: id
		}], function(err, res) {console.log("updated!" + res)});	
}

connection.end();