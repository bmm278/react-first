import "./coupon.css"
import React, { useState } from 'react'
// import Dailypoint from '../../Dailypoint/Dailypoint'
//import ChangeTab from '../ChangeTab'
import axios from 'axios'

const coponobj = [
    {
      id: 1,
      point: 50,
    },
    {
      id: 2,
      point: 100,
    },
    {
      id: 3,
      point: 150,
    },
    {
      id: 4,
      point: 200,
    },
  ]

export default function Coupon(props) {
    const {eggpoints} = props
    console.log(props);
    
    //把上面的陣列塞進去
    const[CouponData, setCouponData] = useState(coponobj)
    console.log(CouponData)

    //useState 裡面應該要放一個變數
    const[changeCoupon, setchangeCoupon] = useState()

      // 呈現資料畫面是否兌換完成
    const[CouponState50, setCouponState50] = useState('50點兌換')
    //console.log(CouponState50)

    //兌換判斷式 這個fc還沒寫完..
    function clickchange () {
        console.log(eggpoints)
        //console.log(changeCoupon)
        if(eggpoints >= changeCoupon){
            alert('兌換完成')
            setCouponState50('兌換完成')
        }
        if (eggpoints !== changeCoupon){
            alert('抱歉點數不足')
        }

        //送資料到後端
        axios.post('http://localhost:3600/game/coupon' , {change_coupon:3, change_memberid:530}).then(result=>{console.log(result.data)})
    }

  return (
    <>
        <div className="container">
                <div className="row mb-2">
                    <div className="col-md-6 coupon">
                        <div className="d-flex  border rounded overflow-hidden  mb-4 shadow">
                            <div className="col-8">
                                <img
                                    className="w-100 objfit"
                                    src="/dailypoint-img/52c1abae31a722933f917fce0fccc868.jpg"
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
                                    $100
                                </p>
                                <p className="card-text mb-3 text-center">
                                    --消費滿500可使用--
                                </p>
                                <button className="btn btn-primary" onClick={clickchange}> 
                                    {CouponState50}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 coupon">
                        <div className="d-flex  border rounded overflow-hidden  mb-4 shadow">
                            <div className="col-8">
                                <img
                                    className="img-fluid objfit"
                                    src="/dailypoint-img/top-view-fresh-white-chicken-eggs_114579-82238.jpg"
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
                                    $200
                                </p>
                                <p className="card-text mb-3 text-center">
                                    --消費滿500可使用--
                                </p>
                                <button className="btn btn-primary" onClick={clickchange}>
                                    100點使用兌換
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 coupon">
                        <div className="d-flex  border rounded overflow-hidden  mb-4 shadow">
                            <div className="col-8">
                                <img
                                    className="img-fluid objfit"
                                    src="/dailypoint-img/4b08287a319a467288279c8499eb2db3.jpg"
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
                                    $300
                                </p>
                                <p className="card-text mb-3 text-center">
                                    --消費滿500可使用--
                                </p>
                                <button className="btn btn-primary" onClick={clickchange}>
                                    150點使用兌換
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 coupon">
                        <div className="d-flex  border rounded overflow-hidden  mb-4 shadow">
                            <div className="col-8">
                                <img
                                    className="img-fluid objfit"
                                    src="/dailypoint-img/43961109b445769ed853c21b1d646eeb.jpg"
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
                                    $400
                                </p>
                                <p className="card-text mb-3 text-center">
                                    --消費滿500可使用--
                                </p>
                                <button className="btn btn-primary" onClick={clickchange}>
                                    200點使用兌換
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
 
  )
}
