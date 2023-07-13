import { Food } from "@prisma/client";
import styles from "./FoodCard.module.css";
import Link from "next/link";

type FoodCardProps = {
  food: Food;
};

export default function FoodCard({ food }: FoodCardProps) {
  return (
    <Link href={`/food/${food.id}`}>
      <div className={styles.foodCard}>
        <img
          alt={`Food Image of: ${food?.name}`}
          aria-label={`Food Image of: ${food?.name}`}
          className={styles.foodCardImg}
          src={food.imageUrl}
        />
        <div className={styles.foodCardFooter}>
          <div className={styles.foodCardName}>
            <h3>{food.name}</h3>
          </div>
          <div className={styles.foodCardPrice}>
            <span>💰 Preço </span>
            <span>R$: {food.price}</span>
          </div>
          <div className={styles.foodCardPrice}>
            <span>💸 Menor Preço </span>
            <span>R$: {Number(food.price) * 0.95}</span>
          </div>
          <div className={styles.foodCardActive}>
            <span>📦 Em estoque:</span>
            <span>{food.active}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
