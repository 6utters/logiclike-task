import { Tag } from '@/entities/Topic';

interface TopicFilter {
  id: string;
  label: string;
  value: Tag;
}

export const topicFilters: TopicFilter[] = [
  {
    id: '1',
    label: 'Все темы',
    value: 'Все темы'
  },
  {
    id: '2',
    label: 'Логика и мышление',
    value: 'Логика и мышление'
  },
  {
    id: '3',
    label: 'Загадки',
    value: 'Загадки'
  },
  {
    id: '4',
    label: 'Головоломки',
    value: 'Головоломки'
  },
  {
    id: '5',
    label: 'Путешествия',
    value: 'Страны и столицы'
  }
];
