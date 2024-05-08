import { ReviewFormProps } from "./ReviewForm.props";
import s from "./ReviewForm.module.css";
import cn from "classnames";
import CloseIcon from "../../_lib/icons/cross.svg";
import { Button, Input, Rating, TextArea } from "../index";
import { Controller, useForm } from "react-hook-form";
import { IReviewForm } from "./ReviewForm.interface";

export const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const { register, control, handleSubmit } = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={(e) => handleSubmit(onSubmit)}>
      <div className={cn(s.reviewForm, className)} {...props}>
        <Input {...register("name")} placeholder="Имя" />
        <Input
          {...register("title")}
          placeholder="Заголовок отзыва"
          className={s.title}
        />
        <div className={s.rating}>
          <span>Оценка:</span>
          {/* <Controller
            control={control}
            name="rating"
            render={({ field }) => (
              <Rating
                isEditable
                rating={field.value}
                setRating={field.onChange}
              />
            )}
          /> */}
        </div>
        <TextArea
          {...register("description")}
          placeholder="Текст отзыва"
          className={s.description}
        />
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
    </form>
  );
};
