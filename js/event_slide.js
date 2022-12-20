 $(document).ready(function () {
            //초기값으로 시작 화면에 첫번째 버튼에 스타일 적용
            $('.btn1 > li').eq(0).find('a').addClass('on');
            var idx = 0;
            console.log(idx);

            $('.btn1 > li').click(function (e) {
                e.preventDefault();//a태그에 href의 기능 상실
                var i = $(this).index();
                console.log(i);
                //모든 a태그에 스타일 삭제
                $('.btn1 > li').find('a').removeClass('on');
                //현재 이벤트가 적용된 대상에 안에 있는 A태그 스타일 적용
                $(this).find('a').addClass('on');
                move(i);//이벤트가 적용된 대상의 인덱스값을 애니메이션 함수에 전달 
            });

            $('.next').click(function () {
                idx = idx + 1; //0 1 2 3 4(0)
                if (idx == 4) {
                    idx = 0;
                }
                console.log(idx);
                $('.btn1 > li').find('a').removeClass('on');
                $('.btn1 > li').eq(idx).find('a').addClass('on');
                move(idx);
            })
            $('.prev').click(function () {
                idx = idx - 1;
                if (idx == -1) {
                    idx = 3;
                }
                console.log(idx);
                $('.btn1 > li').find('a').removeClass('on');
                $('.btn1 > li').eq(idx).find('a').addClass('on');
                move(idx);
            })

            function move(n) {
                var pos = (-600) * n + 'px';
                //애니메이션이 되는 대상의 좌표값이 변함이 생기므로 임시저장공간 저장함
                $('.list').animate({ left: pos }, 500);
            }
        })