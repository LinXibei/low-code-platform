import { InsertType, SourceComponent, DragStatus } from "./const"
import { DropContext, Rectangle } from "./draggable"
import { ElementNode } from "./dsl"
export interface DragState {
  insertType: InsertType;
  insertClass: string;
  action: DragStatus;
  target: Element | null;
  targetCompId: string;
  targetRect: Rectangle;
  targetCtx: DropContext<ElementNode>;
  dragged: Element | null;
  draggedRect: Rectangle;
  originalEvent: null;
  originalIndex: number;
  draggableIndex: number;
  draggableCompId: string;
  draggableCtx: DropContext<ElementNode>;
  dragArea: Element;
  isChange: boolean;
  lineElement: Element | null;
  canInsert: boolean;
  isDragArea: boolean;
  baseRect: DOMRect;
  sourceComp: SourceComponent;
}
export interface ComponentState{
  line: number;
  restWidth: number;
  canInsert: boolean;
}