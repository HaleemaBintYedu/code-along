import  React from "react"
import coffee from "../assets/Image/coffee.jpg";

function Practice() {
    return (
        <div className="flex justify-center items-center h-screen">
        <div className="w-96 shadow-md">
            <div className="h-60 overflow-hidden">
                <img src={coffee} alt="" />
            </div>
            <div className="p-5">
            <div className="flex justify-between">
            <h3 className="font-bold capitalize">LHp Pavilion 15</h3>
            <h3>GHC4500</h3>
            </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.

        </p>
        </div>
        </div>
        </div>
        
    )
}




export default Practice;

{/* <nav className="bg-[#25dfea] py-[25px]">
                <h3>Logo</h3>
                <h>Menus</h>
            </nav> */}