import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN ISKENDERUN</h1>
      <p className={styles.desc}>
        Pizza is an Italian food that was created in Italy but have a different
        point of view with Mr.Lutfullah. It is made with different toppings. Some
        of the most common toppings are cheese, sausages, pepperoni, vegetables,
        tomatoes, spices and herbs and basil. These toppings are added over a
        piece of bread covered with sauce.
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
