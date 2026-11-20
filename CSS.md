# CSS 정리

## 1. CSS란?

CSS(Cascading Style Sheets)는 HTML로 작성한 웹 문서의 디자인과 레이아웃을 꾸미는 스타일 언어입니다.

HTML이 웹페이지의 구조와 내용을 담당한다면, CSS는 글자 색상, 크기, 간격, 정렬, 배경, 화면 배치 등을 담당합니다.

예를 들어 HTML로 제목을 만들고 CSS로 제목의 색상과 크기를 지정할 수 있습니다.

```html
<h1>나의 이력서</h1>
```

```css
h1 {
    color: navy;
    font-size: 32px;
}
```

## 2. CSS 적용 방식

CSS를 HTML에 적용하는 방법은 크게 세 가지입니다.

### 2-1. Inline CSS (인라인 CSS)

HTML 태그 안에 `style` 속성을 사용하여 직접 CSS를 작성하는 방식입니다.

```html
<p style="color: blue; font-size: 18px;">
    안녕하세요.
</p>
```

- 특정 요소 하나에 빠르게 스타일을 적용할 수 있습니다.
- HTML과 CSS가 섞여 있어 코드가 복잡해질 수 있습니다.
- 여러 요소에 같은 스타일을 적용하거나 유지보수하기에는 불편합니다.

### 2-2. Internal CSS (내부 CSS)

HTML 문서의 `<head>` 안에 `<style>` 태그를 작성하고 그 안에 CSS를 작성하는 방식입니다.

```html
<head>
    <style>
        p {
            color: blue;
            font-size: 18px;
        }
    </style>
</head>
```

- 하나의 HTML 문서 안에서 스타일을 관리할 수 있습니다.
- 별도의 CSS 파일이 필요하지 않습니다.
- 여러 HTML 페이지에서 같은 스타일을 재사용하기 어렵습니다.

### 2-3. External CSS (외부 CSS)

CSS 코드를 별도의 `.css` 파일에 작성하고 HTML 문서에서 연결하는 방식입니다.

HTML 파일의 `<head>` 안에 다음 코드를 작성합니다.

```html
<link rel="stylesheet" href="resume_style.css">
```

`resume_style.css` 파일에는 CSS 코드를 작성합니다.

```css
p {
    color: blue;
    font-size: 18px;
}
```

- HTML과 CSS를 분리하여 관리할 수 있습니다.
- 여러 HTML 문서에서 하나의 CSS 파일을 함께 사용할 수 있습니다.
- 코드의 재사용성과 유지보수성이 좋습니다.

이번 이력서 과제에서는 **External CSS 방식**을 사용합니다.

## 3. CSS Selector (선택자)

선택자는 CSS를 적용할 HTML 요소를 지정하는 문법입니다.

### 3-1. 전체 선택자 (`*`)

페이지의 모든 요소를 선택합니다.

```css
* {
    box-sizing: border-box;
}
```

### 3-2. 태그 선택자

HTML 태그 이름으로 요소를 선택합니다.

```css
h1 {
    color: navy;
}
```

### 3-3. 클래스 선택자 (`.`)

특정 class 속성값을 가진 요소를 선택합니다. HTML에서 여러 요소에 같은 클래스를 지정할 수 있습니다.

```html
<p class="intro">자기소개입니다.</p>
```

```css
.intro {
    color: gray;
}
```

### 3-4. 아이디 선택자 (`#`)

특정 id 속성값을 가진 요소를 선택합니다. 일반적으로 한 페이지에서 고유한 요소에 사용합니다.

```html
<section id="profile">프로필</section>
```

```css
#profile {
    background-color: #f2f5f9;
}
```

### 3-5. 자손 선택자

특정 요소 안에 포함된 하위 요소를 선택합니다.

```css
header p {
    color: gray;
}
```

위 코드는 `header` 요소 안에 있는 모든 하위 `p` 요소에 적용됩니다.

## 4. style 속성

