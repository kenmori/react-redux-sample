## react redux redux-saga react-router flow pretter example starterkit

create-react-appから始めたいけど

reduxやrouter、scss、flow, prettierなどの設定が面倒な方へ

それらの設定済みから始められる

starterkitです

・適当なCounterアプリを実装してredux、routerが動くことを保証しています(reduxにまだ親しみがない方のために)
![counter](http://kenjimorita.jp/wp-content/uploads/2018/06/redu.gif)

・sagaは後述する[json-server](https://github.com/typicode/json-server)を起動してリクエストできるようにしてあります

・create-react-appをejectしています


### require

```
node 8.11.2
npm 5.6.0
```

### already add library

```
- react-create-app
- react-router
- redux
- react-helmet
- redux-form
- redux-saga
- flow
- scss
- prettier
- logger
- composeWithDevTools
- Enzyme
- jest
- storybook
```

### モックサーバー

```
npm i -g json-server
```

### scss

```
sass-directory-structures
http://vanseodesign.com/css/sass-directory-structures/
```

### getting start

```
- yarn install
- json-server db.json
- yarn start

flow

- yarn flow

test

- yarn test

build
-  npm run build

- serve -s build

```
