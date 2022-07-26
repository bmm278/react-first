import styles from "./ChangeTab.module.css"
import clsx from 'clsx'
import { useState } from 'react'
import Game from '../../game/Game'

function ChangeTab() {
  const [selected, setSelected] = useState(0)
  const pages = [<Game />]
  const [info, setInfo] = useState(<Game />)
  const handleClicked = (id) => {
    setSelected(selected !== id ? id : undefined)
    setInfo(pages[id])
  }
  return (
    <>
      <div className={styles.tabWrap}>
        <div
          className={clsx(styles.tab, {
            [styles.active]: selected === 0,
          })}
          onClick={() => {
            handleClicked(0)
          }}
        >
          <p>商品細節</p>
        </div>
        <div
          className={clsx(styles.tab_product_recipe, styles.tab, {
            [styles.active]: selected === 1,
          })}
          onClick={() => {
            handleClicked(1)
          }}
        >
          <p>食譜推薦</p>
        </div>
        <div
          className={clsx(styles.tab_product_share, styles.tab, {
            [styles.active]: selected === 2,
          })}
          onClick={() => {
            handleClicked(2)
          }}
        >
          <p>好評分享</p>
        </div>
      </div>
      <div>{info}</div>
    </>
  )
}
export default ChangeTab