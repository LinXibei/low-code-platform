import { VNode } from 'vue';
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface ElementAttributes { $props: {} }
    interface IntrinsicElements extends NaviteElements {
      [elem: string]: any
    }
    interface IntrinsicAttributes extends ReservedProps {}
  }
}
declare module '*.js'