npm init

npm init

install typescript

npm install typescript --save--dev

{
  "name": "word-counter",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "typescript": "^5.9.3"
  }
}

npx tsc --help (if installed localy)

tsc --help (if installed globally using npm install -D parameter)

ensure the cli return available command from typescript


npx tsc --init

expected

```
(base) deganandaferdian@degananda word-counter % npx tsc --init

Created a new tsconfig.json                                                                                             
                                                                                                                     TS 
You can learn more at https://aka.ms/tsconfig
```

now compile and run 

npx --watch