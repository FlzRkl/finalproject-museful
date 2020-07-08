heroku status[staschek@cerebrum Final-Project]$ heroku status
Apps:      No known issues at this time.
Data:      No known issues at this time.
Tools:     No known issues at this time.
[staschek@cerebrum Final-Project]$ heroku pull
› Warning: pull is not a heroku command.
Did you mean kill? [y/n]:
› Error: Run heroku help for a list of available commands.
[staschek@cerebrum Final-Project]$ heroku kill
 ›   Error: Missing 1 required arg:
 ›   dyno
 ›   See more help with --help
[staschek@cerebrum Final-Project]$ heroku login
heroku: Press any key to open up the browser to login or q to exit:
Opening browser to https://cli-auth.heroku.com/auth/cli/browser/1c784e34-4450-4912-9f4e-50e9dfc41df9
Logging in... done
Logged in as staschek@protonmail.com
[staschek@cerebrum Final-Project]$ heroku status
Apps:      No known issues at this time.
Data:      No known issues at this time.
Tools:     No known issues at this time.
[staschek@cerebrum Final-Project]$ hheroku create museful --buildpack mars/create-react-app
bash: hheroku: Kommando nicht gefunden.
[staschek@cerebrum Final-Project]$ heroku create museful --buildpack mars/create-react-app 
Creating ⬢ museful... done
Setting buildpack to mars/create-react-app... done
https://museful.herokuapp.com/ | https://git.heroku.com/museful.git
[staschek@cerebrum Final-Project]$ Heroku create museful --buildpack https://github.com/mars/create-react-app-buildpack.git
bash: Heroku: Kommando nicht gefunden.
[staschek@cerebrum Final-Project]$ heroku create museful --buildpack https://github.com/mars/create-react-app-buildpack.git 
Creating ⬢ museful... done
Setting buildpack to https://github.com/mars/create-react-app-buildpack.git... done
https://museful.herokuapp.com/ | https://git.heroku.com/museful.git
[staschek@cerebrum Final-Project]$ git add .
[staschek@cerebrum Final-Project]\$ git commit -m 'start upload to heroku'
Auf Branch master
Ihr Branch ist auf demselben Stand wie 'origin/master'.

nichts zu committen, Arbeitsverzeichnis unverändert
[staschek@cerebrum Final-Project]$ git push heroku master
remote: !       No such app as boiling-hamlet-46658.
fatal: Repository 'https://git.heroku.com/boiling-hamlet-46658.git/' nicht gefunden.
[staschek@cerebrum Final-Project]$ git v-
git: 'v-' ist kein Git-Befehl. Siehe 'git --help'.

Die ähnlichsten Befehle sind
svn
var
[staschek@cerebrum Final-Project]$ heroku git: remote -a museful
 ›   Warning: git: is not a heroku command.
Did you mean kill? [y/n]: n
 ›   Error: Run heroku help git for a list of available commands.
[staschek@cerebrum Final-Project]$ heroku fork --from boiling-hamlet-46658 --to museful
› Warning: fork is not a heroku command.
Did you mean lock? [y/n]: y
› Error: Run heroku help for a list of available commands.
[staschek@cerebrum Final-Project]$ yheroku help
bash: yheroku: Kommando nicht gefunden.
[staschek@cerebrum Final-Project]$ heroku help
CLI to interact with Heroku

VERSION
heroku/7.42.2 linux-x64 node-v12.16.2

USAGE
\$ heroku [COMMAND]

COMMANDS
access manage user access to apps
addons tools and services for developing, extending, and operating your app
apps manage apps on Heroku
auth check 2fa status
authorizations OAuth authorizations
autocomplete display autocomplete installation instructions
buildpacks scripts used to compile apps
certs a topic for the ssl plugin
ci run an application test suite on Heroku
clients OAuth clients on the platform
config environment variables of apps
container Use containers to build and deploy Heroku apps
domains custom domains for apps
drains forward logs to syslog or HTTPS
features add/remove app features
git manage local git repository for app
help display help for heroku
keys add/remove account ssh keys
labs add/remove experimental features
local run Heroku app locally
logs display recent log output
maintenance enable/disable access to app
members manage organization members
notifications display notifications
orgs manage organizations
pg manage postgresql databases
pipelines manage pipelines
plugins list installed plugins
ps Client tools for Heroku Exec
psql open a psql shell to the database
redis manage heroku redis instances
regions list available regions for deployment
releases display the releases for an app
reviewapps manage reviewapps in pipelines
run run a one-off process inside a Heroku dyno
sessions OAuth sessions
spaces manage heroku private spaces
status status of the Heroku platform
teams manage teams
update update the Heroku CLI
webhooks list webhooks on an app

[staschek@cerebrum Final-Project]\$ heroku apps
=== staschek@protonmail.com Apps
museful

[staschek@cerebrum Final-Project]$ heroku remote museful
 ›   Warning: remote is not a heroku command.
