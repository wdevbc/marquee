# marquee
marquee.js plugin

## How To Use

### 1. Install
First, you need to download the marquee.js library. You can find it on the official GitHub repository.

`https://github.com/wdevbc/marquee`

### 2. Script
```script
const marquee = new SimpleMarquee('.class', options);
```

### 3. Options
autoplay: true
speed: 0.9
pauseOnMouseEnter: true
direction: right

### 4. Html
```html
<div class="class">
    <p>
        "You include text, images, and other resources here in HTML."
    </p>
</div>
```

### 5. Style
```css
.class {
    display: flex;
    overflow: hidden;
}
.class p {
    flex-basis: 450px;
    flex-shrink: 0;
    padding-right: 100px;
}
```

### 6. Sample
```sample code
const marquee = new SimpleMarquee('.class', {
    autoplay: true,
    speed: 1,
    pauseOnMouseEnter: true,
    direction: left
});
```
### 7. Warning
1. If the content width is too short, spaces may appear. Therefore, copy the content to increase its length.

### 8. Demo

[Demo](https://git.wdev.kr/javascript/dev/marquee/marquee.html)