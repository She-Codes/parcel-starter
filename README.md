# Parcel Starter

This is an example app scaffold using [Parcel](https://parceljs.org/) as a bundler.

Parcel has Babel and SASS support out of the box.  
`"browserslist": "last 2 Chrome versions",` was added to **package.json** due to an
`Uncaught ReferenceError: regeneratorRuntime` error that I was receiving from a `fetch` request.

[Axios](https://github.com/axios/axios) to bypass CORS as the response I was receiving from my `fetch` requests were returning with `type: 'cors'`.
