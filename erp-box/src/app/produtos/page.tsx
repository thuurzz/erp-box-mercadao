"use client";

import { useEffect, useState } from "react";
import styles from "./Foods.module.css";

import { Food } from "@prisma/client";

import FoodCard from "../components/foodcard";
import AddFood from "../components/addfood";
import axios from "axios";
import { Button } from "@mui/material";
import Link from "next/link";

function Foods() {
  const [showAddFoodModal, setShowAddFoodModal] = useState(false);
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    getFoods();
  }, []);

  const getFoods = async () => {
    const resp = await axios.get("/api/foods");
    const foods = resp.data;
    setFoods(foods);
  };

  return (
    <div className={styles.foodsCnt}>
      <div className={styles.foodsBreadcrumb}>
        <div>
          <h2>🍋 Produtos 🌶️</h2>
        </div>
        <div>
          <Button variant="contained" style={{}}>
            <Link href="/">Voltar</Link>
          </Button>
          <Button
            variant="contained"
            style={{
              paddingLeft: "15px",
              paddingRight: "15px",
              fontWeight: "500",
              marginLeft: "0.5rem",
            }}
            onClick={() => setShowAddFoodModal((pV) => !pV)}
          >
            Cadastrar
          </Button>
        </div>
      </div>
      <div className={styles.foods}>
        {foods.map((food, i) => (
          <FoodCard food={food} key={i} />
        ))}
      </div>
      {showAddFoodModal ? (
        <AddFood closeModal={() => setShowAddFoodModal(false)} />
      ) : null}
    </div>
  );
}

export default Foods;
