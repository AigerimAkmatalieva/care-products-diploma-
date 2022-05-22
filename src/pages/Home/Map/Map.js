import classes from "./Map.module.css";

const Map = () => {
  return ( <div className={classes.Map}>
    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799228898!2d-74.25987793677412!3d40.697670062211486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodCo0JA!5e0!3m2!1sru!2skg!4v1653233400667!5m2!1sru!2skg" width="1097" height="450" allowFullScreen="" loading="lazy"></iframe>
  </div> );
}
export default Map;