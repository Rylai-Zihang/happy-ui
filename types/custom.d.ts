// 消除svg import 赋值 warning
declare module '*.svg' {
  const content: any;
  export default content;
}