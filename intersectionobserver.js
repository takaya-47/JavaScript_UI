"use strict";
{
  // 参考：https://developer.mozilla.org/ja/docs/Web/API/Intersection_Observer_API

  // 監視オブジェクトの生成時の引数となる関数(アロー関数で書いてます)
  const callback = (entries, observer) => {
    // entriesはここでは監視されているオブジェクトのこと(複数の場合もあるので配列になっている)
    console.log(entries);

    entries.forEach(entry => {
      // 要素が交差していないときは何も行わない
      if (!entry.isIntersecting) {
        return;
      }

      // 要素が交差したらappearクラスをターゲット要素に付与
      // 監視は非同期的に常に行われているので交差率が20%になった時点でクラスが付与される
      entry.target.classList.add("appear");
      // 監視をストップさせる
      observer.unobserve(entry.target);
    });
  };

  // 監視のオプションを設定
  const options = {
    root: null, // rootをnullとするとデフォルトでブラウザのビューポートが指定される
    rootMargin: "0px 0px -100px", // rootの周りにmarginを設定できる
    threshold: 0.2, // ○%の時にcallbackの処理を走らせる
  };

  // 監視オブジェクトのインスタンス生成
  const observer = new IntersectionObserver(callback, options);

  // ターゲットとなる要素を取得
  const targets = document.querySelectorAll("img");
  // ターゲット要素の監“視を開始
  targets.forEach(target => {
    observer.observe(target);
  });
}
