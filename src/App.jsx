// App.jsx

import "./App.scss";
import sunrise from "./assets/images/sunrise.png";
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon.png";

/*  In App.jsx create a user object. This represents a user of our app. It should have two keys firstName and lastName. You can set them to any string you like.*/

/* In App.jsx use the values from the user object in your jsx. Add a message greeting the user using the firstName and lastName values from the user object. */

const App = () => {
  const user = {
    firstName: "Mark",
    lastName: "Lawson",
  };

  const currentHour = new Date().getHours();
  let greetingImg = sunrise;
  let message = "Good Morning!";

  if (currentHour > 12) {
    greetingImg = sun;
    message = "Good Afternoon!";
  }

  if (currentHour > 18) {
    greetingImg = moon;
    message = "Good Evening!";
  }

  return (
    <div className="app">
      <header className="greeting">
        <img src={greetingImg} alt="current time of day icon" className="greeting__img" />
        <h1 className="greeting__heading">{message}</h1>
        <h2>
          {user.firstName} {user.lastName}
        </h2>
      </header>
    </div>
  );
};

export default App;
