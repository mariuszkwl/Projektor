export interface Person {
  name?: String;
  email?: String;
  err?: String;
}
export interface Body {
  id?: number;
  title?: string;
  body?: string;
  userId?: number;
  email?: string;
  password?: string;
  loginStatus?: string;
  loginDate?: number;
}
export interface Post {
  method?: string;
  body?: Body;
}
