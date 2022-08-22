import { data } from "autoprefixer";
import React from "react";


function Demo() {
    // const [data, setData] = useState({
    //     email: "",
    //     password: "",
    // })

    // console.log(data);

    // const handleChange = (e) => {
    //     let email = e.target.email;
    //     let value = e.target.value;

    //     setData({...data, [email]:value});                                          




    return (
        <div className="h-screen bg-gradient-to-br from-blue-400 to-orange-300 flex justify-center items-center">
            <div className="max-w-3xl w-full bg-gray-300 rounded-xl p-10">
            <form className="space-x-5 w-[30rem] mb-10">
                <div className="flex flex-wrap gap-10 ">
                <div>
                <label htmlFor="email">Your Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="" 
                    value={data.email} 
                    className="pr-10 block w-full p-1.5 dark:border-gray-300 dark:placeholder-gray-400" required />
                </div>

                <div>
                <label htmlFor="password">Your Password</label>
                <input 
                    type="password" 
                    id="password" 
                    className="pr-10 block w-full p-1.5 dark:border-gray-300 dark:placeholder-gray-400"
                    value={data.email} required/>
                </div>

                <div>
                <input type="checkbox" id="remember" value="" className="pr-20" />
                <label htmlFor="remember">Remember Me</label>
                </div>
                </div>

                <div>    
                    <button type="submit" className="bg-blue-600 text-white hover:bg-blue-800 text-lg py-2 px-5 rounded-md flex-wrap">Submit</button>
                </div>
                
            </form>
            </div>
        </div>
    )
};




export default Demo;