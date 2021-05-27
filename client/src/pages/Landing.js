import React from "react";

function Landing() {
  return (
    <div>
      <section className="hero  is-fullheight">
        <div className="hero-body">
          <div className="">
            <p className="title">Welcome to A La Leña</p>
            <p className="subtitle">
              Try our tasty fire wood made pizza, heated to just the right
              temperature in our brick style ovens.
            </p>
            <p>Log in or sign up to order online.</p>
          </div>
        </div>
      </section>

      <aside className="menu">
        <p className="menu-label">Build Your Pizza</p>
        <ul className="menu-list">
          <li>
            <p>Size</p>
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
            <p>Chesses</p>
            <ul type="disc"> Mozzarella Goat Cheese</ul>
          </li>
        </ul>
        <p className="menu-label">Chef's Brick Oven Pizzas</p>
      </aside>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder "
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">The Kirby </p>
              <p className="subtitle is-6">
                White sauce, mozzarella cheese, chicken, minced garlic, basil,
                and onions
              </p>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder "
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">The Claytonator</p>
              <p className="subtitle is-6">
                Traditional sauce, fresh mozzarella, sun dried tomatoes,
                canadian bacon, and black olives
              </p>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder "
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Pesto Westo</p>
              <p className="subtitle is-6">
                Pesto sauce, goat cheese, spinach, bell peppers, and ground beef
              </p>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder "
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Cheese</p>
              <p className="subtitle is-6">
                Traditional sauce, mozzarella cheese{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder "
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Meat Lover</p>
              <p className="subtitle is-6">
                Traditional sauce, mozzarella cheese, italian sausage, ham,
                bacon, and pepperoni
              </p>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder "
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Vegan</p>
              <p className="subtitle is-6">Spinach</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
