# 環境構築

## git clone
git clone https://github.com/KenOsone/kindest_admin.git


## composerインストール（v1.8.5を落として下さい）
curl -sS https://getcomposer.org/installer | php -- --version=1.8.5 <br>
sudo mv composer.phar /usr/bin/composer <br>
参考： <br>
https://yoshinorin.net/2017/07/15/update-php-composer/ <br>


## phpインストール(v7.4を落として下さい)
brew install php@7.4 <br>
参考：　<br>
https://pointsandlines.jp/server-side/php/phpbrew


## .env作成
.env sampleがあるので命名を直してあげて下さい


## コマンド流れ作業

- npm install
- composer update
- npm run watch
- php artisan serve



# AWS

## 鍵ファイルをsshフォルダに移動
mv kanri.pem ~/.ssh/


## サーバーにssh接続
ssh -i  ~/.ssh/kanri.pem ec2-user@52.196.72.210 -p22


## スーパーユーザー化
sudo su -  
r2qKdsT5urCA


## サーバー起動
sudo systemctl start httpd


## ステータス確認
sudo systemctl status httpd


## publicDNS
ec2-54-250-147-211.ap-northeast-1.compute.amazonaws.com


## php-fpm再起動
sudo systemctl restart php-fpm

##httpd再起動
sudo systemctl restart httpd


## virtual host設定ファイルディレクトリ
cd /etc/httpd/conf.d/


## virtual host設定
sudo vim vhost.conf


## apache構文チェック
apachectl configtest


## アプリの場所
/var/www/html/


## VScodeでSSH接続
remote sshオススメ



# フロント周り

- フォルダの運用についてはre-deucksパターンを用います。

- class componentは使用せずfunctional componentを使ってください

- mutableな要素を扱う時はimmutable.jsを使ってソースの品質を担保してください

- useStateはなるべく使わずselectorを使いましょう

- パフォーマンスの観点でコンポーネント・オブジェクト・関数はhookを使ってキャッシュさせて下さい

- スタイルは基本styled-componentを使用して下さい

（追記予定）