Did you mean create? [y/n]: n
 ›   Error: Run heroku help for a list of available commands.
[staschek@cerebrum Final-Project]$ heroku git: remote -a museful
› Warning: git: is not a heroku command.
Did you mean kill? [y/n]:
› Error: Run heroku help git for a list of available commands.
[staschek@cerebrum Final-Project]$ heroku remote -v
 ›   Warning: remote is not a heroku command.
Did you mean create? [y/n]: 
Did you mean create? [y/n]: y
Creating ⬢ -v... !
 ▸    Name must start with a letter, end with a letter or digit and can only contain lowercase letters, digits, and dashes. Name is too short (minimum is 3 characters)
[staschek@cerebrum Final-Project]$ heroku apps
=== staschek@protonmail.com Apps
museful

[staschek@cerebrum Final-Project]$ git push heroku museful
error: Src-Refspec museful entspricht keiner Referenz.
error: Fehler beim Versenden einiger Referenzen nach 'https://git.heroku.com/boiling-hamlet-46658.git'
[staschek@cerebrum Final-Project]$ heroku git:remote -a museful
set git remote heroku to https://git.heroku.com/museful.git
[staschek@cerebrum Final-Project]\$ git push heroku master
Objekte aufzählen: 1472, Fertig.
Zähle Objekte: 100% (1472/1472), Fertig.
Delta-Kompression verwendet bis zu 4 Threads.
Komprimiere Objekte: 100% (1107/1107), Fertig.
Schreibe Objekte: 100% (1472/1472), 854.62 KiB | 5.09 MiB/s, Fertig.
Gesamt 1472 (Delta 788), Wiederverwendet 568 (Delta 227), Pack wiederverwendet 0
remote: Compressing source files... done.
remote: Building source:
remote:
remote: -----> React.js (create-react-app) multi app detected
remote: =====> Downloading Buildpack: https://github.com/heroku/heroku-buildpack-multi.git
remote: =====> Detected Framework: Multipack
remote: =====> Downloading Buildpack: https://github.com/heroku/heroku-buildpack-nodejs.git
remote: =====> Detected Framework: Node.js
remote:  
remote: -----> Creating runtime environment
remote:  
remote: NPM_CONFIG_LOGLEVEL=error
remote: NODE_ENV=production
remote: NODE_MODULES_CACHE=true
remote: NODE_VERBOSE=false
remote:  
remote: -----> Installing binaries
remote: engines.node (package.json): unspecified
remote: engines.npm (package.json): unspecified (use default)
remote:  
remote: Resolving node version 12.x...
remote: Downloading and installing node 12.18.2...
remote: Using default npm version: 6.14.5
remote:  
remote: -----> Installing dependencies
remote: Installing node modules (package.json + package-lock)
remote:  
remote: > nodemon@2.0.4 postinstall /tmp/build_0f69301f61a4ddee3c8eb13dc9553475/node_modules/nodemon
remote: > node bin/postinstall || exit 0
remote:  
remote: Love nodemon? You can now support the project via the open collective:
remote: > https://opencollective.com/nodemon/donate
remote:  
remote: added 355 packages from 391 contributors and audited 356 packages in 11.4s
remote:  
remote: 26 packages are looking for funding
remote: run `npm fund` for details
remote:  
remote: found 3 low severity vulnerabilities
remote: run `npm audit fix` to fix them, or `npm audit` for details
remote:  
remote: -----> Build
remote:  
remote: -----> Caching build
remote: - node_modules
remote:  
remote: -----> Pruning devDependencies
remote: removed 160 packages and audited 195 packages in 4.398s
remote:  
remote: 15 packages are looking for funding
remote: run `npm fund` for details
remote:  
remote: found 2 low severity vulnerabilities
remote: run `npm audit fix` to fix them, or `npm audit` for details
remote:  
remote: -----> Build succeeded!
remote: =====> Downloading Buildpack: https://github.com/mars/create-react-app-inner-buildpack.git
remote: =====> Detected Framework: React.js (create-react-app)
remote: Writing `static.json` to support create-react-app
remote: Enabling runtime environment variables
remote: =====> Downloading Buildpack: https://github.com/heroku/heroku-buildpack-static.git
remote: =====> Detected Framework: Static HTML
remote: % Total % Received % Xferd Average Speed Time Time Time Current
remote: Dload Upload Total Spent Left Speed
remote: 100 838k 100 838k 0 0 9.9M 0 --:--:-- --:--:-- --:--:-- 9.9M
remote: -----> Installed directory to /app/bin
remote: Using release configuration from last framework (Static HTML).
remote: -----> Discovering process types
remote: Procfile declares types -> (none)
remote: Default types for buildpack -> web
remote:
remote: -----> Compressing...
remote: Done: 28.2M
remote: -----> Launching...
remote: Released v3
remote: https://museful.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/museful.git

- [new branch] master -> master
