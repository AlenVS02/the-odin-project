## Outer Display Type

#### Block:
- The box will break onto a new line
- Width and Height properties are respected
- Padding, margin, and border will cause other elements to be pushed away from the box.
- If width is not specified, the box will extend in the inline direction to fill the space available in its container.
#### Inline:
- The box will not break onto a new line
- The width and height properties will not apply
- Top and Bottom padding, margins, and borders will apply but will not cause other inline boxes to move away from the box
- Left and Right padding, margins, and borders will apply and cause other inline boxes to move away from the box

## Standard and Alternative CSS box models

#### Standard CSS box model: 
The total size of the box is determined not only by the width and the height, but  the padding and border are added to those dimensions. 
In the following example, the _actual_ space taken up by the box will be 410px wide (350 + 25 + 25 + 5 + 5) and 210px high (150 + 25 + 25 + 5 + 5).
``` css
.box {
    width: 350px;
    height: 150px;
    margin: 10px;
    padding: 25px;
    border: 5px solid black;
}
```

#### Alternative CSS box model:
In the alternative box model, any width is the width of the visible box on the page. The content area width is that width minus the width for the padding and border.

``` css
.box {
	box-sizing: border-box;
}
```

## Box Components

Every element in CSS comes in the form of a box.
![Learn CSS Box Model and its Properties with Examples](https://www.simplilearn.com/ice9/free_resources_article_thumb/CSS-Box-Model.png)

Looking deeper into what makes up the element's box, one finds different layers:

- **Margin**: the space that separates the the element from adjacent elements. Margin collapsing refers to the idea that if two elements' margin touch, the margins will combine. 
	- If one is larger than the other, the largest margin is adopted
	- If two negative margins collapse, then the smallest value (furthest from zero) will be adopted
	- If only one margin is negative, its value will be subtracted from the total
- **Border**: the space that separates the padding from the margin
- **Padding**: the space between the border of the element and the content
- **Content**: what the element displays on the DOM

