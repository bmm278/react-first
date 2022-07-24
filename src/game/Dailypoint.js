import React, { Component } from 'react';
import './Dailypoint.css';

function Dailypoint () {
    return (
        <>
            <div className="mb-4 text-white bgg">
                <div className="container pt-5">
                    <div className="text-center pt-5 ">
                        <img
                            src="/dailypoint-img/1041602.png"
                            alt=""
                            className="eggyellow mb-4 mt-4"
                        />
                    </div>
                    <div className="text-center">
                        <img
                            src="/dailypoint-img/812921.png"
                            alt=""
                            className="egg"
                        />
                        <img
                            src="/dailypoint-img/812921.png"
                            alt=""
                            className="egg"
                        />
                        <img
                            src="/dailypoint-img/812921.png"
                            alt=""
                            className="egg"
                        />
                        <img
                            src="/dailypoint-img/812921.png"
                            alt=""
                            className="egg"
                        />
                        <img
                            src="/dailypoint-img/812921.png"
                            alt=""
                            className="egg"
                        />
                    </div>
                    <br />
                    <div className="">
                        <h1 className="display-6 text-center">點擊領取</h1>
                        <h1 className="display-7 text-center ">目前點數: 10</h1>
                    </div>
                    <br />
                    <div>
                        <p className="lead mb-0 text-center bg-danger">
                            今日已完成兌換囉...
                        </p>
                    </div>
                </div>
            </div>
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
