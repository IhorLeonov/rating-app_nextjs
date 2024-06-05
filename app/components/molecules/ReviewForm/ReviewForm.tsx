import s from "./ReviewForm.module.css";
import cn from "classnames";
import CloseIcon from "../../../lib/icons/cross.svg";

import { Button, Input, Rating, TextArea } from "../../index";
import { ReviewFormProps } from "./ReviewForm.props";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm } from "./ReviewForm.interface";
import { sendReview } from "@/app/api/review-api";
import { useState } from "react";

export const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewForm>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const data = await sendReview(formData, productId);
      if (data.message) {
        setIsSuccess(true);
        setError("");
        reset();
      } else {
        setError("Something went wrong");
      }
    } catch (error) {
      const e = error as Error;
      setError(e.message);
      setIsSuccess(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(s.reviewForm, className)} {...props}>
        <Input
          {...register("name", {
            required: { value: true, message: "Введите имя" },
          })}
          placeholder="Name"
          error={errors.name}
        />
        <Input
          {...register("title", {
            required: { value: true, message: "Введите заголовок" },
          })}
          placeholder="Review title"
          className={s.title}
          error={errors.title}
        />

        <div className={s.rating}>
          <span>Rating:</span>

          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: "Выберите оценку" } }}
            render={({ field }) => (
              <Rating
                isEditable
                rating={field.value}
                setRating={field.onChange}
                ref={field.ref}
                error={errors.rating}
              />
            )}
          />
        </div>

        <TextArea
          {...register("description", {
            required: { value: true, message: "Enter description" },
          })}
          placeholder="Review description"
          className={s.description}
          error={errors.description}
        />

        <div className={s.submit}>
          <Button type="submit" appearance="primary">
            Send
          </Button>
          <span className={s.info}>
            * Before adding, the review will get additional moderation and
            verification.
          </span>
        </div>
      </div>

      {isSuccess && (
        <div className={cn(s.notify, s.success)}>
          <div className={s.successTitle}>The review was sent</div>
          <div>
            Thank you, your review will be published after verification.
          </div>
          <CloseIcon
            className={s.closeIcon}
            onClick={() => setIsSuccess(false)}
          />
        </div>
      )}
      {error && (
        <div className={cn(s.notify, s.error)}>
          <div>{error}</div>
          <CloseIcon className={s.closeIcon} onClick={() => setError("")} />
        </div>
      )}
    </form>
  );
};
