
<h3 align="center">[ Shop EC ]</h3>

## Description
<p>
カートシステムと掲載システムを連動したフルスクラッチシステム/br>
ロジシステムと連携しECサイトの運用を行う
</p>

<h4 align="center">- Cart ＆ Posting System Technology-</h4> 
<p align="center">
<img width="30%" height="200px" alt="React" src="https://user-images.githubusercontent.com/73631392/103876070-89ebe280-5116-11eb-8ae9-83217bab8cea.png">
    
<img width="30%" height="200px" alt="Laravel" src="https://user-images.githubusercontent.com/73631392/103876021-7771a900-5116-11eb-911d-439b02ae1756.png">  
</p>

<h4 align="center"> ＆ </h4>
<h4 align="center">- logistics System-</h4> 
<p align="center">
<img width="30%" height="200px" alt="logiress" src="https://user-images.githubusercontent.com/73631392/103877340-42feec80-5118-11eb-8322-fd6943517974.png">
</p>

## Environment
<h4> GIT CLONE </h4>
`$ git clone https://github.com/KenOsone/kindest_admin.git`

<h4> COMPOSER INSTALL (※use v1.8.5)</h4>
`$curl -sS https://getcomposer.org/installer | php -- --version=1.8.5`
`$sudo mv composer.phar /usr/bin/composer`
<a href="https://yoshinorin.net/2017/07/15/update-php-composer/">Reference</a>

<h4> PHP INSTALL (※use v7.4)</h4>
`$brew install php@7.4`
<a href="https://pointsandlines.jp/server-side/php/phpbrew">Reference</a>

<h4> .env CREATE </h4>
.env sampleがあるので命名を直してあげて下さい


## Startup Command
`$npm install`<br>
`$composer update`<br>
`$npm run watch`<br>
`$php artisan serve`<br>


# フロント周り

- フォルダの運用についてはre-deucksパターンを用います。

- class componentは使用せずfunctional componentを使ってください

- mutableな要素を扱う時はimmutable.jsを使ってソースの品質を担保してください

- useStateはなるべく使わずselectorを使いましょう

- パフォーマンスの観点でコンポーネント・オブジェクト・関数はhookを使ってキャッシュさせて下さい

- スタイルは基本styled-componentを使用して下さい

（追記予定）
