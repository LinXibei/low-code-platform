import { isHtmlAttribute } from "../util/tag"
import { camelize } from "../util/string"
import { isReadOnly, events } from "./sortableEvents"

function arrToObj(arr: ArrayLike<string[]>) {
  const iterableArr = Array.from(arr);
  return Object.fromEntries(iterableArr);
}
type SortableOptionsType = {
  $attrs: { [s: string]: unknown },
  callbackBuilder: Function
}
function createSortableOptions({ $attrs, callbackBuilder }: SortableOptionsType) {
  const attrs = arrToObj(getValidSortableOptions($attrs))
  if (callbackBuilder) {
    Object.entries(callbackBuilder).forEach(([event, callback]: any) => {
      events[event].forEach((eventName: string) => {
        attrs[`on${eventName}`] = callback(event)
      })
    })
  }
  const draggable = `[data-draggable]${attrs.draggable || ''}`
  return {
    ...attrs,
    draggable
  }
}
function getValidSortableOptions(value: { [s: string]: unknown } | ArrayLike<unknown>) {
  return Object.entries(value)
    .filter(([key, _]) => !isHtmlAttribute(key))
    .map(([key, value]) => ([camelize(key), value]))
    .filter(([key, _]) => !isReadOnly(key))
}

export { createSortableOptions, getValidSortableOptions }