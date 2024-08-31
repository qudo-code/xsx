
# XSX
`npm i -D @qudo/xsx`

Organize and scale your package.json scripts natively without janky pre-install steps and JSON partials.
![header](https://github.com/qudo-code/xsx/doc/intro.png)

## Motivation
In large projects, it's common to have a lot of scripts in your package.json which starts to get messy. Most solutions to this problem include pre-install steps that allow you to create package.json partials and include them into your main package.json. This isn't really how things work by default and it feels a little weird to be piecing together at install time what should already be the source of truth.

## Usage
XSX solves the script organization problem with tools you already have and conventions you already follow. Simply make a `./scripts` folder with `*.sh` files and XSX will help you resolve them in your package.json.


[📂 Example Project](https://github.com/qudo-code/xsx/example/pacakge.json)

#### Add Scripts
Create a `./scripts` folder with `*.sh` structured however you want. These scripts will be like your package.json scripts, except now you have folders to better organize them and IDE features like syntax highlighting and autocomplete.
##### Example
```
/scripts
    /build
        backend.sh
        dashboard.sh
        docs.sh
        website.sh
    /dev
        /backend
            api.sh
            database.sh
        /website.sh
package.json
```
#### Run Scripts
Run scripts by invoking the `xsx` command and separating the scripts directory segments with spaces.

##### Example
If you have a script located at `./scripts/build/website.sh` you can run it in your package.json with `xsx build website`.

It might also be helpful to setup partial `xsx` scripts that point to common script directories like the following. This would allow you to do `npm run build website` or `npm run dev backend api` assuming the file structure in the first step. 

```json
    "devDependencies": {
        "@qudo/xsx": "latest"
    },
    "scripts": {
        "build": "xsx build",
        "dev": "xsx dev",
    }
```
