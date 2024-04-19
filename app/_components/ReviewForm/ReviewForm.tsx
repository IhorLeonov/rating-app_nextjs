import { ReviewFormProps } from "./ReviewForm.props";
import s from "./ReviewForm.module.css";
import cn from "classnames";
import CloseIcon from "../../_lib/icons/cross.svg";
import { Button, Input, Rating, TextArea } from "../index";

export const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  return (
    <>
      <div className={cn(s.reviewForm, className)} {...props}>
        <Input placeholder="Имя" />
        <Input placeholder="Заголовок отзыва" className={s.title} />
        <div className={s.rating}>
          <span>Оценка:</span>
          <Rating rating={0} />
        </div>
        <TextArea placeholder="Текст отзыва" className={s.description} />
        <div className={s.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={s.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>

      <div className={s.success}>
        <div className={s.successTitle}>Ваш отзыв отправлен</div>
        <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
        <CloseIcon className={s.closeIcon} />
      </div>
    </>
  );
};
