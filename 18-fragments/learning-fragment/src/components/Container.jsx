import styles from '../components/Container.module.css'
const Container =(props)=>{
  return <div className={styles.container}>{props.children}</div>
}
export default Container