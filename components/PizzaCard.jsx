import Image from "next/image";
import Link from "next/link";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <Link href="/product/1">
      <div className={styles.container}>
        <Image src="/img/pizza.png" alt="" width="500" height="500" />
        <h1 className={styles.title}>LUTFULLAH SPECIAL</h1>
        <span className={styles.price}>$19.90</span>
        <p className={styles.desc}>
          Taste and enjoy your pizza with Mr.Lutfullah...
        </p>
      </div>
    </Link>
  );
};

export default PizzaCard;
