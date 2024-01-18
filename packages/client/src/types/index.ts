/**
 * ComponentSrc
 * 组件资源
 * jsUrl: component js url
 * schemaUrl: component schema url
*/
export interface ComponentSrc {
  jsUrl: string;
  schemaUrl: string;
}

/**
 * ComponentMeta
 * 编辑器左边展示时使用
 * name: component name
 * key: component key
 * alias: component alias
 * icon: component icon
 * props: component props
 * version: component version
*/
export interface ComponentMeta {
  name: string;
  key: string;
  alias: string;
  icon: string;
  props: string[] | object;
  version: string;
  type: string;
  typeCn: string;
}

/**
 * ComponentStatus
 * 组件状态
 * isCustom: component is custom，用户自定义开发组件
 * isLazyLoading: component is lazy loading，懒加载
 * isRegistered: component is registered，已注册
 * isLoaded: component is loaded， 已加载
 * isSchemaLoaded: component schema is loaded，已加载
*/
export interface ComponentStatus {
  isCustom: boolean;
  isLazyLoading: boolean;
  isRegistered: boolean;
  isLoaded: boolean;
  isSchemaLoaded: boolean;
}


