
# zip-lk Address Zip Detail Provider


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/lahirudanushka/zip-lk.git)

This package provides zip address location information with district or province and can be search information by zip.

You can search information by

  - zip
  - city
  - district
  - province



### Installation

zip-lk requires [Node.js](https://nodejs.org/) v4+ to run.

Install the package.

```sh
$ cd your-root-directory
$ npm install zip-lk
```

Usage example...

```sh
//import
const zip = require('zip-lk');

//configure module
zip.config();

(async () => {    

    //get all zip details by district filter
    let searchQuery = {district:'Gampaha'};

    let result = await zip.get(searchQuery);

    console.log(result);

})()

```



License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
