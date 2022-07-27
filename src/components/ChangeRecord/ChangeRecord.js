import React, { useEffect, useState } from "react";
import { AB_GET_LIST } from "../../config/ajax-path";
import { useLocation } from "react-router-dom";
import Pagination from "./pagination";

// componentDidMount
// componentDidUpdate
// componentWillUnmount

export default function ChangeRecord() {
    const [data, setData] = useState({});
    const location = useLocation();
    const usp = new URLSearchParams(location.search);
    // usp.get('page')

    console.log(location);

    const getPageData = async (event, gotoPage) => {
        if (event) {
            event.preventDefault();
        }
        console.log({ gotoPage });

        const r = await fetch(`${AB_GET_LIST}?page=${gotoPage}`);
        const obj = await r.json();
        console.log(obj);
        setData(obj);
    };

    useEffect(() => {
        getPageData(null, +usp.get('page') || 1);
    }, [location]);

    return (
        <div>
            {data && data.totalPages ? (
              <Pagination page={data.page} totalPages={data.totalPages} />
            ) : null}

            {console.log({ data })}
            <table className="table table-striped">
                <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">會員ID</th>
            <th scope="col">會員姓名</th>
            <th scope="col">兌換點數</th>
            <th scope="col">兌換數量</th>
            {/* <th scope="col">會員生日</th> */}
            <th scope="col">兌換時間</th>
          </tr>
        </thead>
        <tbody>
          {data && data.rows
            ? data.rows.map((row) => (
                <tr key={'mm' + row.change_sid}>
                  <th scope="row">{row.change_sid}</th>
                  <th scope="row">{row.change_nameid}</th>
                  <td>{row.change_name}</td>
                  <td>{row.change_point}</td>
                  <td>{row.change_quantity}</td>
                  <td>{row.birthday}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  )
}
