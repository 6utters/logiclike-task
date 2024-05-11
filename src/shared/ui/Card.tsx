import { memo } from 'react';
import cls from './Card.module.scss';

interface CardProps {
  label: string;
  image: string;
  backgroundColor: string;
}
export const Card = memo((props: CardProps) => {
  const { image, label, backgroundColor } = props;

  return (
    <div className={cls.wrapper}>
      <div className={cls.imageBlock} style={{ backgroundColor }}>
        <img className={cls.cover} src={image} alt={`${label}-cover`} />
      </div>
      <div className={cls.infoBlock}>
        <div className={cls.label}>{label}</div>
      </div>
    </div>
  );
});
