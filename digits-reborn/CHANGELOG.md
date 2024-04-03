
# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [0.3.0] - Changes from Feature 4 to Feature 5
- user scores (/MyScores) route is now protected and cannot be accessed without authentication
- user cannot route to login/register page if already logged in
- user cannot access protected routes by manually typing in the url
- user will be rerouted to login/register if they try to access a protected route such as "/MyScores"
 
## [0.2.0] - Changes from Feature 3 to Feature 4
 
### Added
- async data retrevial using Back4App data
- displays digits puzzles corresponding to their respective day
- implemented routing using react-dom to link pages on the website

### Changed
-  Digits and goals are displayed as buttons instead of text


### Fixed
 
 
## [0.1.0] - Changes from Feature 2 to Feature 3
 
### Added
- Implemented axios to retreive digits data from our digits.json file
- Implemented login page using a stateful parent component (Login.js)
