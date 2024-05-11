import axios from 'axios';
import { Topic } from '../types/topic.ts';

export const TopicService = {
  findAll() {
    return axios.get<Topic[]>(`${import.meta.env.VITE_API_URL}/docs/courses.json`);
  }
};
