export type Route = {
  path: string;
  errorElement?: JSX.Element;
  element: JSX.Element;
  children?: Route[];
};
