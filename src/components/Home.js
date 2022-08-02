import React, { useState, useEffect, useRef } from "react";
import UserData from "./UserData";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState();
    const temp = useRef(50);
    useEffect(() => {
        const isLogin = localStorage.getItem('foo');
        if (!isLogin) {
            alert('Please login first to visit the home page');
            navigate('/');
        } else {
            apiCall(50);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const apiCall = (num) => {
        axios
            .get(`https://randomuser.me/api/?results=${num}`)
            .then((response) => {
                if (response?.data?.results?.length) {
                    setData(response?.data?.results);
                    temp.current = num + 50;
                }
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    };

    const handleScroll = () => {
        const bottom =
            Math.ceil(window.innerHeight + window.scrollY) >=
            document.documentElement.scrollHeight;
        let timeoutHandler;
        if (bottom) {
            setIsLoading(true);
            if (timeoutHandler) {
                clearTimeout(timeoutHandler);
            }
            timeoutHandler = setTimeout(() => {
                apiCall(temp.current);
            }, 1000);

        }
    };

    return (
        <div style={{paddingBottom:'30px'}}>
            <Navbar />
            {data?.map((item) => {
                return <UserData item={item} key={item?.login?.uuid} />;

            })}
            {isLoading ? <div class="ui active centered inline loader"></div> : null}
        </div>
    );
};
export default Home;