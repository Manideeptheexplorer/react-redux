import styles from "./Item.module.css";
const Item = ({ fooditems, bought, HandleEvent }) => {
  // const HandleEvent=(fooditems)=>{
  //   console.log(`${fooditems} has been bought`)
  // }
  return (
    <>
      <li className={`list-group-item ${bought && "active"}`}>
        <span className={styles["mani-span"]}>{fooditems}</span>
        <button
          className={`${styles.button} btn btn-info`}
          onClick={HandleEvent}
        >
          Buy
        </button>
      </li>
    </>
  );
};
export default Item;
