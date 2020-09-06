$(function(){
        // #で始まるa要素をクリックした場合に処理
        $('a[href^="#"]').click(function(){
                // 移動先を0px調整する。0を30にすると30px下にずらすことができる。  // ★まるごととる？
                var adjust = 0;
                // スクロールの速度（ミリ秒）
                var speed = 500;
                // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
                var href = $(this).attr("href");
                // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
                var target = $(href == "#" || href == "" ? 'html' : href);
                // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
                var position = target.offset().top + adjust;    // ★adjustとる？
                // スムーススクロール linear（等速） or swing（変速）
                $('body,html').animate({scrollTop:position}, speed, 'swing');
                return false;
        });
        
        
        // ハンバーガーメニュー
        $('.hum-icon').click(function() {
                $(this).toggleClass('active');
                if ($(this).hasClass('active')) {
                    $('.ham-menu').addClass('active'); //クラスを付与
                } else {
                    $('.ham-menu').removeClass('active'); //クラスを外す
                }
        });
        
        // ページ内リンククリック時にメニューを閉じる
        $('.ham-menu ul li a').on('click', function() {
                $('.ham-menu').toggleClass('active');
                $('.hum-icon').toggleClass('active');
        });
        
});
