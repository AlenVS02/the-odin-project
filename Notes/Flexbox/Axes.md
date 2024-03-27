## Orientation Of Items Within a Flex Container

The default direction for a flex container is horizontal, or `row`, but you can change the direction to vertical, or `column`.

The direction can be specified in CSS like so:
```css
.flex-container {
	flex-direction: column;
}
```

Items inside a container run in a horizontal axis from the start of the container to the end; items go left to right. If one were to change the direction to `column`, all items begin running from top to bottom.

#### Alignment

A property used to manipulate the children elements inside a flex container in their horizontal axis is: `justify-content`.  Said property can take the following arguments: 
- `flex-start` 
- `center`
- `flex-end`
- `space-between`
- `space-around`
- `space-evenly`

Alternatively, we also have the property which positions children on the vertical axis: `align-items`. Said property can take the following arguments:
- `stretch`
- `flex-start` 
- `center`
- `flex-end`
- `baseline`

To individually manipulate an item on the vertical axis, we use `align-self`. This only works for the vertical axis and not the horizontal.

#### Gap
To insert space between flex items, one can use the property `gap`

#### Auto-margin
When setting `margin` to `margin: auto` on a flex item, the margin gobbles up any extra space in the container.