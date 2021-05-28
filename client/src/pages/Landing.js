import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import pizzaIcon from "@iconify/icons-twemoji/pizza";

function Landing() {
  return (
    <div>
      <section className="hero__img">
        <div className="center-content">
          <h1 className="hero__title">Welcome to A La Leña</h1>
          <h3 className="hero__subtitle">
            {" "}
            Try our tasty fire wood made pizza, heated to just the right
            temperature in our brick style ovens.
          </h3>
          <Link to="/order" className="button checkout__button">
            <strong>Order Online</strong>
          </Link>
        </div>
      </section>

      <aside className="menu">
        <h1 className="title">Menu</h1>
        <hr />
        <p className="subtitle">Build Your Own</p>
        <ul className="menu-list">
          <li>
            <p>Sizes</p>
            <ul type="disc">12″ / 16″ / 18″</ul>
          </li>
          <li>
            <p>Sauces</p>
            <ul type="disc">Traditional, White and Pesto </ul>
          </li>
          <li>
            <p>Toppings</p>
            <ul type="disc">
              Italian Sausage Bacon Pepperoni Ham Chicken Canadian Bacon Spinach
              Basil Onions Minced Garlic Sund drided tomatoes Black Olives Bell
              Peppers Ground Beef{" "}
            </ul>
          </li>
          <li>
            <p>Cheeses</p>
            <ul type="disc"> Mozzarella and Goat Cheese</ul>
          </li>
        </ul>
        <p className="subtitle">Chef's Brick Oven Pizzas</p>
      </aside>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <Icon icon={pizzaIcon} style={{ fontSize: "20px" }} />
            </div>
            <div className="media-content">
              <p className="is-4">
                <strong>The Kirby </strong>
              </p>
              <p className=" is-6">
                White sauce, mozzarella cheese, chicken, minced garlic, basil,
                and onions
              </p>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <Icon icon={pizzaIcon} style={{ fontSize: "20px" }} />
            </div>
            <div className="media-content">
              <p className=" is-4">
                <strong>The Claytonator</strong>
              </p>
              <p className=" is-6">
                Traditional sauce, fresh mozzarella, sun dried tomatoes,
                canadian bacon, and black olives
              </p>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <Icon icon={pizzaIcon} style={{ fontSize: "20px" }} />
            </div>
            <div className="media-content">
              <p className=" is-4">
                <strong>Pesto Westo</strong>
              </p>
              <p className=" is-6">
                Pesto sauce, goat cheese, spinach, bell peppers, and ground beef
              </p>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <Icon icon={pizzaIcon} style={{ fontSize: "20px" }} />
            </div>
            <div className="media-content">
              <p className=" is-4">
                <strong>Cheese</strong>
              </p>
              <p className=" is-6">Traditional sauce, mozzarella cheese </p>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <Icon icon={pizzaIcon} style={{ fontSize: "20px" }} />
            </div>
            <div className="media-content">
              <p className="is-4">
                <strong>Meat Lover</strong>
              </p>
              <p className=" is-6">
                Traditional sauce, mozzarella cheese, italian sausage, ham,
                bacon, and pepperoni
              </p>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <Icon icon={pizzaIcon} style={{ fontSize: "20px" }} />
            </div>
            <div className="media-content">
              <p className=" is-4">Vegan</p>
              <p className=" is-6">
                <strong>Spinach</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
