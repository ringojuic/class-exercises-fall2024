# Lab 5: Package Management Tutorial
Please complete the hands-on activities associated with this lab outlined in the <a href="https://csci338.github.io/fall2024/assignments/lab05" target="_blank">Lab 5 Instructions</a> (on the course website). When you're done, answer the following questions. Feel free to use Google / ChatGPT to help you think about these questions (but keep in mind that you'll need to know them for the midterm exam).

## Part 1. Operating System Package Managers
Answer the questions for either Homebrew or apt (depending on whether you're using Linux / WSL or Windows)
1. What is Homebrew / apt, and why is it useful?  
A package manager system used by Ubuntu.  

2. What does the `update` command do (either `brew update` or `apt-get update`)?  
Checks to see if there are any available updates for all installed packages.  

3. Where are the packages that are managed by Homebrew / apt stored on your local computer?
/root/  


## Part 2.
1. What is a python virtual environment?  
A seperate enviroment created to contain certain libraries.  

2. What is Poetry, and how is it different from other Python package managers like pip?  
Handles sub dependencies more cleanly.  

3. What happened when you issued the `poetry new poetry-demo` command?  
Created a new directory called 'poetry-demo' with beginner files of a poetry project.  

4. How do you run a python file using the poetry virtual environment?
poetry run python --name of file--  

5. What is the purpose of the `poetry.lock` file?  
Contains information about all the packages being used by the current project.  

## Part 3.
1. What are some of the things that `package.json` is used for?  
package.json stores information about the current project, as well as scripts that can be used while in the directory.  

2. Why wouldn't you want to check in the `node_modules` directory into GitHub?
node_modules contains the packages being used by the current project.  

