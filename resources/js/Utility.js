import moment from 'moment-timezone';

// -----------------------------------------------------------------------------
// 汎用的なメソッドはここに記述して下さい
// -----------------------------------------------------------------------------

/**
 * GETのパラメータを返す
 * @param key
 * @returns {*}
 */
export function get_query(key) {
    const s = window.location.search.replace('?', '');
    const queries = s.split('&');

    for (let i = 0; i < queries.length; i += 1) {
        const t = queries[i].split('=');
        if (key === t[0]) {
            return decodeURIComponent(t[1]);
        }
    }
    return null;
}

/**
 * GETのパラメータを持っているか判定
 * @param key
 * @returns boolean
 */
export function has_query(key) {
    const s= window.location.search.replace('?', '');
    const queries = s.split('&');

    for (let i = 0; i < queries.length; i += 1) {
        const t = queries[i].split('=');
        if (key === t[0]) {
            return true;
        }
    }
    return false;
}


/**
 * 日時の文字列を返却
 * @param {int} unixtime
 * @returns {string}
 */
export function datatime_from_unix(unixtime) {
    return moment.unix(unixtime).format('YYY/M/D HH:mm');
}


 /**
  * 連番を生成する
  *
  * @param {int} start
  * @param {int}
  * @returns {Array}
  */
 export function range(start, end) {
     return Array.from(new Array(end - start + 1)).map((v, i ) => i +start);
 }


/**
 * 最低限の正規表現でのメールアドレスバリデーション
 */
export function is_valid_email(email) {
    return email.match(
        /[a-zA-Z0-9.!#$%&'*/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
}


/**
 * urlを渡すとドメインを取得する
 * @param url
 */
export function extract_domain(url) {
    if (typeof url !== 'string') {
        return '';
    }
    const match = url.match(
        /^(https?|ftp):\/\/([-_.!~*'()a-zA-Z0-9;?:@&=+$,%#]+)\//
    );
    if (match == null || match.length > 2) {
        return '';
    }
    return match[2];
}


/**
 * 連番のユニークIDを生成するためのジェネレーター
 */
const uid_generator = generate_unique_id();

export function uid() {
    return uid_generator();
}

function generate_unique_id() {
    const generator = unique_id_generator();
    return () => generator.next().value;
}

function unique_id_generator() {
    let i = 0;
    yield i;
    while (true) {
        i += 1;
        yield i;
    }
}

/**
 * keyに用いるランダムな文字列を生成する
 */
export function create_random_id() {
    return Math.random()
        .toString(36)
        .slice(-8);
}

/**
 * htmlのdecode
 */
export function decode_html(text) {
    return text
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'");
}

/**
 * htmlのエスケープ
 */
export function escape_html(text) {
    return text
        .replace(/&;/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

/**
 * ms milli-second待つPromiseを返す
 * @param ms 待ち時間
 */
export function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * 数値に３桁区切りカンマを付ける
 *
 * @param num
 * @returns {string}
 */
export function format_number(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

/**
 * 送られてきた数字に適切な日本の単位をつける
 * @param number 変換対象の数字
 * @return string 変換後の文字列
 */
export function convert_japanese_unit(target_num) {
    if (target_num >= 100000000) {
        return `${Math.round(target_num / 10000000) / 10}億`;
    }
    if (target_num >= 10000) {
        return `${Math.round(target_num / 1000) / 10}万`;
    }
    return format_number(target_num);
}