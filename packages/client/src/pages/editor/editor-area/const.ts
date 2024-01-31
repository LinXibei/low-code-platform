export const DRAG_AREA_PROPS = {
  ['data-container']: true,
  ['data-insert']: true
}

export const DRAG_AREA_TOP = 60;
export const DRAG_AREA_LEFT = 300;
export const BASE_GAP = 20;
export const BASE_HEADER_HEIGHT = 50;

// 拖拽元素类型
export enum DragElementType {
  Component,
  Template
}

// 容器类型组件
export enum ContainerType {
  FormContainer,
  Container,
  Column
}

// 组合组件
export enum CombineType {
  Modal,
  Drawer,
  Table,
  Tabs,
  Collapse,
  Group,
  MultSearch
}
