// <адрес страницы, позиция скролла>
export type scrollSchema = Record<string, number>;

export interface UISchema {
  scroll: scrollSchema;
}
