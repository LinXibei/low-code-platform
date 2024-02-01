/**
 * 需要封装到dsl组件中
 */
import { AttributeNode, CacheExpression, DirectiveNode, ElementTypes, MemoExpression, NodeTypes, PlainElementNode, SimpleExpressionNode, SourceLocation, TemplateChildNode, TemplateLiteral, VNodeCall } from '@vue/compiler-core';

interface PropsSchemeStruct {
  title: string;
  type: string;
  description?: string;
  default: any;  // todo 可能是数组（时间区间）或者其它，目前DSL只是透传
  enum?: Array<string>;
  enumNames?: Array<string>;
  isModel?: boolean;
  properties?: PropsSchemeStruct;
  modelName?: ModelProps;
  modelValue?: ModelProps;
  'ui:widget': string;
  'ui:options': object;
}
interface ModelProps {
  title: string;
  type: string;
  default: string;
}

interface PropsScheme {
  properties: {
    [key: string]: PropsSchemeStruct;
  };
}

interface PropsSchemeValue {
  properties: {
    [key: string]: string;
  };
}
export interface ElementNodeDSL extends PlainElementNode{
  id: string;
  name: string;
  uuid: string;
  version?: string;
  propsSchema?: PropsScheme | undefined;
  propsSchemeValue?: PropsSchemeValue | undefined;
}


export interface ElementNode extends ElementNodeDSL{
  id: string;
  name: string;
  uuid: string;
  version?: string | undefined;
  propsSchema?: PropsScheme | undefined;
  propsSchemeValue?: PropsSchemeValue | undefined;
  tagType: ElementTypes.ELEMENT;
  codegenNode: VNodeCall | SimpleExpressionNode | CacheExpression | MemoExpression | undefined;
  ssrCodegenNode?: TemplateLiteral | undefined;
  type: NodeTypes.ELEMENT;
  ns: number;
  tag: string;
  props: (AttributeNode | DirectiveNode)[];
  children: TemplateChildNode[];
  isSelfClosing?: boolean | undefined;
  innerLoc?: SourceLocation | undefined;
  loc: SourceLocation;
}