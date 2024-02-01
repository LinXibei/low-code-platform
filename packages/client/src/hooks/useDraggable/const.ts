import { ref, Ref } from 'vue';
import { DragState } from './interface';

// 组件来源
export enum SourceComponent{
  sideNav,
  canvas
}

// 画布动作
export enum CanvasAction{
  ADD = 'add',
  SELECT = 'select',
  DELETE = 'delete',
  CHANGE = 'change',
  SAVE = 'save',
  GET = 'get',
  INITIAL = 'initial',
  PREVIEW = 'preview',
  COPY = 'copy',
  CUT = 'cut',
  PASTE = 'paste',
  UNDO = 'undo',
  REDO = 'redo',
  RECORD = 'record',
  CLEAR = 'clear'
}

// 拖拽状态
export enum DragStatus{
  dragNone,
  dragStart,
  dragMove,
  dragEnd
}

// 插入类型
export enum InsertType{
  none = 'none',
  up = 'up',
  down = 'down',
  left = 'left',
  right = 'right'
}

// 栅格默认间距
export const ROW_GUTTER_BASE = 10;

// 栅格基数
export const ROWS_BASE = 24;

// 画布区域是否为空
export const isEmpty: Ref<boolean> = ref(true);

export const defaultDragState: DragState = {
  insertType: InsertType.none,
  insertClass: '',
  action: DragStatus.dragNone,
  target: null,
  targetCompId: '',
  targetRect: null,
  targetCtx: null,
  dragElem: null,
  draggedRect: null,
  originalEvent: null,
  originalIndex: 0,
  draggableIndex: 0,
  draggableCompId: '',
  draggableCtx: null,
  dragArea: null,
  isChange: false,
  lineElement: null,
  canInsert: true,
  isDragArea: false,
  baseRect: null,
  sourceComp: SourceComponent.sideNav
}