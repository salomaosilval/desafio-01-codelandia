import styles from "./styles.module.scss";

interface HeaderProps {
  name: string;
  title: string;
  inputPlaceHolder: string;
}

export const Header = ({ name, title, inputPlaceHolder }: HeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.name}>{name}</p>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder={inputPlaceHolder}
          className={styles.input}
        />
      </div>
    </div>
  );
};
