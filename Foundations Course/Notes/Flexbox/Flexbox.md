
### Flex Shorthand

The `flex` declaration is shorthand for 3 properties that you can set on a **flex item**. These properties affect how flex items size themselves within their container. In this case, `flex` is shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.

``` css
div {
	flex: 1;
}
```
Applying only one value for the shorthand, as shown in the example above, is equivalent to: `flex-grow: 1`, `flex-shrink: 1`, and `flex-basis: 0`.

- **Flex-grow**
Expects a number that is then used as that flex item's growth factor. The item will grow to take up the space indicated by the flex-grow value relative to the the other items inside its container.

- **Flex-shrink**
When the container of the flex items is smaller than its children, the items will shrink according to their flex-shrink value. That is to say, that the higher the number, the faster they will shrink. By default, the shrink factor is `flex-shrink: 1`, meaning it will shrink evenly. However, if one specifies `flex-shrink: 0`, the item will not shrink.

- **Flex-basis**
Sets the initial size of a flex item, so any sort of growing or shrinking starts from the baseline size. The value defaults to `flex-basis: 0%` when specifying `flex: 1`, but otherwise is set to `flex-basis: auto`. When setting flex-basis to `flex-basis: auto`, the items checks for a width declaration and uses that.

**Differentiating `flex:auto` from its default**
`flex: auto` holds a value of `flex-grow: 1`, `flex-shrink: 1`, and `flex-basis: auto`, whereas `flex: 1` only differs in the value for `flex-basis`, where instead of `flex-basis: auto` it is set to `flex-basis: 0%`.

