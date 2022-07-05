import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Life is a lot like ice cream. You have to relish it before it melts.</h2>
      <p>
        Choose your favorite icecream from our broad selection of flavours
        and enjoy your frozen treat at home.
      </p>
      {/* <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p> */}
    </section>
  );
};

export default MealsSummary;