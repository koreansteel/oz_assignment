# HTML Tag 정리

## 1. HTML이란?

HTML(HyperText Markup Language)은 웹페이지의 구조와 내용을 작성하는
마크업 언어이다. HTML 태그를 사용해 제목, 문단, 이미지, 링크, 표, 입력
양식 등을 구성할 수 있다.

## 2. HTML 문서의 기본 구조

``` html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>나의 첫 웹페이지</title>
</head>
<body>
    <h1>안녕하세요!</h1>
    <p>HTML 공부를 시작했습니다.</p>
</body>
</html>
```

-   `<!DOCTYPE html>`: HTML5 문서임을 브라우저에 알려준다.
-   `<html>`: HTML 문서 전체를 감싸는 최상위 요소이다.
-   `<head>`: 문서의 제목, 문자 인코딩 등 문서 정보를 작성한다.
-   `<title>`: 브라우저 탭에 표시되는 문서 제목을 지정한다.
-   `<body>`: 웹페이지 화면에 실제로 표시되는 내용을 작성한다.

## 3. 자주 사용하는 HTML 태그

### 3-1. 제목 태그: `<h1>` \~ `<h6>`

제목을 나타내는 태그이다. 숫자가 작을수록 더 높은 단계의 제목을
의미한다.

``` html
<h1>가장 중요한 제목</h1>
<h2>두 번째 단계 제목</h2>
<h3>세 번째 단계 제목</h3>
```

### 3-2. 문단 및 구분 태그: `<p>`, `<br>`, `<hr>`

-   `<p>`: 문단을 작성한다.
-   `<br>`: 줄을 바꾼다.
-   `<hr>`: 주제나 내용을 구분하는 수평선을 표시한다.

``` html
<p>HTML은 웹페이지의 구조를 만드는 언어입니다.</p>
<br>
<p>태그를 사용해 내용을 구성합니다.</p>
<hr>
```

### 3-3. 목록 태그: `<ul>`, `<ol>`, `<li>`

-   `<ul>`: 순서가 중요하지 않은 목록을 만든다.
-   `<ol>`: 순서가 있는 목록을 만든다.
-   `<li>`: 목록 안의 각 항목을 나타낸다.

``` html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>

<ol>
    <li>개념 공부하기</li>
    <li>예제 작성하기</li>
    <li>실습하기</li>
</ol>
```

### 3-4. 입력 태그: `<input>`

사용자가 정보를 입력할 수 있는 입력 칸을 만든다. `type` 속성으로 입력
종류를 지정한다.

``` html
<input type="text" placeholder="이름 입력">
<input type="email" placeholder="이메일 입력">
<input type="password" placeholder="비밀번호 입력">
```

-   `type="text"`: 일반 문자 입력
-   `type="email"`: 이메일 주소 입력
-   `type="password"`: 비밀번호 입력
-   `placeholder`: 입력 칸에 안내 문구 표시

### 3-5. 이미지 태그: `<img>`

웹페이지에 이미지를 삽입한다.

``` html
<img src="profile.jpg" alt="프로필 사진">
```

-   `src`: 이미지 파일의 경로나 주소를 지정한다.
-   `alt`: 이미지를 표시할 수 없을 때 대신 보여줄 설명을 작성한다.

### 3-6. 링크 태그: `<a>`

다른 웹페이지나 웹사이트로 이동하는 링크를 만든다.

``` html
<a href="https://github.com">GitHub 바로가기</a>
```

-   `href`: 이동할 주소를 지정한다.

### 3-7. 표 태그: `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`

표 형태로 데이터를 정리할 때 사용한다.

-   `<table>`: 표 전체를 만든다.
-   `<thead>`: 표의 제목 행 영역을 나타낸다.
-   `<tbody>`: 표의 본문 데이터 영역을 나타낸다.
-   `<tr>`: 표의 한 행을 만든다.
-   `<th>`: 제목 셀을 만든다.
-   `<td>`: 일반 데이터 셀을 만든다.

``` html
<table>
    <thead>
        <tr>
            <th>이름</th>
            <th>학습 과목</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>홍길동</td>
            <td>HTML</td>
        </tr>
    </tbody>
</table>
```

### 3-8. 폼 및 버튼 태그: `<form>`, `<button>`

-   `<form>`: 사용자가 입력한 정보를 제출하기 위한 양식을 만든다.
-   `<button>`: 클릭할 수 있는 버튼을 만든다.

``` html
<form>
    <input type="text" placeholder="이름을 입력하세요">
    <input type="email" placeholder="이메일을 입력하세요">
    <button type="submit">제출하기</button>
</form>
```

`type="submit"`은 폼의 입력 내용을 제출하는 버튼을 의미한다. 실제 데이터
전송을 위해서는 폼의 `action`이나 JavaScript 등의 추가 설정이 필요할 수
있다.

## 4. 정리

HTML 태그는 웹페이지의 구조와 콘텐츠를 구성하는 기본 요소이다. 태그마다
역할이 다르므로 목적에 맞게 사용해야 한다. 기본 태그를 직접 작성하고
실습하면서 웹페이지의 구조를 이해하는 것이 중요하다.