`style`은 HTML 요소에 CSS를 직접 적용할 때 사용하는 속성입니다.

```html
<p style="color: red; font-weight: bold;">
    강조할 문장입니다.
</p>
```

- `color`: 글자 색상
- `font-weight`: 글자 굵기

인라인 방식은 간단하지만 HTML과 CSS가 섞이므로, 여러 요소에 스타일을 적용할 때는 별도의 CSS 파일을 사용하는 것이 관리하기 좋습니다.

## 5. Text 관련 CSS 속성

글자와 문장의 모양 및 정렬을 지정하는 속성입니다.

| 속성 | 설명 | 예시 |
|---|---|---|
| `font-size` | 글자 크기 | `font-size: 20px;` |
| `font-weight` | 글자 굵기 | `font-weight: bold;` |
| `text-align` | 텍스트 가로 정렬 | `text-align: center;` |

```css
h1 {
    font-size: 32px;
    font-weight: 700;
    text-align: center;
}
```

`text-align`에는 보통 `left`, `center`, `right`, `justify` 등을 사용할 수 있습니다.

## 6. Box Model (박스 모델)

CSS에서 HTML 요소는 사각형 박스로 구성됩니다. 박스 모델은 요소의 크기와 바깥·안쪽 여백을 이해하는 기본 개념입니다.

박스 모델은 바깥쪽부터 다음 순서로 구성됩니다.

1. **Margin**: 요소 바깥쪽 여백
2. **Border**: 요소의 테두리
3. **Padding**: 테두리와 내용 사이의 안쪽 여백
4. **Content**: 실제 글자나 이미지 등 내용이 들어가는 영역

### 6-1. margin

요소의 바깥쪽 여백을 지정합니다. 다른 요소와의 간격을 조절할 때 사용합니다.

```css
.card {
    margin: 20px;
}
```

### 6-2. padding

요소의 테두리와 내용 사이의 안쪽 여백을 지정합니다.

```css
.card {
    padding: 20px;
}
```

### 6-3. border

요소의 테두리를 지정합니다.

```css
.card {
    border: 1px solid #cccccc;
}
```

### 6-4. content

텍스트나 이미지 등 실제 콘텐츠가 표시되는 영역입니다.

### 6-5. width와 height

요소의 너비와 높이를 지정합니다.

```css
.card {
    width: 300px;
    height: 200px;
}
```

### 6-6. box-sizing

요소의 전체 크기를 계산하는 방식을 지정합니다.

- `content-box`: 기본값입니다. 지정한 width와 height에 padding과 border가 추가됩니다.
- `border-box`: 지정한 width와 height 안에 padding과 border가 포함됩니다.

```css
* {
    box-sizing: border-box;
}
```

`border-box`를 사용하면 지정한 너비와 높이를 기준으로 크기를 관리하기 편리합니다.

## 7. 간단한 종합 예제

```html
<div class="card">
    <h2>나의 이력서</h2>
    <p>꾸준히 배우고 성장하는 개발자입니다.</p>
</div>
```

```css
* {
    box-sizing: border-box;
}

.card {
    width: 300px;
    margin: 20px auto;
    padding: 24px;
    border: 1px solid #dddddd;
    text-align: center;
}

.card h2 {
    font-size: 24px;
    font-weight: 700;
}

.card p {
    font-size: 16px;
    color: #555555;
}
```

## 8. 마무리

이번 학습을 통해 CSS의 기본 개념과 HTML에 CSS를 적용하는 세 가지 방식, 선택자, 텍스트 관련 속성, 박스 모델을 정리했습니다.

특히 External CSS를 사용하면 HTML과 디자인 코드를 분리하여 관리할 수 있고, Box Model을 이해하면 요소의 크기와 여백을 보다 정확하게 조절할 수 있습니다.

앞으로 이력서 웹페이지를 꾸밀 때 배운 CSS 속성과 선택자를 활용해 보겠습니다.
