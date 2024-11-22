l. Take a look at the project structure

2. Two files index.html and secrete.html
	1. node solution.js
	2. npm i
	password : ILoveProgramming 
 

    Explaination 
    ----------------------
3.
    1.  import express and bodyParser
        import path and url : To get the directory name
	
	2. create the app, set the port
  	3. variable to Authorize the user
	4. use bodyParser middleware to get hold of information html form
	5. Create own middleware passwordCheck next()--> to continue the flow of handlers
	6. middleware passwordCheck used first
	7. Two routes ->
		get routes homepage sends index.html
		user's input is store in "/check" using the post method
		handled inside the app.post() which say if authorized send to secret.html if not to home



