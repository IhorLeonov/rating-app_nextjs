import { AdvantagesProps } from "./Advantages.props";
import s from "./Advantages.module.css";
import MarkIcon from "../../_lib/icons/mark.svg";

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={s.advantage}>
          <MarkIcon />
          <div className={s.title}>{a.title}</div>
          <hr className={s.vline} />
          <div>{a.description}</div>
        </div>
      ))}
    </>
  );
};
