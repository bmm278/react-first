import React, { useState } from 'react';
import './Dailypoint.css';
import ChangeTab from '../components/ChangeTab'

function Dailypoint () {

    const [dataCheck, setDataCheck] = useState (true)
    // const [eggbroken, seteggbroken] = useState({src:"/dailypoint-img/812921.png",dataCheck:true})

    const [eggStates, setEggStates] = useState([0,0,0,0,0]);
    const[eggpoints, setEggPoints] = useState(0);

    const brokenegg = "/dailypoint-img/44434.png" 
    const defaultegg = "/dailypoint-img/812921.png" 
    console.log(brokenegg)


    const eggClick = (i) =>{
        // console.log({i})
        if(dataCheck){
        const newEggStates = [...eggStates];
        newEggStates[i] = 1;
        setEggStates(newEggStates);
        const pointArray = [5,10,15,20,25,30]
        const randomNum = Math.ceil(Math.random()*6)
        const getPoint = pointArray[randomNum]
        //TODO 問心得為啥沒數字
        console.log(getPoint);
        setEggPoints(getPoint)
        setDataCheck(false)
    } else {
            alert("今天領過囉")

        }
        /*
        console.log(e.target);
        if(eggbroken.dataCheck){
            seteggbroken({...eggbroken,src:brokenegg,dataCheck:false})
        } else {
            alert("今天領過囉")
        }
        */
    }

    return (
        <>
            <div className="mb-4 text-white bgg">
                <div className="container pt-5">
                    <div className="text-center pt-5">
                        <img
                            src="/dailypoint-img/1041602.png"
                            alt=""
                            data-check={dataCheck}
                            className="eggyellow mb-4 mt-4"
                            
                        />
                    </div>
                    <div className="text-center">
                        {Array(5).fill(1).map((v,i)=>{
                            return(
                                <img
                                key={i}
                            src={eggStates[i] ? brokenegg : defaultegg }
                            alt=""
                            data-check={dataCheck.dataCheck}
                            className="egg"
                            onClick={(e)=>{eggClick(i)}}
                        />
                            )
                        })}

                    </div>
                    <br />
                    <div className="">
                        <h1 className="display-6 text-center">點擊領取</h1>
                    </div>
                    <div className="">
                        <h1 className="display-7 text-center ">目前點數:{eggpoints}</h1>
                    </div>
                    <br />
                    <div className="">
                        <p className="lead mb-0 text-center bg-danger">
                            今日已完成兌換囉...{}
                        </p>
                    </div>
                </div>
            </div>
                        
            <div><ChangeTab/></div> 

            {/* <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
            </li>
            <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
            </li>
                </ul>
             */}

            <div className="container">
                <div className="row mb-2">
                    <div className="col-md-6 coupon">
                        <div className="d-flex  border rounded overflow-hidden  mb-4 shadow">
                            <div className="col-8">
                                <img
                                    className="w-100 objfit"
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
                                <button className="btn btn-primary">
                                    50點使用兌換
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
                                <button className="btn btn-primary">
                                    50點使用兌換
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
                                <button className="btn btn-primary">
                                    50點使用兌換
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
                                <button className="btn btn-primary">
                                    50點使用兌換
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Dailypoint;
