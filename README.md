# RES-App

Requirements:

1. Git - https://git-scm.com/
2. VS Code
3. Visual Studio 2015 or 2017 w/ local sql server
4. Node.js
5. Heroku (for deployment) https://devcenter.heroku.com/articles/heroku-cli#download-and-install

Testing the application

Way # 1 (Temporary as Back end hosting is still local)

1. Make sure you have git installed.
2. Open terminal and cd to the location you want the project source code to be located.
3. Type git clone https://github.com/Mad-Mack/RES-App.git
4. In the project source folder, open res_api_aspnetcore folder.
5. Open res_api_aspnetcore.sln or res_api_aspnetcore_csproj in visual studio.
6. (You will only do this once, only if db is not yet existing) Open visual studio package manager console and type Update-Database and hit enter.
7. Press F5 to run the backend API
8. Open the web app at http://realestateseller.herokuapp.com and start testing!

Way # 2 (For editing source code)

1. Make sure you have git installed.
2. Open terminal and cd to the location you want the project source code to be located.
3. Type git clone https://github.com/Mad-Mack/RES-App.git
4. In the project source folder, open res-spa-react.
5. Open folder in vs code.
6. Type npm install in vs code's built in terminal.
7. Once all packages are installed, type npm start to start the web app. This should automatically open the browser at localhost:3000
8. In the project source folder, open res_api_aspnetcore folder.
9. Open res_api_aspnetcore.sln or res_api_aspnetcore_csproj in visual studio.
10.   (You will only do this once, only if db is not yet existing) Open visual studio package manager console and type Update-Database and hit enter.
11.   Press F5 to run the backend API
12.   Go back to the browser and start testing!

Pushing to github

(Make sure you have configured your git and github settings)

1. Open terminal on source project folder
2. Add all the files to staging by typing git add . (include the period)
3. type git commit -m <Message> (Replace message with what did you change)
4. type git push origin master
5. If you are not logged in, a github window will open prompting you to login, so just login.

Pushing to Heroku
\*\*\*\*Will update once I fix the issue of react git settings not being coned
