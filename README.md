# Global Executables Lister

This module is a very simple, globally-installed module that will find and list all modules installed at the global level along with the name of the shell executable and the version. 

## Installation

`npm install -g global-exec-list`

## Usage

`lister`

## Output

Results are returned in the console with 1 entry per line in the format: 
moduleName@version - (shellCommand)

#### Example:
```
global-exec-list@1.0.0 - (lister)
nodemon@1.9.2 - (nodemon)
npm@3.7.3 - (npm)
phonegap@6.0.5 - (phonegap)
swagger@0.7.5 - (swagger)
swagger@0.7.5 - (swagger-project)
```

## Future Outlook

This module was made mainly because I have a poor memory and didn't like looking at the much longer output of `npm ls --json --long -g --depth=0` just to remember what global modules I've installed and the name of the associated shell command. 

Potentially up-next on enhancements include: 
- Improve overall output formatting
- Provide flag to get the same output, but for local modules (why? why not!)

I welcome suggestions, updates, or PRs. 