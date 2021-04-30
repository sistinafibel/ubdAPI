UBD 계산 API
==================
![b1](https://img.shields.io/github/license/sistinafibel/ubdAPI?style=flat-square)
![b2](https://img.shields.io/github/stars/sistinafibel/ubdAPI?style=flat-square)

![IMAGE ALT TEXT](https://user-images.githubusercontent.com/36251104/57471183-8ced5a80-72c5-11e9-81c1-2423f64ae639.jpg)
UBD를 계산해주는 API 입니다.<br>
일반 UBD / 간소화UBD / UBD2를 지원합니다.<br><br>

the Unit of Box office Dealings
⚡️ https://www.npmjs.com/package/ubd

바로사용하기
-----------

실행방법
--------
<pre><code>#node 설치후
> npm install ubd
</code></pre>

로컬 호출예제
--------

```
import ubdAPI from 'ubd';

console.log(ubdAPI.ubd(1000000));
console.log(ubdAPI.ubds(100000));
console.log(ubdAPI.ubd2(100000));

```

변환타입
--------
| Type | 설명 | 수치 |
| ------ | ------ |  ------ |
| ubd | UBD 기본 타입입니다. | 172,212 |
| ubds | 간소화된 UBD입니다. | 170,000 |
| ubd2 | UBD Squared 타입입니다. | 300억 |


여담
--------
![IMAGE ALT TEXT](https://user-images.githubusercontent.com/36251104/57471764-dbe7bf80-72c6-11e9-8c86-ac3f5224757c.png)<br>
술 한잔 마셨습니다.. 코딩이 잘 안되도 좋습니다. 하지만 UBD 계산기 하나만 <br>
기억해주세요. 진심을 다해 전합니다. 개발이 별로 일수있습니다.<br>
밤낮으로 고민하고 개발했습니다..최선을 다했고 열심히 했습니다.<br>
진심이 느껴지길 바랍니다. 고맙습니다..

------

여담2
--------

🚀 2021.4.30 추가
엄복동 영화 나오고 node 공부할때 별 생각 없이 만들어둔 패키지가 가장 스타수가 높은거 보고<br>
착잡한 마음에 (쪽팔려서) express 추가된 코드를 걷어내고 npm에 배포로 올려놨습니다.<br>다른 레포도 많이 사랑해주세요.