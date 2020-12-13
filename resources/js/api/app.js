import superagent from 'superagent';

/**
 * APIリクエスト後の共通処理
 *
 * @param on_resolve
 * @param on_reject
 * @param start_at
 * @returns {function()}
 * @private
 */

function _callback(on_resolve, on_reject, params, start_at) {
    return (err, res) => {
        if (typeof res === 'undefined') {
            on_reject(null);
        } else if (res.status === 0) {
            return null;
        } else if (err & res.status === 403) {
            // CSRF エラーなどの場合
            console.log('403エラーが起きたぞ！')
            on_reject({
                //res.bodyに応じてよしなに記述、以下サンプル
                // is_ok: false,
                // require_logijn: true,
                // message: 'エラーが発生しました',
            });
        } else if (err || typeof res.body !== 'object' || res.body === null) {
            // jsonパース失敗時 res.body = null になる
            on_reject(null);
        } else if (res.status === 200) {
            on_resolve(res.body);
            if ('queries_for_debug' in res.body) {
                output_console_for_debug(res, params, start_at);
            }
        } else {
            on_reject(res.body);
        }

        return null;
    };
}

/**
 * デバッグ用にSQLなどをconsoleに出力する
 *
 * @param res
 * @param params
 * @param start_at
 */

function output_console_for_debug(res, params, start_at) {
    console.groupCollapsed(
        `${res.req.method} ${res.req.url.split('?')[0]} ${new Date() - start_at}ms`
    );
    console.log('request_parameters', params);
    console.log('response', res.body);
    console.groupCollapsed(`sql (${res.body.queries_for_debug.length})`);
    res.body.queries_for_debug.forEach(({ query_times, sql }) => {
    console.log(`# ${query_times}s\n${sql}`);
    });
    console.groupEnd();
    console.groupEnd();
}

const single_calling_promises = {};

/**
 * getリクエスト
 * is_single_callingをtrueにすると最後の呼び出しのみが適用され、以前のリクエストは破棄される
 *
 * @param {string} path APIのパス
 * @param {object} [params={}] 渡すパラメータ
 * @param {boolean} [is_single_call=false] 同じpathにつき１回だけ呼び出しを許可する（連打によるstateの更新ミス防止）
 * @returns {Promose}
 */

 export function get(path, params = {}, is_single_call = false) {
     if (is_single_call) {
         if (path in single_calling_promises) {
             single_calling_promises[path].abort();
         }
         return new Promise((on_resolve, on_reject) => {
            single_calling_promises[path] = superagent
                .get(path)
                .query(params)
                .set('Accept', 'application/json')
                .end(_callback(on_resolve, on_reject, params, Date.now()));
         });
     }

     return new Promise((on_resolve, on_reject) => {
         superagent
            .get(path)
            .query(params)
            .end(_callback(on_resolve, on_reject, params, Date.now()));
     });
 }

 export function post(path, params) {
     return new Promise((on_resolve, on_reject) => {
        superagent
            .post(path)
            .set('Accepe', 'application/json')
            .type('form')
            .send(params)
            .end(_callback(on_resolve, on_reject, params, Date.now()));
     });
 }