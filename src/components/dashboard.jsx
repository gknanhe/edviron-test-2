
import React, { useEffect, useState } from 'react'
import set from "../assets/setting 1.png"
import Dash from "../assets/dash.png"
import Fee from "../assets/fee.png"
import Disbursal from "../assets/dis.png"
import Promote from "../assets/pro.png"
import Help from "../assets/help.png"
import Students from "../assets/stu.png"
import { IoIosArrowForward } from "react-icons/io"
import { BiSolidChevronDown } from "react-icons/bi"
import { RiMoneyDollarCircleLine } from "react-icons/ri"
import { BsFillBarChartFill } from "react-icons/bs"
import { GiDatabase } from "react-icons/gi"
import styled from 'styled-components';
import { AiOutlineArrowUp } from "react-icons/ai"
import { AiOutlineArrowDown } from "react-icons/ai"
import { ImCancelCircle } from "react-icons/im"
import { ImEnlarge } from "react-icons/im"
import Check from "../assets/check_circle.png"
import pend from "../assets/cir_pend.png"
import Img from "../assets/img.png"

import "./dashboard.css"
import PieChart from './piechart'
import Bar from './bar'
import { useRef } from 'react'
import { createRef } from 'react'
const Dashboard = () => {

    // for Pie
    const data = ["34.41%", "47.35%", "15%",'3.24%']
    const modes = ["online", "cash", "cheque","DD"]
    const bg = ['#4318FF',
        '#6AD2FF',
        '#EFF4FB',"#be29ec"]


    const StyledDiv = styled.div`
    margin-top: 5px;
    height: 10px;
    background-color: ${props => bg[props.index]};
    width: 10px;
    border-radius: 5px
`;

// for Bar chart
const barData=[100,100,100,90,80,70,55,40,35,25,15,10];
    const BarDiv=styled.div`
    height: ${props => barData[props.index]}%;
    border-radius: 8px;
    background-color: #F2EFFF;
    `;
const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

// tables
const d = [
    { name: "Prashant Kumar", role:"Super Admin" },
    { name: "Jashraj Singh Bhatia", role:"Admin" },
    { name: "Tarun Kheria", role:"Admin" },
    { name: "Aditya Mullay", role:"Management staff" },
]

const dis=[
    {Date:"July 11,2023",Amount:"₹5,03,123",Status:"Pending"},
    {Date:"July 10,2023",Amount:"₹5,03,123",Status:"Successful"},
    {Date:"July 08,2023",Amount:"₹5,03,123",Status:"Successful"},
    {Date:"July 09,2023",Amount:"₹5,03,123",Status:"Successful"}
]
const togglesidebar =createRef();
const  [first, setfirst] = useState(1)
const minimizeSidebar=()=>{
    const asideElement=togglesidebar.current
    
    
    if(first==1){
        asideElement.classList.add("toggle")       
    }
    setfirst(2)
   
};
const maximizeSidebar=()=>{
    const asideElement=togglesidebar.current
    if(first==2){
        asideElement.classList.remove("toggle")
    }
    setfirst(1)
}
const [sumFine, setsumFine] = useState(0)
const [students, setstudents] = useState(0)

    useEffect(() => {
      
        fetch("https://ediviron-nestjs-api.vercel.app/total-fine") .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
     setsumFine(data["totalSum"])
    
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });

    fetch("https://ediviron-nestjs-api.vercel.app/total-students") .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
       setstudents(data["no_of_students"])
      
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

     
    }, [])
    

    return (
        <div className="con-dash ">
            <div className="box-dash">

                <aside ref={togglesidebar}>
                    <div className="top">

                        <img src={set} alt="" />
                        <strong>Edviron</strong>
                       
                        


                    </div>
                    <div className="sidebar">
                        <a href="" id='active'>
                            <img src={Dash} alt="" />
                            <strong>Dashboard</strong>
                        </a>
                        <a href="">
                            <img src={Fee} alt="" />
                            <strong>Fee Management</strong>
                            <IoIosArrowForward className='for' />
                        </a>
                        <a href="">
                            <img src={Students} alt="" />
                            <strong>Students</strong>
                            <IoIosArrowForward className='for' />
                        </a>
                        <a href="">
                            <img src={Disbursal} alt="" />
                            <strong>Disbursal</strong>
                            <IoIosArrowForward className='for' />
                        </a>
                        <a href="">
                            <img src={Promote} alt="" />
                            <strong>Promote</strong>
                            <IoIosArrowForward className='for' />
                        </a>
                        <a href="">
                            <img src={Help} alt="" />
                            <strong>Help</strong>
                            <IoIosArrowForward className='for' />
                        </a>

                        <a href="" id='profile'>
                            <img src={Img} alt="" />
                            <div className="n-e">
                                <strong>Prashant</strong>
                                <p>Super Admin</p>
                            </div>
                            <BiSolidChevronDown className='down' />
                        </a>




                    </div>
                </aside>
                {
                            first==1?<ImCancelCircle onClick={minimizeSidebar} id="toggle"/>:<ImEnlarge onClick={maximizeSidebar} id="toggle"/>
                        }
                <main className='main-dash'>
                    <div className="main-box">
                        <h2>DAV PUBLIC SCHOOL, BHILAI</h2>
                        <div className="col-earns">
                            <div className="col-earn">
                                <div className="earn-cir-1">
                                    <RiMoneyDollarCircleLine />
                                </div>
                                <div className="earn-info">
                                    <p>Collection till date</p>
                                    <h2>₹5.34Cr</h2>
                                    <div className="data">
                                        <AiOutlineArrowUp className='ai' />
                                        <p className='p-green'>10%</p>
                                        <p>in last 30days</p>
                                    </div>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="col-earn">
                                <div className="earn-cir-2">
                                    <GiDatabase />
                                </div>
                                <div className="earn-info">
                                    <p>Balance</p>
                                    <h2>₹2.4Cr</h2>

                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="col-earn">
                                <div className="earn-cir-3">
                                    <BsFillBarChartFill />
                                </div>
                                <div className="earn-info">
                                    <p>Defaulters</p>
                                    <h2>11 <span>/1049 students</span></h2>
                                    <div className="data">
                                        <AiOutlineArrowDown className='ai' />
                                        <p className='p-green'>11%</p>
                                        <p>in last 30days</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="con-qts">
                            <div className="qt">
                                <p>students</p>
                                <h2>{students}</h2>
                            </div>
                            <div className="qt">
                                <p>sections</p>
                                <h2>18 <span>in 12 classes</span></h2>
                            </div>
                            <div className="qt">
                                <p>collections this month</p>
                                <h2>₹90.56Cr</h2>
                            </div>
                            <div className="qt">
                                <p>Fine collected till date</p>
                                <h2>₹{sumFine}</h2>
                            </div>

                        </div>

                        <div className="data-charts">
                            
                            <div className="con-bar-chart">
                               <h2>Overview</h2> 
                               <p>Monthly income</p>
                               <div className="bar-chart">
                                {
                                    months.map((mon,i)=>{
                                        return(
                                            <div className="bar-mon" >
                                                <div className="hover">{barData[i]}%</div>
                                            <Bar height={barData[i]} className="s-bar"/>
                                            <div className="mon">{mon}</div>
                                        </div>
                                        )
                                    })
                                }
                                   
                               </div>

                            </div>
                            <div className="pie-chart">
                                <h2>Payment Mode</h2>
                                <p>Split between Online, Cash
                                    and Cheque for collections till date</p>

                                <PieChart />
                                <div className="chart-data">
                                    {

                                        data.map((d, i) => {
                                            return <div className="single-data">
                                                <StyledDiv index={i}></StyledDiv>
                                                
                                                <div className="figs">
                                                    <p>{modes[i]}</p>
                                                    <strong>{d}</strong>
                                                </div>
                                            </div>
                                        })
                                    }

                                </div>
                            </div>
                        </div>

                        <div className="con-pers">
                            <div className="box-admin">
                                <h2>Admins</h2>
                                <table>
                                    <tr>
                                        <th>Name</th>
                                        <th>Role</th>
                                       
                                    </tr>
                                    {d.map((val, key) => {
                                        return (
                                            <tr key={key}>
                                                <td>{val.name}</td>
                                                <td>{val.role}</td>
                                               
                                            </tr>
                                        )
                                    })}
                                </table>
                            </div>
                            <div className="box-disbursals">
                                <h2>Disbursals</h2>

                                <table>
                                    <tr>
                                        <th>Date</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                       
                                    </tr>
                                    {dis.map((val, key) => {
                                        return (
                                            <tr key={key}>
                                                <td>{val.Date}</td>
                                                <td>{val.Amount}</td>
                                                <td><img src={val.Status=="Successful"?Check:pend} alt="" /> {val.Status}</td>
                                               
                                            </tr>
                                        )
                                    })}
                                </table>
                            </div>
                        </div>
                    </div>

                </main>

            </div>
        </div>
    )
}

export default Dashboard