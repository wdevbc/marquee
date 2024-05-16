### marquee
marquee.js

## How To Use

# 1. install
First, you need to download the marquee.js library. You can find it on the official GitHub repository.

`https://github.com/wdevbc/marquee`

# 2. script
```script
const marquee = new SimpleMarquee('.class', options);
```

# 3. options
autoplay: true
speed: 0.9
pauseOnMouseEnter: true
direction: right

# 4. html
```html
<div class="class">
    <p>
        "You include text, images, and other resources here in HTML."
    </p>
    <p>
        "Contents are divided into multiple structures if they are short in length."
    </p>
</div>
```

# 5. style
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

# 6. sample
```sample code
const marquee = new SimpleMarquee('.class', {
    autoplay: true,
    speed: 1,
    pauseOnMouseEnter: true,
    direction: left
});
```

# 7. Demo

[Demo](https://git.wdev.kr/javascript/dev/marquee/marquee.html)