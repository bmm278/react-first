import "./coupon.css"
import React, { useEffect, useState } from 'react'
// import Dailypoint from '../../Dailypoint/Dailypoint'
//import ChangeTab from '../ChangeTab'
import axios from 'axios'
import { couponobj } from "./data/couponobj"

export default function Coupon(props) {
    //解構蛋的點數
    const {eggpoints, setEggPoints} = props

    const discountArray = [...couponobj]

      // 呈現資料畫面是否兌換完成
    const[CouponState, setCouponState] = useState([])

    //console.log(CouponState50)


    useEffect(()=>{
        setCouponState(discountArray)
    },[])

    //兌換判斷式 這個fc還沒寫完..
    // function clickchange () {
    //     console.log(eggpoints)
    //     console.log(changeCoupon)
    //     if(eggpoints >= changeCoupon){
    //         //alert('兌換完成')
    //         setCouponState50('兌換完成')
    //         setEggPoints(0)
    //     }
    //     if (eggpoints <= changeCoupon){
    //         alert('抱歉點數不足')
    //     }

    //     //送資料到後端
    //     axios.post('http://localhost:3600/game/coupon' , {change_coupon:150, change_spainpoints:50, change_memberid:530}).then(result=>{console.log(result.data)})
    // }
const clickchange=(i)=>{
    let newCouponState = [...discountArray]
    newCouponState[i].change=1
    
    setCouponState(newCouponState)
}
  return (
    <>
        <div className="container">
                <div className="row mb-2">


                {discountArray.map((v,i)=>{
                    return(<div className="col-md-6 coupon" key={v.id}>
                        <div className="d-flex  border rounded overflow-hidden  mb-4 shadow">
                            <div className="col-8">
                                <img
                                    className="w-100 objfit"
                                    src={v.image}
                                    // src="/dailypoint-img/52c1abae31a722933f917fce0fccc868.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-4 p-4 d-flex flex-column position-static">
                                <p
                                    className="d-inline-block mb-1 text-primary text-center"
                                    style={{ fontSize: '2.5rem' }}
                                >
                                    折價券
                                </p>
                                <p
                                    className="mb-1 text-center"
                                    style={{ fontSize: '4rem' }}
                                >
                                    ${v.price}
                                </p>
                                <p className="card-text mb-3 text-center">
                                    --消費滿500可使用--
                                </p>
                                <button className="btn btn-primary" onClick={(()=>{
                                    clickchange(i)
                                   
                                })}>
                                {/* //  onClick={clickchange}>  */}
                                    {v.change===0?`${v.point}點使用兌換`:`已兌換過`}
                                </button>
                            </div>
                        </div>
                    </div>)
                })}
                   
                </div>
            </div>
    </>
 
  )
}
