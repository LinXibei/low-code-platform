/**
 * 考虑二次封装vueDraggable
 * 把如下类型暴露出来
*/
import { ComponentPublicInstance } from 'vue';
export interface Rectangle {
  top: number;
  left: number;
  width: number;
  height: number;
  bottom: number;
  right: number;
}
export type DraggedContext<T> = {
  index: number;
  futureIndex: number;
  element: T;
}
export type MoveEvent<T> = {
  originalEvent: DragEvent;
  dragged: Element;
  draggedCtx: DraggedContext<T>;
  draggedRect: Rectangle;
  target: Element;
  targetCtx: DropContext<T>;
  targetRect: Rectangle;
  from: Element;
  to: Element;
  willInsertAfter: boolean;
  isTrusted: boolean;
}
export type DropContext<T> = {
  index: number;
  element: T;
  component: ComponentPublicInstance;
}

export type ChangeEvent<T> = {
  added?: {
    element: T;
    newIndex: number;
  };
  removed?: {
    element: T;
    oldIndex: number;
  };
  moved?: {
    element: T;
    oldIndex: number;
    newIndex: number;
  }
}