# CommentRemovery
Remove comments in typescript & javscript code

**install**
-
```
npm inatll commentremovery
```

**support features**
-
* typescript comment remove
* javascript comment remove
* support API
* support CLI

**dependency:**
-
* nodejs 6.x higher
* npma
    *path
    *fs
    *extract-comments : 1.0.0

**commandline**
-
>node comment-removery {inputfilePath} {outfilePath}

* inputfilePath: input file that you want to remove comment
    ```
    //test.js
    /**This is the foo function
    * @param bar This is the bar parameter
    * @returns returns a string version of bar
    */
    function foo(bar) {
        return bar.toString()
    }
    ```

* outputfilePath: result output file, file that comment is removed

**APIs**
-
* runRemoveComment : remove comment from code
    * function runRemoveComment(code)
    * params
        * code: source code buffer you want remove
        * example:
        ```
        const removeComments = require('commentremovery');

        let codes = fs.readFileSync(inputFilePath , 'utf8');
        let resultCode = removeComments(codes);
        ```

    *return: code string that is removed comments
    

