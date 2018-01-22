# 1. new repository
- github io(https://pages.github.com/)에 새로운 프로젝트를 생성합니다.

# 2. upload file on git
- contents.json을 git에 업로드 합니다.

# 3. create files
-  result.png 파일을 바탕으로 index.html, layout.css, main.js 파일을 작성합니다. (꼭 분리되어야 함)

# 4. Javascript part
- contents.json을 동적으로 읽어오기 (Ajax 사용) 
- Dynamic DOM (jQuery append) 을 이용하여 웹페이지를 구성합니다.

```
JSON 구조 설명
-- size : column 몇개를 차지할 것인가
-- type : 본 과제에서는 사용하지 않음
-- img : 이미지 파일의 경로 또는 URL (임의 변경 가능)
-- title : 제목
-- desc : 부제목
-- url : 클릭시 이동할 URL
실제 테스트시에는 다른 JSON파일이 입력됩니다.
* 한줄이 완성되지 않을 수 있으며, 이때는 console.log로 에러정보를 출력해야함
  ex) 3, 2, 2로 배치되는 경우 마지막의 2로 인해 한줄을 채울 수 없음 
```
# 5-1. CSS part (변경가능)
- 모든 컨텐츠의 세로 크기는 370px입니다.
- 1칸의 가로크기는 370px, 2칸은 775px, 3칸은 1180px 로 고정입니다.
- 해당 스크린샷은 가로 1440px 에서 촬영되었습니다.

# 5-2 Responsive CSS
- PC 환경에서는 3칸씩 1줄을 차지합니다.
- 타블렛 환경에서는 2칸씩 1줄을 차지합니다.
- 모바일 환경에서는 1칸씩 1줄을 차지합니다.
- 마우스가 오버되면 사진의 크기는 10% 커져야 하며, 검정색 반투명 overlay가 활성화 됩니다.

# 실행하기
- npm i
- npm start
- localhost:3000/index.html
