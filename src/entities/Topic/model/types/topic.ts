export interface Topic {
  id: string;
  name: string;
  image: string;
  bgColor: string;
  tags: Tag[];
}

export type Tag =
  | 'Все темы'
  | 'Головоломки'
  | 'Шахматы'
  | 'Логика и мышление'
  | 'Страны и столицы'
  | 'Окружающий мир'
  | 'Загадки';
