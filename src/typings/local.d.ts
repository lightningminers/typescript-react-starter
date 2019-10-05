
export {}

declare global {
  interface Window{
    __REDUX_DEVTOOLS_EXTENSION__: Function;
    DUEDEX_STORE: any;
  }
}
