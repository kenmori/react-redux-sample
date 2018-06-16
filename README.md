## react,redux,redux-saga,react-router,flow,pretter,loggerを設定済みのSample(サンプル)です

create-react-appから始めたいけど

reduxやrouter、scss、flow, prettierなどの設定が面倒な方へ

それらの設定済みから始められる

sample(サンプル)です

すでに実装されているページを見ながら新たにルーティング設定して、不要になったら破棄すれば良いです。

Reduxやsaga初学者にも勉強になるように作られています。

※ducksでは構成されていません

※Exampleページではsagaやrecompose、styled-component記述されています

### 様子

![yarn start](http://kenjimorita.jp/wp-content/uploads/2018/06/bookmark.gif)

### サイト内

```
/
 - /Counter (counterを実装してredux、routerが動くことを示しています(reduxにまだ親しみがない方のために)
 - /Example (実際にsagaを使用してjson-server内のpostsへgetリクエストしたものを表示しています。containerではrecomposeやreselectを使って記述されています)
```


### 補足

・sagaは後述する[json-server](https://github.com/typicode/json-server)を起動してリクエストできるようにしてあります

・create-react-appをejectしています


### 必須(require)

```
yarn 1.5.1
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
- styled-components
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
