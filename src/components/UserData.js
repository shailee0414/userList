import React from "react";

const UserData = ({ item }) => {
    return (
        <div className="ui middle aligned selection list" key={item?.login?.uuid}>
            <div className="item">
                <img className="ui avatar image" src={`${item?.picture?.large}`} />
                <div className="content">
                    <div className="header">{item.name.title}.  {item.name.first}  {item.name.last}</div>
                </div>

            </div>

        </div>
    )
}
export default UserData;