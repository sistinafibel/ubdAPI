UBD 계산 API
==================
![IMAGE ALT TEXT](https://user-images.githubusercontent.com/36251104/57471183-8ced5a80-72c5-11e9-81c1-2423f64ae639.jpg)
UBD를 계산해주는 API 입니다.<br>
일반 UDB / 간소화UDB / UDB2를 지원합니다.<br><br>

the Unit of Box office Dealings

바로사용하기
-----------
WEB API (GET) :: http://211.239.124.243:19922/ubd?price=수치&type=타입 <br>
예제 :: http://211.239.124.243:19922/ubd?price=10000&type=ubds <br>

실행방법
--------
<pre><code>#node 설치후
> npm install
> node src/index.js
</code></pre>

로컬 호출예제
--------
JSON : http://127.0.0.1:3080/ubd?price=1000000&type=ubds

요청변수
--------
| RetrunName | 설명 | 파라미터 |
| ------ | ------ | ------ |
| price | 사용자가 입력하는 티켓수량 | 정수 숫자형 (ex) 170000 |
| type | 변환타입 | ubd , ubds , ubd2 |


변환타입
--------
| Type | 설명 | 수치 |
| ------ | ------ |  ------ |
| ubd | UBD 기본 타입입니다. 아무 타입도 없을경우 이 타입을 기본으로 사용합니다. | 172,212 |
| ubds | 간소화된 UBD입니다. | 170,000 |
| ubd2 | UBD Squared 타입입니다. | 300억 |


출력결과
--------  
| RetrunName | 설명 | 결과 |
| ------ | ------ | ------ |
| ubd | UDB수치를 리턴합니다. | ex) 1복동 |
| tickets | 사용자가 보낸 티켓수치를 리턴합니다. | 사용자 price 값 |
| type | 이용자가 요청한 타입을 리턴합니다. | 사용자 Type값 |


여담
--------
![IMAGE ALT TEXT](https://user-images.githubusercontent.com/36251104/57471764-dbe7bf80-72c6-11e9-8c86-ac3f5224757c.png)<br>
술 한잔 마셨습니다.. 코딩이 잘 안되도 좋습니다. 하지만 UBD 계산기 하나만 <br>
기억해주세요. 진심을 다해 전합니다. 개발이 별로 일수있습니다.<br>
밤낮으로 고민하고 개발했습니다..최선을 다했고 열심히 했습니다.<br>
진심이 느껴지길 바랍니다. 고맙습니다..

